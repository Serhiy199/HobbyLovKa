import type { NextApiRequest, NextApiResponse } from 'next';
// import '../../../lib/mongoDB/mongodb';
import User from '../../../../lib/mongoDB/models/handBags';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await User.find();
        return Response.json(data);
        // res.status(200).json({ data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}

// export function POST() {
//     return Response.json('POST handBags');
// }
