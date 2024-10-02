import { NextResponse } from 'next/server';

export async function GET() {
  const table = "Programs";
  const range = "1:1";
  const sheetsId = process.env.NEXT_PUBLIC_SHARED_SHEETS_ID; // Retrieve the folder ID from the query parameter
  const apiKey = process.env.NEXT_PUBLIC_GCP_API_KEY; // Use your environment variable for the Google API key
  
  try {
    // Google Drive API endpoint to list files within a folder
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/${table}!${range}?key=${apiKey}`;
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