import { useState, useEffect } from "react";
import type { PokemonListItem } from "./types/api";
import { obtenerListaPokemon } from "./services/api";
import ListaPokemon from "./components/ListaPokemon";
import EstadoMensaje from "./components/EstadoMensaje";
import Buscador from "./components/Buscador";
import PokemonDetalle from "./components/PokemonDetalle";
import { useFavoritos } from "./hooks/useFavoritos";
import "./styles/App.css";

function App() {
  const [data, setData] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [busqueda, setBusqueda] = useState("");
  const [busquedaDebounced, setBusquedaDebounced] = useState("");

  const [urlSeleccionada, setUrlSeleccionada] = useState<string | null>(null);

  const { favoritos, esFavorito, alternarFavorito } = useFavoritos();

  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarPokemon() {
      try {
        setLoading(true);
        const respuesta = await obtenerListaPokemon();
        setData(respuesta.results);
        setError(null);
      } catch {
        if (!controller.signal.aborted) {
          setError("No se pudo cargar la lista de Pokémon");
        }
      } finally {
        setLoading(false);
      }
    }

    cargarPokemon();
    return () => controller.abort();
  }, [intento]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBusquedaDebounced(busqueda);
    }, 400);

    return () => clearTimeout(timer);
  }, [busqueda]);

  const pokemonesFiltrados = data.filter((p) =>
    p.name.toLowerCase().includes(busquedaDebounced.toLowerCase())
  );

  if (urlSeleccionada) {
    return (
      <div className="app">
        <PokemonDetalle url={urlSeleccionada} onVolver={() => setUrlSeleccionada(null)} />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <p className="contador-favoritos">❤️ Favoritos: {favoritos.length}</p>
      <Buscador valor={busqueda} onCambiar={setBusqueda} />

      {loading && <EstadoMensaje tipo="cargando" />}
      {!loading && error && (
  <EstadoMensaje
    tipo="error"
    mensaje={error}
    onReintentar={() => setIntento((i) => i + 1)}
    reintentando={loading}
  />
)}
      {!loading && !error && pokemonesFiltrados.length === 0 && <EstadoMensaje tipo="vacio" />}
      {!loading && !error && pokemonesFiltrados.length > 0 && (
        <ListaPokemon
          pokemones={pokemonesFiltrados}
          onSeleccionar={setUrlSeleccionada}
          esFavorito={esFavorito}
          onToggleFavorito={alternarFavorito}
        />
      )}
    </div>
  );
}

export default App;