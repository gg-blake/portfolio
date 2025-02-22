import getPrograms from '@/lib/programs';
import { NextResponse } from 'next/server';

export async function GET() {
    const programs = await getPrograms();
    return NextResponse.json(programs, { status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins
          'Access-Control-Allow-Methods': 'GET', // Allow GET method
        },
    });
}