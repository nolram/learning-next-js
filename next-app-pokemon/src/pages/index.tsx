import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import useSWR, { SWRConfig } from 'swr'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Pokemon } from '../types/pokemon'
import PokemonApi  from '../services/pokemon'
import { Table } from '../components/table'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const API = '/api/pokemons'

function Home() {
  
  const {data: pokemons, error} = useSWR(API, fetcher)

  if (error) return <div>Failed to load users</div>
  if (!pokemons) return <div>Loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="Pokemons List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
          {pokemons.results.map((pokemon: Pokemon) => {
            return(
              <tr key={pokemon.name}>
                <td>{pokemon.name}</td>
                <td>
                <Link href="/pokemon/[id]" as={`/pokemon/${pokemon.id}`}>
                  Informações
                </Link>
                </td>
            </tr>)
          })}
          </tbody>
         </Table>
      </main>

      <footer className={styles.footer}>
        @Marlon - 2022
      </footer>
    </div>
  )
}

export default function App({ fallback } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
}

export async function getServerSideProps() {
  const pokemons = await PokemonApi.getPokemons();
  return {
    props: {
      fallback: {
        [API]: pokemons
      }
    }
  };
}
