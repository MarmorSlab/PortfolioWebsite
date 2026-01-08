"use client";
import { motion } from "framer-motion";
import { Check, Leaf, Briefcase, Crown, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Pricing() {
    const t = useTranslations("pricing");
    const packageConfig = [
        {
            key: "starter",
            icon: <Leaf className="w-6 h-6 text-green-500" />,
            popular: false
        },
        {
            key: "professional",
            icon: <Briefcase className="w-6 h-6 text-blue-500" />,
            popular: true
        },
        {
            key: "enterprise",
            icon: <Crown className="w-6 h-6 text-amber-500" />,
            popular: false
        }
    ] as const;

    const packages = packageConfig.map((pkg) => ({
        ...pkg,
        name: t(`${pkg.key}.name`),
        price: t(`${pkg.key}.price`),
        description: t(`${pkg.key}.description`),
        features: t.raw(`${pkg.key}.features`) as string[]
    }));

    return (
        <section id="pricing" className="py-24 px-6 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">{t("title")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${pkg.popular
                                    ? "border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10 bg-white dark:bg-zinc-800"
                                    : "border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/40 hover:border-slate-200 dark:hover:border-zinc-700"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                                    <Sparkles className="w-3 h-3" />
                                    {t("popular")}
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-100 dark:border-zinc-800">
                                    {pkg.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
                                    {pkg.price.toLowerCase() !== "custom" && <span className="text-slate-500 dark:text-zinc-500 text-sm"></span>}
                                </div>
                                <p className="text-sm text-slate-600 dark:text-zinc-400">
                                    {pkg.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 dark:text-zinc-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block text-center py-4 rounded-xl font-bold transition-all active:scale-95 ${pkg.popular
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                                        : "bg-slate-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90"
                                    }`}
                            >
                                {t("cta")}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-sm text-slate-500 dark:text-zinc-500 mt-12 max-w-lg mx-auto leading-relaxed">
                    {t("footer")} <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4">{t("customPlanLink")}</a>
                </p>
            </div>
        </section>
    );
}