"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Smartphone, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const iconVariants: Variants = {
    idle: { rotate: 0, scale: 1 },
    hovered: {
        rotate: 12,
        scale: 1.1,
        transition: { type: "spring", stiffness: 300, damping: 15 }
    },
};

export default function Benefits() {
    const t = useTranslations("testimonials");
    const benefits = [
        {
            icon: <Zap className="w-10 h-10 text-amber-500 fill-amber-500/10" />,
            title: t("benefit1.title"),
            text: t("benefit1.text")
        },
        {
            icon: <Smartphone className="w-10 h-10 text-blue-500 fill-blue-500/10" />,
            title: t("benefit2.title"),
            text: t("benefit2.text")
        },
        {
            icon: <Target className="w-10 h-10 text-red-500 fill-red-500/10" />,
            title: t("benefit3.title"),
            text: t("benefit3.text")
        }
    ];

    return (
        <section id="benefits" className="py-24 px-6 bg-zinc-800 border-y border-zinc-700/50">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial="idle"
                            whileHover="hovered"
                            viewport={{ once: true }}
                            className={cn(
                                "group relative p-10 rounded-3xl transition-all duration-300",
                                "bg-zinc-900 border border-zinc-700/50",
                                "hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5"
                            )}
                        >
                        
                            <motion.div
                                variants={iconVariants}
                                className="mb-8 inline-flex p-4 rounded-2xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-300"
                            >
                                {benefit.icon}
                            </motion.div>

                            <h3 className="text-xl font-bold mb-4 text-white">
                                {benefit.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">
                                {benefit.text}
                            </p>

                            
                            <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                {benefit.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}