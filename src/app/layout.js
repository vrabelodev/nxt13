import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Colorista - The easiest color palette generator on internet',  
  description: 'Generate beautiful colors combinations for your designs.',
  keywords: ['color scheme', 'scheme color', 'color schemes', 'color theme', 'color palette',
             'color themes', 'color palettes', 'color combinations', 'color', 'colors', 'palettes',
             'hex color wheel', 'pastel color palette', 'color wheel', 'color combination', 'color pallete',
             'color names', 'web color schemes', 'color wheel generator', 'random color palette generator',
             'color schemes generator', 'ui color palette generator', 'pretty colors', 'vintage color'],
  }           


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gtmId="G-6DL9LFWCKE" />
      <GoogleTagManager gtmId="G-6DL9LFWCKE" />
    </html>
  )
}
