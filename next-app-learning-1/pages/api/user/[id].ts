import type { NextApiRequest, NextApiResponse } from 'next'

export type User = {
  name: string
  id: number
  email: string
}



export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req

  const UserDB: User[] = [{
    name: "Marlon",
    id: 0,
    email: "marlon.quadros@gmail.com"
  }]

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(UserDB[Number(id)])
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
