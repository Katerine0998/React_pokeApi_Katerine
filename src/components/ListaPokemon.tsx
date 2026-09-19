import type { PokemonListItem } from "../types/api";
import TarjetaPokemon from "./TarjetaPokemon";

interface ListaPokemonProps {
  pokemones: PokemonListItem[];
  onSeleccionar: (url: string) => void;
  esFavorito: (nombre: string) => boolean;
  onToggleFavorito: (nombre: string) => void;
}

function ListaPokemon({
  pokemones,
  onSeleccionar,
  esFavorito,
  onToggleFavorito,
}: ListaPokemonProps) {
  return (
    <div className="lista-pokemon">
      {pokemones.map((pokemon) => (
        <TarjetaPokemon
          key={pokemon.name}
          nombre={pokemon.name}
          url={pokemon.url}
          onClick={() => onSeleccionar(pokemon.url)}
          esFavorito={esFavorito(pokemon.name)}
          onToggleFavorito={() => onToggleFavorito(pokemon.name)}
        />
      ))}
    </div>
  );
}

export default ListaPokemon;