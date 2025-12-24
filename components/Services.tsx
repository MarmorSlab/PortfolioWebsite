import { Palette, Code2, Rocket, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Services() {
    const t = useTranslations("services");
    const services = [
        {
            icon: <Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: t("service1.title"),
            description: t("service1.description"),
            features: t.raw("service1.features") as string[]
        },
        {
            icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: t("service2.title"),
            description: t("service2.description"),
            features: t.raw("service2.features") as string[]
        },
        {
            icon: <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: t("service3.title"),
            description: t("service3.description"),
            features: t.raw("service3.features") as string[]
        },
    ];

    return (
        <section id="services" className="py-24 px-6 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">{t("title")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="p-8 bg-slate-50 dark:bg-zinc-800 rounded-2xl border-2 border-slate-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl"
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300" role="img" aria-label={service.title}>
                                {React.cloneElement(service.icon, { "aria-hidden": true })}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                            <p className="text-slate-700 dark:text-slate-200 mb-4">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-full">
                                            <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}