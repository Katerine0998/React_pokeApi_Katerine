interface TarjetaPokemonProps {
    nombre: string;
    url: string;
    onClick: () => void;
  }
  
  function TarjetaPokemon({ nombre, url, onClick }: TarjetaPokemonProps) {
    const partes = url.split("/").filter(Boolean);
    const id = partes[partes.length - 1];
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="tarjeta-pokemon" onClick={onClick}>
        <img src={imagen} alt={nombre} />
        <p className="tarjeta-pokemon__numero">#{id}</p>
        <p className="tarjeta-pokemon__nombre">{nombre}</p>
      </div>
    );
  }
  
  export default TarjetaPokemon;

