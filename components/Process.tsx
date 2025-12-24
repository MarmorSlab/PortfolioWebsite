"use client";

import { motion } from "framer-motion";
import { Microscope, Ruler, HardHat, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Process() {
    const t = useTranslations("process");
    const stepsData = t.raw("steps") as Array<{ title: string; description: string }>;
    
    const steps = [
        {
            ...stepsData[0],
            icon: <Microscope className="w-6 h-6" />,
            color: "text-blue-500",
        },
        {
            ...stepsData[1],
            icon: <Ruler className="w-6 h-6" />,
            color: "text-amber-500",
        },
        {
            ...stepsData[2],
            icon: <HardHat className="w-6 h-6" />,
            color: "text-emerald-500",
        },
        {
            ...stepsData[3],
            icon: <Rocket className="w-6 h-6" />,
            color: "text-purple-500",
        },
    ];

    return (
        <section id="process" className="py-24 px-6 bg-white dark:bg-zinc-900 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </div>


                <div className="relative grid md:grid-cols-4 gap-12">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-zinc-800 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >

                            <div className={cn(
                                "w-24 h-24 rounded-3xl mb-6 flex items-center justify-center transition-all duration-500",
                                "bg-white dark:bg-zinc-800 border-2 border-slate-100 dark:border-zinc-700",
                                "group-hover:border-blue-500 group-hover:shadow-xl group-hover:shadow-blue-500/10",
                                "group-hover:-translate-y-2"
                            )}>
                                <div className={cn("transition-transform duration-500 group-hover:scale-110", step.color)}>
                                    {step.icon}
                                </div>
                            </div>

                            <div className="px-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-500 mb-2 block">
                                    {t("phaseLabel")} 0{i + 1}
                                </span>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}