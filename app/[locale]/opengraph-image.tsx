import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'

export const alt = 'MarmorSlab | Professional Web Engineering'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'


export default async function Image({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#09090b',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '20px solid #18181b',
                }}
            >
                
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                    <path d="M50 5L10 28V72L50 95L90 72V28L50 5Z" fill="#2563eb" />
                    <path
                        d="M30 40V75M50 30V90M70 40V75M30 40L50 55L70 40"
                        stroke="white"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <h1 style={{
                    fontSize: 88,
                    color: 'white',
                    fontWeight: 'bold',
                    marginTop: 40,
                    display: 'flex'
                }}>
                    Marmor<span style={{ color: '#2563eb' }}>Slab</span>
                </h1>

                <p style={{
                    fontSize: 32,
                    color: '#a1a1aa',
                    marginTop: -10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    {t('imageSubtitle')}
                </p>

                
                <p style={{ fontSize: 20, color: '#3f3f46', marginTop: 20 }}>
                    by {t('founderName')}
                </p>
            </div>
        ),
        { ...size }
    )
}