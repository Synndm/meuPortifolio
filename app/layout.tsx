import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfólio | Desenvolvedor Front-End',
  description: 'Desenvolvedor Front-End focado em transformar ideias em interfaces modernas e funcionais.',
  generator: 'Synndm',
  // icons: {   
  //   icon: [
  //     {
  //       url: '',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
