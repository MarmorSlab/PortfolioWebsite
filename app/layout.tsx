import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" }, // zinc-950
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marmorslab.dev"),
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
    url: 'https://www.marmorslab.dev',
    siteName: 'MarmorSlab',
    title: 'MarmorSlab | Professional Web Engineering',
    description: 'Modern web solutions engineered for performance and reliability.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarmorSlab | Web Engineering',
    description: 'Engineering high-performance digital foundations.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>

      <body className="antialiased bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}