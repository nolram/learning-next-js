import type { InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import useSwr, { SWRConfig } from 'swr'
import Image from 'next/image'
import Head from 'next/head'

import PokemonApi  from '../../services/pokemon'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const API = '/api/pokemon'

const Pokemon = () => {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `${API}/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.name} - <Image src={data.sprites.front_default}  width='96px' height='96px' alt="Foto do Pokémon"></Image></div> 
}

export default function PokemonPage() {
  return (
    <SWRConfig>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Pokemons List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pokemon />
    </SWRConfig>
  );
}