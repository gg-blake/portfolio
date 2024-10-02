import { NextResponse } from "next/server";

export async function GET() {
  // The Google Docs document ID
  const fileId = process.env.NEXT_PUBLIC_SHARED_RESUME_ID;
  const apiKey = process.env.NEXT_PUBLIC_GCP_API_KEY;
  const exportUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=application/pdf&key=${apiKey}`;

  try {
    // Fetch the PDF from Google Docs
    const response = await fetch(exportUrl, { cache: 'no-store' });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF. Status: ${response.status}`);
    }

    // Stream the PDF content
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': 'application/pdf',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    // Handle errors
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}  