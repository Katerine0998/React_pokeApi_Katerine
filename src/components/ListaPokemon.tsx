import type { PokemonListItem } from "../types/api";
import TarjetaPokemon from "./TarjetaPokemon";

interface ListaPokemonProps {
  pokemones: PokemonListItem[];
  onSeleccionar: (url: string) => void;
}

function ListaPokemon({ pokemones, onSeleccionar }: ListaPokemonProps) {
  return (
    <div className="lista-pokemon">
      {pokemones.map((pokemon) => (
        <TarjetaPokemon
          key={pokemon.name}
          nombre={pokemon.name}
          url={pokemon.url}
          onClick={() => onSeleccionar(pokemon.url)}
        />
      ))}
    </div>
  );
}

export default ListaPokemon;