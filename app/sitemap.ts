import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.marmorslab.dev';
    const projectSlugs = ['restaurant', 'business', 'smallBusiness'];
    const projectUrls = projectSlugs.flatMap(slug => [
        {
            url: `${baseUrl}/projects/${slug}`,
            lastModified: new Date(),
            alternates: { languages: { en: `${baseUrl}/projects/${slug}`, es: `${baseUrl}/es/projects/${slug}` } }
        },
        {
            url: `${baseUrl}/es/projects/${slug}`,
            lastModified: new Date(),
            alternates: { languages: { en: `${baseUrl}/projects/${slug}`, es: `${baseUrl}/es/projects/${slug}` } }
        }
    ]);
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
        ...projectUrls
    ];
}