import { NextResponse } from 'next/server';

export async function GET() {
  const folderId = "1igOkeuaQdgaqxo1hf_krAmh796Fx5JGD"; // Retrieve the folder ID from the query parameter
  const key = 'AIzaSyBxeyGkT1vdRkw0KFD6Gr80F7qp56H-f2c'; // Use your environment variable for the Google API key

  if (!folderId) {
    return NextResponse.json({ error: 'Folder ID is required' }, { status: 400 });
  }

  try {
    // Google Drive API endpoint to list files within a folder
    const endpoint = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${key}&fields=files(id,name,mimeType)`;


    const response = await fetch(endpoint, { next: {revalidate: 3600}});

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch files from Google Drive API' }, { status: response.status });
    }

    const data = await response.json();

    // Return the list of files in JSON format
    return NextResponse.json(data.files, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
