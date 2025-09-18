import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Software Developer',
  description: 'Full-stack developer specializing in JavaScript, TypeScript, Node.js, and PostgreSQL',
  keywords: 'software developer, JavaScript, TypeScript, Node.js, React, Next.js, PostgreSQL',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Software Developer',
    description: 'Full-stack developer specializing in JavaScript, TypeScript, Node.js, and PostgreSQL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
