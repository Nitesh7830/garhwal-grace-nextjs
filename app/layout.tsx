import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Garhwal Grace Makeover Lounge',
  description: 'Where tradition, art & modern beauty blend perfectly. Bridal & party makeup • Hair & nail extensions • HydraFacial & premium facials.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Garhwal Grace Makeover Lounge',
    description: 'Where tradition, art & modern beauty blend perfectly.',
    url: 'https://example.com',
    siteName: 'Garhwal Grace',
    locale: 'en_IN',
    type: 'website'
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white text-zinc-800 [font-family:var(--font-sans)]" style={{fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif'}}>
        {children}
      </body>
    </html>
  )
}