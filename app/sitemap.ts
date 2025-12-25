import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.marmorslab.dev';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,

            alternates: {
                languages: {
                    en: baseUrl,
                    es: `${baseUrl}/es`,
                },
            },
        },
        {
            url: `${baseUrl}/es`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}`,
                    es: `${baseUrl}/es`,
                },
            },
        },
    ];
}