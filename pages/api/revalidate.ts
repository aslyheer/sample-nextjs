// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    res.revalidate('/path-to-revalidate').then();
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
