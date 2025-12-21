import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: 'MarmorSlab | Professional Web Engineering',
    template: '%s | MarmorSlab'
  },
  description: 'Engineering high-performance digital foundations. Designed in the lab, built to be the slab by Agustin Marmor.',
  keywords: ['Web Development', 'Computer Engineering', 'Next.js', 'Custom Websites', 'MarmorSlab'],
  authors: [{ name: 'Agustin Marmor' }],
  creator: 'Agustin Marmor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marmorslab.dev', 
    siteName: 'MarmorSlab',
    title: 'MarmorSlab | Professional Web Engineering',
    description: 'Modern web solutions engineered for performance and reliability.',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'MarmorSlab Branding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarmorSlab | Web Engineering',
    description: 'Engineering high-performance digital foundations.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}