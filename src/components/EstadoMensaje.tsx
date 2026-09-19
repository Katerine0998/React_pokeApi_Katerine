interface EstadoMensajeProps {
  tipo: "cargando" | "error" | "vacio";
  mensaje?: string;
  onReintentar?: () => void;
}

function EstadoMensaje({ tipo, mensaje, onReintentar }: EstadoMensajeProps) {
  if (tipo === "cargando") {
    return <p className="estado-mensaje">Cargando...</p>;
  }

  if (tipo === "error") {
    return (
      <div className="estado-mensaje estado-mensaje--error">
        <p>{mensaje}</p>
        {onReintentar && (
          <button onClick={onReintentar} className="boton-reintentar">
            Reintentar
          </button>
        )}
      </div>
    );
  }

  return <p className="estado-mensaje">Sin resultados</p>;
}

export default EstadoMensaje;