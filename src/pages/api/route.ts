import type { NextRequest } from 'next/server';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler(req: NextRequest) {
  return new Response(null, {
    status: 307, // Use 308 for a permanent redirect, 307 for a temporary redirect
    headers: {
      Location: 'https://aprendiendodefi.framer.ai/',
      'Cache-Control': 'public, max-age=1200, must-revalidate',
    },
  });
}