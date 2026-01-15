import { getTranslations } from "next-intl/server";
import { Link } from '@/navigation';
import {
    Utensils,
    Calendar,
    MapPin,
    Clock,
    ChevronLeft,
    Instagram,
    Facebook
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function RestaurantShowcase({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "projects.Showcase.restaurant" });
    const common = await getTranslations({ locale, namespace: "projects.Showcase.common" });
    console.log('Rendering Restaurant Showcase page with locale:', locale);
    return (
        <div className="min-h-screen bg-stone-950 text-stone-200 selection:bg-orange-500/30 font-serif">
            {/* Engineered Floating Utility Bar */}
            <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 flex items-center justify-between pointer-events-none">
                <a
                    href={`/${locale}#projects`}
                    className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-orange-500 transition-all shadow-xl cursor-pointer">
                    <ChevronLeft size={12} className="md:w-3.5 md:h-3.5" /> {common('back')}
                </a>

                <div className="pointer-events-auto">
                    <LanguageSwitcher />
                </div>
            </nav>

            <header className="relative h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-4xl">
                    <div className="flex justify-center mb-4">
                        <Utensils className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-9xl font-light tracking-tighter italic text-stone-100">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base font-sans font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-orange-500">
                        {t('hero.subtitle')}
                    </p>
                    <div className="pt-6 md:pt-8">
                        <button className="px-8 py-3 md:px-10 md:py-4 bg-orange-700 hover:bg-orange-800 text-white font-sans font-bold uppercase tracking-wide md:tracking-widest text-sm md:text-base transition-all rounded-lg md:rounded-none">
                            {t('nav.reserve')}
                        </button>
                    </div>
                </div>
            </header>


            <section className="py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light italic">{t('nav.menu')}</h2>
                    <div className="w-24 h-px bg-orange-500 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 font-sans">
                    {[0, 1, 2, 3].map((idx) => (
                        <div key={idx} className="flex justify-between items-end border-b border-stone-800 pb-4 group cursor-default">
                            <div className="space-y-1 flex-1 pr-4">
                                <h3 className="font-bold text-base md:text-lg group-hover:text-orange-500 transition-colors uppercase tracking-wide">
                                    {t(`menu.items.${idx}.title`)}
                                </h3>
                                <p className="text-xs md:text-sm text-stone-500 italic">{t(`menu.items.${idx}.desc`)}</p>
                            </div>
                            <span className="font-bold text-orange-500 text-sm md:text-base whitespace-nowrap">{t(`menu.items.${idx}.price`)}</span>
                        </div>
                    ))}
                </div>
            </section>


            <section className="bg-stone-900/50 py-20 md:py-32 px-4 md:px-6 border-y border-stone-900">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 text-center font-sans">
                    <div className="space-y-4">
                        <MapPin className="w-6 h-6 text-orange-500 mx-auto" />
                        <h4 className="font-bold uppercase tracking-widest text-xs">{t('nav.about')}</h4>
                        <p className="text-sm text-stone-400 leading-relaxed">{t('location.address').split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < t('location.address').split('\n').length - 1 && <br />}
                            </span>
                        ))}</p>
                    </div>
                    <div className="space-y-4">
                        <Clock className="w-6 h-6 text-orange-500 mx-auto" />
                        <h4 className="font-bold uppercase tracking-widest text-xs">{t('hours.title')}</h4>
                        <p className="text-sm text-stone-400 leading-relaxed">{t('hours.weekdays')}<br />{t('hours.sunday')}</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-center gap-4">
                            <Instagram className="w-5 h-5 text-stone-500 hover:text-orange-500 cursor-pointer" />
                            <Facebook className="w-5 h-5 text-stone-500 hover:text-orange-500 cursor-pointer" />
                        </div>
                        <h4 className="font-bold uppercase tracking-widest text-xs">{t('social.title')}</h4>
                        <p className="text-sm text-stone-400 leading-relaxed">{t('social.description').split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < t('social.description').split('\n').length - 1 && <br />}
                            </span>
                        ))}</p>
                    </div>
                </div>
            </section>


            <footer className="py-20 text-center font-sans">
                <div className="mb-8 opacity-20 hover:opacity-100 transition-opacity">
                    <a
                        href={`/${locale}`}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-100 cursor-pointer"
                    >
                        {t('footer.brand')}
                    </a>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-stone-600" dangerouslySetInnerHTML={{ __html: t('footer.closing') }} />
            </footer>
        </div>
    );
}