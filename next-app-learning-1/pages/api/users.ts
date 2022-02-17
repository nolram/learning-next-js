// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type UserId = {
  id: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserId[]>
) {
  res.status(200).json([{ id: 0 }])
}
