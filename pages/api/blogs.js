import prisma from '../../utils/prisma';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const blogs = await prisma.blogs.findMany();
			res.status(200).json(blogs);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error fetching blogs' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
