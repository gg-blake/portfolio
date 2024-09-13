import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params; // Extract the dynamic 'id' from the URL
  const apiKey = 'AIzaSyBxeyGkT1vdRkw0KFD6Gr80F7qp56H-f2c'; // Use your Google API key from environment variables

  if (!id) {
    return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
  }

  try {
    // URL to fetch the image file content from Google Drive
    const endpoint = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${apiKey}`;

    // Fetch the image data from Google Drive
    const response = await fetch(endpoint);

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch the image from Google Drive' }, { status: response.status });
    }

    // Get the image data as a buffer
    const imageBuffer = await response.arrayBuffer();

    // Determine the content type (You could check response headers for content-type)
    const contentType = response.headers.get('Content-Type') || 'image/jpeg'; // Default to JPEG

    // Return the image buffer with the correct content type
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="image.${contentType.split('/')[1]}"`, // Serve the image inline with correct extension
      },
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
