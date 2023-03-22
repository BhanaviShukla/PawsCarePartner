// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { swrGlobalFetcher } from '@hooks/use-api-wrapper';

type Data = {
  name: string;
  gender: string;
  email: string;
  status: string;
  id: string;
}[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const users: Data = await swrGlobalFetcher({ url: 'https://gorest.co.in/public/v2/users' });

  res.status(200).json(users);
}
