import './globals.css'
import Script from 'next/script'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'Prestige Golden Grove | 2, 3 & 4 BHK Luxury Apartments — ORR Exit 2, Kollur, Hyderabad',
  description: 'Prestige Golden Grove — Premium 2, 3 & 4 BHK luxury apartments at ORR Exit 2, Kollur, Hyderabad. Township in 28.5 Acres with 50+ amenities. Starting ₹99 Lakhs*. Possession Dec 2029.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}</Script>
        <GoogleTagManager gtmId="GTM-575H8R87" />
        {children}
      </body>
    </html>
  )
}
