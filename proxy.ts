import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    localeDetection: false,
});

export const config = {
    matcher: ['/', '/(en|es)/:path*']
};
