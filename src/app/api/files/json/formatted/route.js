import { NextResponse } from 'next/server';

export async function GET() {
  const sheetsId = process.env.NEXT_PUBLIC_SHARED_SHEETS_ID; // Retrieve the folder ID from the query parameter
  const key = process.env.NEXT_PUBLIC_GCP_API_KEY; // Use your environment variable for the Google API key

  if (!sheetsId) {
    return NextResponse.json({ error: 'Folder ID is required' }, { status: 400 });
  }
  
  try {
    // Google Drive API endpoint to list files within a folder
    const endpoint = `https://www.moody.mx/api/files/json/programs`;
    const courses = {};
    const response = await fetch(endpoint, {next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}})
    .then(data => data.json())
    /*.then(programs => Promise.all(programs?.map(program => new Promise((resolve, reject) => {
        {
            const endpoint2 = `https://www.moody.mx/api/files/json/courses?program=${program["Program Name"]}`;
            fetch(endpoint2, {next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}})
            .then(data => data.json())
            .then(j => {
                courses[program["Program Name"]] = j;
                resolve();
            })
        }
    }))))*/
    
    if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch files from Google Drive API' }, { status: response.status });
    }

    // Return the list of files in JSON format
    return NextResponse.json(courses, { status: 200, });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}