import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from "@/components/locale-provider"
import { ScrollReveal } from '@/components/scroll-reveal'
import { FloatingContactButtons } from "@/components/floating-contact-buttons"
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'CHANGFA Steel - Chuyên Gia Vật Liệu Kim Loại Công Nghiệp',
  description: 'CHANGFA Steel - Nhà cung cấp vật liệu kim loại công nghiệp chất lượng cao phục vụ cho sản xuất trong nước và xuất khẩu.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <LocaleProvider>
          <ScrollReveal />
          {children}
          <FloatingContactButtons />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  )
}
