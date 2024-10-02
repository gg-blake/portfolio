import { NextResponse } from 'next/server';

export async function GET() {
  const folderId = process.env.NEXT_PUBLIC_SHARED_FOLDER_ID; // Retrieve the folder ID from the query parameter
  const apiKey = process.env.NEXT_PUBLIC_GCP_API_KEY; // Use your environment variable for the Google API key

  if (!folderId) {
    return NextResponse.json({ error: 'Folder ID is required' }, { status: 400 });
  }

  try {
    // Google Drive API endpoint to list files within a folder
    const endpoint = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;
    const response = await fetch(endpoint, { next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}});
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch files from Google Drive API' }, { status: response.status });
    }
    
    const data = await response.json();

    // Return the list of files in JSON format
    return NextResponse.json(data.files, { status: 200, 
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Methods': 'GET', // Allow GET method
      },
     });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
