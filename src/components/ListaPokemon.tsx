import type { PokemonListItem } from "../types/api";
import TarjetaPokemon from "./TarjetaPokemon";

interface ListaPokemonProps {
  pokemones: PokemonListItem[];
}

function ListaPokemon({ pokemones }: ListaPokemonProps) {
  return (
    <div className="lista-pokemon">
      {pokemones.map((pokemon) => (
        <TarjetaPokemon key={pokemon.name} nombre={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default ListaPokemon;