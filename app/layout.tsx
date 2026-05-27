import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

export const metadata: Metadata = {
  title: "Gabriel Oliveira - Software Developer",
  description:
    "Portfolio of Gabriel Oliveira, a young Software Engineering student focused on backend with Java & Spring Boot, modern frontend with Next.js, and building real-world scalable products.",
  keywords: [
    "Gabriel Oliveira",
    "Software Developer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "Backend Engineer",
    "Brazilian Developer",
  ],
  authors: [{ name: "Gabriel Oliveira" }],
  creator: "Gabriel Oliveira",
  openGraph: {
    type: "website",
    title: "Gabriel Oliveira — Software Developer",
    description:
      "Transformando ideias em soluções reais através de engenharia de software e da tecnologia.",
    siteName: "Gabriel Oliveira",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Oliveira — Backend Developer",
    description: "Backend first. Product driven. Building real-world scalable products.",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
