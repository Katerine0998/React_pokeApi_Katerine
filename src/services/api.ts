import type { PokemonListResponse } from "../types/api";

export async function obtenerListaPokemon() : Promise<PokemonListResponse> {
    const response = await  fetch ("https://pokeapi.co/api/v2/pokemon?limit=20");

    if(!response.ok) {
        throw new Error("No se puede obtener la lista de pokemon");
    }

    const data: PokemonListResponse = await response.json();
    return data;

}
    
