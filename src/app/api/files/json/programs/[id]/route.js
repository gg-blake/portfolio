import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    const table = "Programs";
    const range = "A2:F";
    const sheetsId = process.env.NEXT_PUBLIC_SHARED_SHEETS_ID; // Retrieve the folder ID from the query parameter

    if (!sheetsId) {
        return NextResponse.json({ error: 'Folder ID is required' }, { status: 400 });
    }
    
    try {
        // Google Drive API endpoint to list files within a folder
        const endpoint = `https://www.moody.mx/api/files/json/programs?program=${id}`;
        const response = await fetch(endpoint, {next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}});

        if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch files from Google Drive API' }, { status: response.status });
        }
        
        let data = await response.json();

        // Return the list of files in JSON format
        return NextResponse.json(data, { status: 200, });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}