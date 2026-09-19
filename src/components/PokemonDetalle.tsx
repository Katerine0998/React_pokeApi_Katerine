import { useEffect, useState } from "react";
import type { PokemonDetail } from "../types/api";
import { obtenerDetallePokemon } from "../services/api";
import EstadoMensaje from "./EstadoMensaje";

interface PokemonDetalleProps {
  url: string;
  onVolver: () => void;
}

function PokemonDetalle({ url, onVolver }: PokemonDetalleProps) {
  const [detalle, setDetalle] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarDetalle() {
      try {
        setLoading(true);
        const data = await obtenerDetallePokemon(url);
        setDetalle(data);
        setError(null);
      } catch {
        if (!controller.signal.aborted) {
          setError("No se pudo cargar el detalle");
        }
      } finally {
        setLoading(false);
      }
    }

    cargarDetalle();
    return () => controller.abort();
  }, [url]);

  return (
    <div className="detalle-pokemon">
      <button onClick={onVolver} className="boton-volver">← Volver al listado</button>

      {loading && <EstadoMensaje tipo="cargando" />}
      {!loading && error && <EstadoMensaje tipo="error" mensaje={error} />}

      {!loading && !error && detalle && (
        <div className="detalle-pokemon__contenido">
          <h2>{detalle.name} #{detalle.id}</h2>
          <img src={detalle.sprites.front_default} alt={detalle.name} />
          <p>Altura: {detalle.height}</p>
          <p>Peso: {detalle.weight}</p>
          <p>Tipos: {detalle.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonDetalle;