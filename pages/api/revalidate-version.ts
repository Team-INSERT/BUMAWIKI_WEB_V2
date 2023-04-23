import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(400).json({ error: 'Invalid HTTP method. Only POST method is allowed.' })
	}
	try {
		await res.revalidate(`/version/${req.body.title}`)

		return res.json({ revalidated: true })
	} catch (err) {
		return res.status(500).send('Error revalidating')
	}
}
