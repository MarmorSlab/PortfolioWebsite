"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Code2, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("about");

    const cards = Object.values(
        t.raw("cards") as Record<
            string,
            { label: string; description: string }
        >
    );

    return (
        <section
            id="about"
            className="py-28 px-6 bg-white dark:bg-zinc-950 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-120px", amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                            {t("heading")}
                            <br />
                            <span className="text-blue-600 dark:text-blue-400">
                                {t("highlight")}
                            </span>
                        </h2>

                        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                            <p>{t("paragraph1")}</p>
                            <p>{t("paragraph2")}</p>
                            <p className="font-medium text-blue-600 dark:text-blue-400">
                                {t("highlightText")}
                            </p>
                        </div>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: <Cpu className="w-5 h-5" />, ...cards[0] },
                            { icon: <Code2 className="w-5 h-5" />, ...cards[1] },
                            { icon: <Globe className="w-5 h-5" />, ...cards[2] },
                            { icon: <GraduationCap className="w-5 h-5" />, ...cards[3] }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ margin: "-100px", amount: 0.3 }}
                                transition={{
                                    delay: i * 0.08,
                                    duration: 0.45,
                                    ease: "easeOut"
                                }}
                                className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-xl border border-slate-100 dark:border-zinc-800 ring-1 ring-blue-500/10"
                            >
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>

                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                                    {item.label}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-snug">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
