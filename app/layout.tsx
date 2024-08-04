import type {Metadata} from 'next'
import {JetBrains_Mono} from 'next/font/google'
import './globals.css'
import {Header} from '@/components/Header'
import {AppThemeProvider} from './theme-provider'
import {Toaster} from '@/components/ui/toaster'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adityabalsane.com/'),
  keywords: [
    'Aditya Balsane',
    'Aditya',
    'Balsane',
    'Software Developer',
    'Mobile Developer',
    'Portfolio',
    'LawSage'
  ],
  title: {
    default: 'Aditya Balsane',
    template: '%s | Aditya Balsane'
  },
  openGraph: {
    description:
      "Hello there, I'm a software developer with a passion for innovation, dedicated to crafting seamless solutions, and always focused on delivering high-quality user-centric applications."
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={jetbrainsMono.variable}>
        <AppThemeProvider>
          <Header />
          {children}
          <Toaster />
        </AppThemeProvider>
      </body>
    </html>
  )
}
