"use client";

import { motion } from "framer-motion";
import { Check, Shield, Wrench, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CarePlans() {
    const t = useTranslations("care");

    const planConfig = [
        {
            key: "basic",
            icon: <Shield className="w-6 h-6 text-emerald-500" />,
            popular: false,
        },
        {
            key: "pro",
            icon: <Wrench className="w-6 h-6 text-blue-500" />,
            popular: true,
        },
        {
            key: "advanced",
            icon: <Rocket className="w-6 h-6 text-purple-500" />,
            popular: false,
        },
    ] as const;

    const plans = planConfig.map((plan) => ({
        ...plan,
        name: t(`${plan.key}.name`),
        price: t(`${plan.key}.price`),
        description: t(`${plan.key}.description`),
        features: t.raw(`${plan.key}.features`) as string[],
    }));

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase">
                        Optional Add-On
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>


                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.key}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular
                                ? "border-blue-600 dark:border-blue-500 bg-white dark:bg-zinc-800 shadow-2xl scale-[1.02]"
                                : "border-slate-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/40"
                                }`}
                        >

                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {t("popular")}
                                </span>
                            )}

                            <div className="mb-6">
                                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700">
                                    {plan.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {plan.name}
                                </h3>

                                <div className="flex items-end gap-1 mt-2">
                                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm text-slate-500 dark:text-zinc-400 mb-1">
                                        /{t("perMonth")}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400">
                                    {plan.description}
                                </p>
                            </div>


                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-3 text-sm">
                                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                                        <span className="text-slate-700 dark:text-zinc-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>


                            <a
                                href="#contact"
                                className={`mt-auto block text-center py-4 rounded-xl font-semibold transition-all active:scale-95 ${plan.popular
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-slate-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90"
                                    }`}
                            >
                                {t("cta")}
                            </a>
                        </motion.div>
                    ))}
                </div>


                <p className="mt-12 text-center text-sm text-slate-500 dark:text-zinc-500 max-w-3xl mx-auto">
                    {t("footer")}
                    <br />
                    <span className="block mt-2">
                        Care plans do not include new features, redesigns, or additional
                        pages.
                    </span>
                </p>
            </div>
        </section>
    );
}
