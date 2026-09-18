import { useState, useEffect } from "react";
import type { PokemonListItem } from "./types/api";
import { obtenerListaPokemon } from "./services/api";
import ListaPokemon from "./components/ListaPokemon";
import EstadoMensaje from "./components/EstadoMensaje";
import "./styles/App.css";

function App() {
  const [data, setData] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarPokemon() {
      try {
        setLoading(true);
        const respuesta = await obtenerListaPokemon();
        setData(respuesta.results);
        setError(null);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError("No se pudo cargar la lista de Pokémon");
        }
      } finally {
        setLoading(false);
      }
    }

    cargarPokemon();

    return () => controller.abort();
  }, []);

  return (
    <div className="app">
      <h1>Pokédex</h1>
      {loading && <EstadoMensaje tipo="cargando" />}
      {!loading && error && <EstadoMensaje tipo="error" mensaje={error} />}
      {!loading && !error && data.length === 0 && <EstadoMensaje tipo="vacio" />}
      {!loading && !error && data.length > 0 && <ListaPokemon pokemones={data} />}
    </div>
  );
}

export default App;
