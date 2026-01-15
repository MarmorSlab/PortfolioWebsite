import { getTranslations } from "next-intl/server";
import Image from "next/image";
import {
    ChevronLeft,
    Phone,
    MessageCircle,
    MapPin,
    CheckCircle,
    Star,
    Clock,
    ArrowRight
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function SmallBusinessDemo({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "projects.Showcase.smallBusiness" });
    const common = await getTranslations({ locale, namespace: "projects.Showcase.common" });

    return (
        <div className="min-h-screen bg-[#0f110f] text-stone-300 selection:bg-emerald-500/30 font-sans antialiased">
            {/* 1. STICKY MOBILE ACTION BAR */}
            <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden flex gap-4">
                <a href="tel:1234567890" className="flex-1 bg-white text-black py-4 rounded-2xl flex items-center justify-center gap-2 font-black shadow-2xl active:scale-95 active:bg-emerald-500 active:text-white transition-all">
                    <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/11234567890" className="w-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-2xl active:scale-95 active:bg-white active:text-emerald-600 transition-all">
                    <MessageCircle size={24} />
                </a>
            </div>

            {/* 2. NAVIGATION BAR */}
            <nav className="fixed top-0 w-full z-40 bg-[#0f110f]/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <a href={`/${locale}#projects`} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 hover:text-emerald-400 active:text-emerald-400 active:scale-95 transition-all cursor-pointer">
                    <ChevronLeft size={14} /> {common('back')}
                </a>
                <div className="flex items-center gap-6">
                    <a href="tel:1234567890" className="hidden md:flex items-center gap-2 font-bold text-xs text-white tracking-widest uppercase">
                        <Phone size={14} className="text-emerald-500" /> (123) 456-7890
                    </a>
                    <LanguageSwitcher />
                </div>
            </nav>

            {/* 3. HERO SECTION */}
            <header className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-4 md:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="space-y-8 md:space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                            <Star size={10} className="md:w-3 md:h-3" fill="currentColor" /> {t('hero.badge')}
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] md:leading-[0.85]">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-stone-400 leading-relaxed max-w-xl font-light">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                            <button className="px-8 md:px-10 py-4 md:py-5 bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-emerald-500 active:bg-emerald-500 active:scale-95 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2">
                                {t('hero.cta')} <ArrowRight size={16} className="md:w-4.5 md:h-4.5" />
                            </button>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                        <Image
                            src="/images/local-hero.jpg"
                            alt="Landscaping excellence in Kissimmee"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f110f] via-transparent to-transparent" />
                    </div>
                </div>
            </header>

            {/* 4. VISUAL SERVICES GRID */}
            <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {['design', 'maintenance', 'hardscape'].map((service) => (
                        <div key={service} className="space-y-4 md:space-y-6 group cursor-pointer active:scale-[0.98] transition-transform">
                            <div className="relative h-64 md:h-80 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5">
                                <Image
                                    src={`/images/service-${service}.jpg`}
                                    alt={service}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 group-active:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f110f] to-transparent" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t(`services.${service}.title`)}</h3>
                            <p className="text-stone-500 leading-relaxed text-sm">{t(`services.${service}.desc`)}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {t.raw(`services.${service}.features`).map((f: string) => (
                                    <span key={f} className="text-[9px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. FOOTER */}
            <footer className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#0a0c0a]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 text-center md:text-left">
                    <div className="space-y-8">
                        <div className="space-y-2">
                        
                            <h4 className="font-black text-white uppercase tracking-[0.3em] text-sm">
                                {t('footer.brandName')}
                            </h4>
                            <div className="flex items-center gap-3 justify-center md:justify-start text-stone-500 text-xs font-bold uppercase tracking-widest">
                                <MapPin size={14} className="text-emerald-500" /> {t('footer.location')}
                            </div>
                        </div>

                    
                        <p className="text-[10px] text-stone-600 uppercase tracking-[0.4em] font-black">
                            {t('footer.attribution', { name: 'Agustin Marmor' })}
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="text-[10px] font-bold text-stone-700 uppercase tracking-widest">
                            {t('footer.availability')}
                        </div>
                        <button className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-500 hover:text-white active:bg-emerald-500 active:text-white active:scale-95 transition-all">
                            {t('footer.cta')}
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}