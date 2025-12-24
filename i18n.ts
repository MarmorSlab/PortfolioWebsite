import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
    const resolvedLocale = locales.includes((locale ?? '') as Locale) ? locale : locales[0];
    if (!resolvedLocale) notFound();

    return {
        locale: resolvedLocale,
        messages: (await import(`./messages/${resolvedLocale}.json`)).default
    };
});
