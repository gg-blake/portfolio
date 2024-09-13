import { NextResponse } from "next/server";

export async function GET() {
  // The Google Docs document ID
  const fileId = '1p9YtlJf_vUXefmEoq6APramUdD6JW8Lf4TzY6TKf4QM';
  // The URL to export the document as PDF https://drive.google.com/file/d/1p9YtlJf_vUXefmEoq6APramUdD6JW8Lf4TzY6TKf4QM/view?usp=sharing
  const key = 'AIzaSyBxeyGkT1vdRkw0KFD6Gr80F7qp56H-f2c';
  // https://www.googleapis.com/drive/v3/files/1p9YtlJf_vUXefmEoq6APramUdD6JW8Lf4TzY6TKf4QM/export?mimeType=application/pdf&key=AIzaSyBxeyGkT1vdRkw0KFD6Gr80F7qp56H-f2c
  // https://docs.google.com/document/d/1p9YtlJf_vUXefmEoq6APramUdD6JW8Lf4TzY6TKf4QM/edit?usp=sharing
  const exportUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=application/pdf&key=${key}`;

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