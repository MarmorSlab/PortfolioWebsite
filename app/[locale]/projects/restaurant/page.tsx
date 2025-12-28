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

    return (
        <div className="min-h-screen bg-stone-950 text-stone-200 selection:bg-orange-500/30 font-serif">
            {/* Engineered Floating Utility Bar */}
            <nav className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
                <Link
                    href="/#projects"
                    className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-orange-500 transition-all shadow-xl"
                >
                    <ChevronLeft size={14} /> {common('back')}
                </Link>

                <div className="pointer-events-auto">
                    <LanguageSwitcher />
                </div>
            </nav>

            <header className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 text-center space-y-8 max-w-4xl">
                    <div className="flex justify-center mb-4">
                        <Utensils className="w-12 h-12 text-orange-500" />
                    </div>
                    <h1 className="text-6xl md:text-9xl font-light tracking-tighter italic text-stone-100">
                        {t('hero.title')}
                    </h1>
                    <p className="text-sm md:text-base font-sans font-bold uppercase tracking-[0.5em] text-orange-500">
                        {t('hero.subtitle')}
                    </p>
                    <div className="pt-8">
                        <button className="px-10 py-4 bg-orange-700 hover:bg-orange-800 text-white font-sans font-bold uppercase tracking-widest transition-all">
                            {t('nav.reserve')}
                        </button>
                    </div>
                </div>
            </header>


            <section className="py-32 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-light italic">{t('nav.menu')}</h2>
                    <div className="w-24 h-px bg-orange-500 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-16 font-sans">
                    {[0, 1, 2, 3].map((idx) => (
                        <div key={idx} className="flex justify-between items-end border-b border-stone-800 pb-4 group cursor-default">
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg group-hover:text-orange-500 transition-colors uppercase tracking-wide">
                                    {t(`menu.items.${idx}.title`)}
                                </h3>
                                <p className="text-sm text-stone-500 italic">{t(`menu.items.${idx}.desc`)}</p>
                            </div>
                            <span className="font-bold text-orange-500">{t(`menu.items.${idx}.price`)}</span>
                        </div>
                    ))}
                </div>
            </section>


            <section className="bg-stone-900/50 py-32 px-6 border-y border-stone-900">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center font-sans">
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
                    <Link href="/" className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-100">
                        {t('footer.brand')}
                    </Link>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-stone-600" dangerouslySetInnerHTML={{ __html: t('footer.closing') }} />
            </footer>
        </div>
    );
}