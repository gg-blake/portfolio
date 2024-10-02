import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    const table = "Courses";
    const range = "A2:G";

    if (!sheetsId) {
        return NextResponse.json({ error: 'Folder ID is required' }, { status: 400 });
    }
    
    try {
        // Google Drive API endpoint to list files within a folder
        const endpoint = `https://www.moody.mx/api/files/json/courses`;
        const response = await fetch(endpoint, {next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}});

        if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch files from Google Drive API' }, { status: response.status });
        }

        let data = await response.json();
        data = data.filter(value => value["Course ID"] == id);
        data = data[0];



        // Return the list of files in JSON format
        return NextResponse.json(data, { status: 200, });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}