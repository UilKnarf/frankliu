import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'frank liu [ dot ] dev'

  // Fetch the profile image.
  // In development, it fetches from localhost. In production, you'll need a different URL.
  // IMPORTANT: For a live site, make sure `http://localhost:3000/profile.jpeg` is updated to a public URL for your profile image!
  const response = await fetch('http://localhost:3000/profile.jpeg') // Keep localhost for development, update for production deployment.
  const buffer = await response.arrayBuffer()

  const base64 = Buffer.from(buffer).toString('base64')
  const imageSrc = `data:image/jpeg;base64,${base64}`

  const font =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/fonts/jetbrains-mono/JetBrainsMono-Regular.ttf'
      : 'https://frankliu.dev/fonts/jetbrains-mono/JetBrainsMono-Regular.ttf' // Changed from seanoliver.dev

  // Determine the background image URL based on the environment.
  // IMPORTANT: Ensure this path is correct on your frankliu.dev domain.
  const bgImage =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/patterns/shattered-island.gif'
      : 'https://frankliu.dev/patterns/shattered-island.gif' // Changed from seanoliver.dev

  // Fetch the font data, as it's needed to render text in the image.
  const fontData = await fetch(font).then((res) => res.arrayBuffer())

  // Return a new ImageResponse, which generates an image from JSX/HTML.
  return new ImageResponse(
    (
      // This is the content of the image, styled using inline CSS.
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#f5f6f7',
          color: '#1A202C',
          width: '100%',
          height: '100%',
          paddingLeft: '50px',
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat',
        }}
      >
        {/* The main title of the Open Graph image */}
        <h1
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#F5F6F7',
          }}
        >
          {title} {/* This will be 'frank liu [ dot ] dev' or whatever is in the URL */}
        </h1>
        {/* Container for the profile image and domain text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
            color: '#F5F6F7',
          }}
        >
          {/* The profile image */}
          <img
            src={imageSrc}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%', // Makes the image round
              marginRight: '20px',
            }}
          />
          {/* The domain name text */}
          <span
            style={{
              fontSize: '1.2em',
              fontWeight: '400',
            }}
          >
            frankliu.dev
          </span>
        </div>
      </div>
    ),
    {
      // Image dimensions
      width: 1200,
      height: 630,
      // Fonts to be used in the image
      fonts: [
        {
          name: 'JetBrains Mono',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
