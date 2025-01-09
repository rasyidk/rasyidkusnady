import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Rasyid Kusnady',
  description: 'Rasyid Kusnady Portofolios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  )
}
