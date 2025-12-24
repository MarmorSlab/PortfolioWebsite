import { useTranslations } from 'next-intl';

export const metadata = { title: 'Terms of Service | Agustin Marmor' }

export default function TOS() {
    const t = useTranslations('tos');

    return (
        <main className="max-w-4xl mx-auto py-24 px-6 text-zinc-300">
            <h1 className="text-4xl font-bold text-white mb-8">{t('title')}</h1>
            <p className="mb-8 text-zinc-500 italic">{t('lastUpdated')}</p>

            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section1.title')}</h2>
                    <p className="leading-relaxed">{t.rich('section1.content', {
                        strong: (chunks) => <strong className="font-bold text-white">{chunks}</strong>
                    })}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section2.title')}</h2>
                    <p>{t('section2.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section3.title')}</h2>
                    <p>{t('section3.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section4.title')}</h2>
                    <p>{t('section4.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section5.title')}</h2>
                    <p>{t('section5.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section6.title')}</h2>
                    <p>{t('section6.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section7.title')}</h2>
                    <p>{t('section7.content')}</p>
                </div>
            </section>
        </main>
    );
}
