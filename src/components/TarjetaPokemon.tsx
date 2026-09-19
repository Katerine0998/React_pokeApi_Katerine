interface TarjetaPokemonProps {
    nombre: string;
    url: string;
    onClick: () => void;
    esFavorito: boolean;
    onToggleFavorito: () => void;
  }
  
  function TarjetaPokemon({
    nombre,
    url,
    onClick,
    esFavorito,
    onToggleFavorito,
  }: TarjetaPokemonProps) {
    const partes = url.split("/").filter(Boolean);
    const id = partes[partes.length - 1];
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="tarjeta-pokemon">
        <button
          className="tarjeta-pokemon__favorito"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito();
          }}
        >
          {esFavorito ? "❤️" : "🤍"}
        </button>
  
        <div onClick={onClick}>
          <img src={imagen} alt={nombre} />
          <p className="tarjeta-pokemon__numero">#{id}</p>
          <p className="tarjeta-pokemon__nombre">{nombre}</p>
        </div>
      </div>
    );
  }
  
  export default TarjetaPokemon;
