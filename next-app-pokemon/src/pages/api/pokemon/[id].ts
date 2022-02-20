import type { NextApiRequest, NextApiResponse } from 'next'

import PokemonApi  from '../../../services/pokemon'


export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id }
  } = req

  try{
    const response = await PokemonApi.getPokemon(id as string)
    res.status(200).json(response)
  }catch(error: any){
    console.log(error);
    res.status(500).json(error)
  }
}
