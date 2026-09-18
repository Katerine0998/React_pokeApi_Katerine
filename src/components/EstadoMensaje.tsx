interface EstadoMensajeProps {
    tipo: "cargando" | "error" | "vacio";
    mensaje?: string;
  }
  
  function EstadoMensaje({ tipo, mensaje }: EstadoMensajeProps) {
    if (tipo === "cargando") {
      return <p className="estado-mensaje">Cargando...</p>;
    }
  
    if (tipo === "error") {
      return <p className="estado-mensaje estado-mensaje--error">{mensaje}</p>;
    }
  
    return <p className="estado-mensaje">Sin resultados</p>;
  }
  
  export default EstadoMensaje;