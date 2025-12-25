import type { Metadata, Viewport } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.marmorslab.dev";

  
  const pathname = locale === 'en' ? '' : `/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'MarmorSlab | High-Performance Websites by Agustin Marmor',
      template: '%s | Agustin Marmor'
    },
    description: 'High-performance, modern websites engineered for speed, SEO, and reliability. Custom web development by Agustin Marmor.',
    keywords: ['Web Development', 'Computer Engineering', 'Next.js', 'Custom Websites', 'MarmorSlab'],
    authors: [{ name: 'Agustin Marmor' }],
    creator: 'Agustin Marmor',
    icons: {
      icon: '/icon.svg', 
      apple: '/icon.svg',
    },
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        'en-US': baseUrl,
        'es-US': `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      url: `${baseUrl}${pathname}`,
      siteName: 'MarmorSlab',
      title: 'MarmorSlab | High-Performance Websites by Agustin Marmor',
      description: 'High-performance, modern websites engineered for speed, SEO, and reliability. Custom web development by Agustin Marmor.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MarmorSlab | High-Performance Websites by Agustin Marmor',
      description: 'High-performance, modern websites engineered for speed, SEO, and reliability. Custom web development by Agustin Marmor.',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MarmorSlab",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kissimmee",
      "addressRegion": "FL"
    },
    "image": "https://www.marmorslab.dev/icon.svg",
    "logo": "https://www.marmorslab.dev/icon.svg",
    "url": "https://www.marmorslab.dev",
    "founder": "Agustin Marmor"
  };

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}