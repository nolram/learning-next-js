import type { InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import useSwr, { SWRConfig } from 'swr'
import PokemonApi  from '../../services/pokemon'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const API = '/api/pokemon'

function Pokemon() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `${API}/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.name} - <img src={data.sprites.front_default}></img></div> 
}

export default function PokemonPage() {
  return (
    <SWRConfig>
      <Pokemon />
    </SWRConfig>
  );
}