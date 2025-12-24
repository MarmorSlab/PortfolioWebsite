"use client";
import { motion } from "framer-motion";
import {
    BadgeCheck,
    ArrowRight,
    Zap,
    HeartHandshake,
    ShieldCheck
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");
    return (
        <section className="pt-40 pb-24 px-6 flex justify-center bg-white dark:bg-zinc-900">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl text-center space-y-8"
            >

                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
                    <BadgeCheck className="w-4 h-4" />
                    <span>{t("badge")}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    {t("title")}
                    <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        {t("titleGradient")}
                    </span>
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    {t("subtitle")}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                        {t("cta1")}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white rounded-lg text-lg font-semibold transition-all duration-200 hover:border-blue-600 hover:scale-105 active:scale-95"
                    >
                        {t("cta2")}
                    </a>
                </div>


                <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-zinc-800">
                        <Zap className="w-4 h-4 text-amber-500 fill-amber-500/10" />
                        <span>{t("trust1")}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-zinc-800">
                        <HeartHandshake className="w-4 h-4 text-blue-500" />
                        <span>{t("trust2")}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-zinc-800">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>{t("trust3")}</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}