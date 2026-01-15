import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Analytics } from "@vercel/analytics/next";

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
  const pathname = `/${locale}`;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${t('founderName')}`
    },
    description: t('description'),
    keywords: t('keywords').split(','),
    authors: [{ name: t('founderName') }],
    creator: t('founderName'),
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        'x-default': `${baseUrl}/en`,
      },
    },

    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },


    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'es' ? 'es_US' : 'en_US',
      url: `${baseUrl}${pathname}`,
      siteName: 'MarmorSlab',
      type: 'website',

    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
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
          <main className="flex-grow">
            {children}
          </main>
          <SpeedInsights />
          <Analytics/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}