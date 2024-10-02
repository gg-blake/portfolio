import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url); // Use URL API to parse the query parameters
  const table = "Programs";
  const program = searchParams.get("program");
  const range = searchParams.get('range') || "A2:F";
  const sheetsId = process.env.NEXT_PUBLIC_SHARED_SHEETS_ID; // Retrieve the folder ID from the query parameter
  const apiKey = process.env.NEXT_PUBLIC_GCP_API_KEY; // Use your environment variable for the Google API key

  if (!sheetsId) {
    return NextResponse.json({ error: 'Folder ID is required' }, { status: 400 });
  }
  
  try {
    // Google Drive API endpoint to list files within a folder
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/${table}!${range}?key=${apiKey}`;
    const response = await fetch(endpoint, {next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}});

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch files from Google Drive API' }, { status: response.status });
    }

    let data = await response.json();

    let fields = await fetch("https://www.moody.mx/api/files/json/programs/fields", {next: {revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL}})
    .then(fields => fields.json())
    .then(json => json.values[0])
    
    let responseJson = [];
    data.values.map(course => {
      let newObj = {};
      course.map((item, index) => {
        newObj[fields[index]] = item;
      });
      responseJson.push(newObj);
    })

    if (program) {
      responseJson = responseJson.filter(value => value["Program Name"] == program);
    }

    // Return the list of files in JSON format
    return NextResponse.json(responseJson, { status: 200, });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}