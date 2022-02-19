// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Pokemon, ResponsePokemons } from '../../types/pokemon'

import PokemonApi  from '../../services/pokemon'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponsePokemons>
) {
  try{
    // Se usar o getServerSideProps na página esse componente será chamado
    const response = await PokemonApi.getPokemons()
    const pokemons = response.results.map((pokemon: Pokemon) => {
      const idUrl = Number(pokemon.url.split('/').slice(-2, -1)[0])
      return {
        id: idUrl,
        ...pokemon
      }
    })
    const { results, ...newResponse } = response
    res.status(200).json({ results: pokemons, ...newResponse })
  }catch(error: any){
    console.log(error);
    res.status(500).json(error.data)
  }
}
