import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';


interface Message {
  // Define the shape of the "message" object here based on your database schema
  // For example:
  id: number;
  email: string;
  createdAt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body: Message = req.body;
    try {
      const { data, error } = await supabase.from('waitlist').insert(body);
      if (!error) {
        res.status(200).json(data);
      } else {
        res.status(500).json(error);
      }
    } catch (error) {
      console.error(error); // Log the error to the console for debugging purposes
      res.status(500).json({ error: 'Server error' });
    }
  }
}
