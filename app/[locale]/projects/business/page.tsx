import { getTranslations } from "next-intl/server";
import Image from "next/image"; // Import the Image component
import {
    ChevronLeft,
    ArrowRight,
    Shield,
    BarChart3,
    Scale,
    CheckCircle2
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function BusinessDemo({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "projects.Showcase.business" });
    const common = await getTranslations({ locale, namespace: "projects.Showcase.common" });

    return (
        // Use slate-900 for a richer, professional dark tone
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-blue-500/30 font-sans antialiased">
            {/* 1. PORTFOLIO ESCAPE HATCH */}
            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-slate-900/60 backdrop-blur-md border-b border-white/5">
                <a
                    href={`/${locale}#projects`}
                    className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white active:text-white active:scale-95 transition-all group cursor-pointer"
                >
                    <ChevronLeft size={14} className="md:w-4 md:h-4 group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform" /> {common('back')}
                </a>
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex gap-6 lg:gap-8 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        <span className="hover:text-white active:text-white cursor-pointer transition-colors">{t('nav.solutions')}</span>
                        <span className="hover:text-white active:text-white cursor-pointer transition-colors">{t('nav.global')}</span>
                        <span className="hover:text-white active:text-white cursor-pointer transition-colors">{t('nav.firm')}</span>
                    </div>
                    <div className="bg-white/5 p-1 rounded-md">
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            {/* 2. REALISTIC HERO SECTION WITH IMAGE */}
            <header className="relative h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden">
                {/* High-Quality Corporate Image Background */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/business-hero.jpg" // Replace with a photo of a modern city skyline or abstract architecture
                        alt="Corporate headquarters"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
                </div>

                <div className="relative z-10 max-w-4xl text-center space-y-6 md:space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 backdrop-blur-md border border-blue-400/20 rounded-full text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] animate-[fadeIn_0.8s_ease-out]">
                        {t('hero.badge')}
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] md:leading-[0.95] text-white drop-shadow-lg animate-[fadeInUp_1s_ease-out_0.2s_both]">
                        {t('hero.title')}
                    </h1>
                    <p className="text-base md:text-lg lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow text-slate-300 animate-[fadeInUp_1s_ease-out_0.4s_both]">
                        {t('hero.description')}
                    </p>
                    <div className="pt-6 md:pt-10 flex flex-col md:flex-row gap-4 md:gap-6 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
                        <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white active:scale-95 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 md:gap-3">
                            {t('hero.cta')} <ArrowRight size={16} className="md:w-4.5 md:h-4.5" />
                        </button>
                        <button className="px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-white/10 active:bg-white/10 active:scale-95 transition-all">
                            {t('hero.ctaSecondary')}
                        </button>
                    </div>
                </div>
            </header>

            {/* 3. VISUAL SERVICES GRID (With Real Images) */}
            <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12 md:mb-20 space-y-3 md:space-y-4 text-center animate-[fadeInUp_0.8s_ease-out]">
                    <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">{t('services.label')}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter">{t('services.title')}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { id: 'strategy', icon: <Scale size={24} className="md:w-7 md:h-7" />, img: '/images/service-strategy.jpg' },
                        { id: 'analytics', icon: <BarChart3 size={24} className="md:w-7 md:h-7" />, img: '/images/service-analytics.jpg' },
                        { id: 'security', icon: <Shield size={24} className="md:w-7 md:h-7" />, img: '/images/service-security.jpg' }
                    ].map((service, idx) => (
                        <div key={service.id} className="group relative h-[400px] md:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-slate-800 transition-transform cursor-pointer animate-[fadeInUp_0.8s_ease-out] opacity-0" style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}>
                            {/* Service Background Image */}
                            <Image
                                src={service.img}
                                alt={t(`services.${service.id}.name`)}
                                fill
                                className="object-cover opacity-70 transition-all duration-700"
                            />
                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-10 flex flex-col justify-end">
                                <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 animate-[pulse_3s_ease-in-out_infinite]">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{t(`services.${service.id}.name`)}</h3>
                                <p className="text-slate-300 leading-relaxed text-base">
                                    {t(`services.${service.id}.desc`)}
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs">
                                    {t('services.learnMore')} <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. DATA & PERFORMANCE SECTION (With Dashboard Visual) */}
            <section className="py-32 px-8 bg-slate-800/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                            {t('data.title')}
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            {t('data.description')}
                        </p>
                        <ul className="space-y-4">
                            {(t.raw('data.features') as string[]).map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                                    <CheckCircle2 size={20} className="text-blue-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-[16/10] bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                        {/* Replace with a screenshot of a dark-themed dashboard */}
                        <Image
                            src="/images/dashboard-mockup.jpg"
                            alt="Corporate Dashboard Interface"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* 5. CORPORATE FOOTER */}
            <footer className="py-24 px-8 bg-slate-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-slate-900 text-sm shadow-lg">N</div>
                            <span className="font-black text-white tracking-[0.2em] uppercase text-lg">{t('footer.brandName')}</span>
                        </div>
                        <p className="text-xs text-slate-500 uppercase tracking-[0.3em] leading-relaxed font-bold">
                            {t('footer.attribution')}<br />
                            <span className="text-slate-700">© {t('footer.year')}</span>
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        <span className="hover:text-white active:text-white active:scale-95 cursor-pointer transition-all inline-block">{t('footer.terms')}</span>
                        <span className="hover:text-white active:text-white active:scale-95 cursor-pointer transition-all inline-block">{t('footer.privacy')}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}