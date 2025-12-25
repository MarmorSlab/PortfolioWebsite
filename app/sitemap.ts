import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.marmorslab.dev';

    return [
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/es`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}