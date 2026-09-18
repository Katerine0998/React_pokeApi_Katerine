interface TarjetaPokemonProps {
    nombre: string;
    url: string;
}

function TarjetaPokemon({nombre , url }: TarjetaPokemonProps){
    const partes = url.split("/").filter(Boolean);
    const id = partes[partes.length - 1];
    const imagen =  'httpss:///raw.gi.hubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';

    return (
        <div className="tarjeta-pokemon">
            <img src={imagen} alt={nombre} />
            <p className="tarjeta-pokemon__numero">#{id}</p>
            <p className="tarjeta-pokemon__nombre">#{nombre}</p>
        </div>

    );


}
export default TarjetaPokemon;

