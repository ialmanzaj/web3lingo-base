import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  return new Response(null, {
    status: 307,
    headers: {
      Location: 'https://aprendiendodefi.framer.ai/',
      'Cache-Control': 'public, max-age=1200, must-revalidate',
    },
  });
}