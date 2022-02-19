

export type ResponsePokemons = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[]
}

export type Pokemon = {
    name: string,
    url: string,
    id?: number,
}

export type PokemonStats = {
    base_experience: number,
    name: string,
    id: number,
    is_default: boolean,
    height: number,
    weight: number,
    sprites: {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null,

    }
}