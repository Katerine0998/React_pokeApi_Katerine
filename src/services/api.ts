import type { PokemonListResponse, PokemonDetail } from "../types/api";

export async function obtenerListaPokemon() : Promise<PokemonListResponse> {
    const response = await  fetch ("https://pokeapi.co/api/v2/pokemon?limit=20");

    if(!response.ok) {
        throw new Error("No se puede obtener la lista de pokemon");
    }

    const data: PokemonListResponse = await response.json();
    return data;

}
export async function obtenerDetallePokemon(url: string): Promise<PokemonDetail> {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("No se pudo obtener el detalle del Pokémon");
    }
  
    const data: PokemonDetail = await response.json();
    return data;
  }
    
