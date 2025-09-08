import { siteConfig } from '@/config/site'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = siteConfig.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F1E3DA 0%, #EAD5C8 50%, #CE9C7E 100%)',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 120, marginRight: 20 }}>🧘🏽‍♀️</div>
          <div style={{ fontSize: 120 }}>🪷</div>
        </div>
        
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: '#333333',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          {siteConfig.name}
        </div>
        
        <div
          style={{
            fontSize: 32,
            color: '#333333',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Creating a safe space for yoga, healing, and growth in Huntsville, Alabama
        </div>
        
        <div
          style={{
            fontSize: 24,
            color: '#CE9C7E',
            textAlign: 'center',
            marginTop: 30,
            fontWeight: 500,
          }}
        >
          Private Sessions • Group Classes • Sound Healing • Holistic Ceremonies
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}