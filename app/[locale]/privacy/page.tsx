import { getTranslations } from 'next-intl/server';
import { ChevronLeft } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata = { title: 'Privacy Policy | Agustin Marmor' }

export default async function PrivacyPolicy({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'privacy' });

    return (
        <main className="max-w-4xl mx-auto py-24 px-6 text-zinc-300">
            <div className="flex items-center justify-between mb-8">
                <a
                    href={`/${locale}`}
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-500 active:text-blue-500 transition-colors cursor-pointer"
                >
                    <ChevronLeft size={16} /> {t('back')}
                </a>
                <LanguageSwitcher />
            </div>
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

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section8.title')}</h2>
                    <p>{t('section8.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section9.title')}</h2>
                    <p>{t('section9.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section10.title')}</h2>
                    <p>{t('section10.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section11.title')}</h2>
                    <p>{t('section11.content')}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">{t('section12.title')}</h2>
                    <p>{t('section12.content')}</p>
                </div>
            </section>
            <footer className="mt-12 text-xs text-zinc-600">
                MarmorSlab is operated by Agustin Marmor
            </footer>
        </main>
    );
}