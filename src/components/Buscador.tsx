interface BuscadorProps {
    valor: string;
    onCambiar: (valor: string) => void;
  }
  
  function Buscador({ valor, onCambiar }: BuscadorProps) {
    return (
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
        className="buscador"
      />
    );
  }
  
  export default Buscador;