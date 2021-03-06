import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())


const User: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.name}</div>
}


export default User