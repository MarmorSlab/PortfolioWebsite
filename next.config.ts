import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/projects/:slug*",
                destination: "/en/projects/:slug*",
                permanent: true
            }
        ];
    }

};


export default withNextIntl(nextConfig);

