"use client";
import { motion, Variants } from "framer-motion";
import { Zap, Smartphone, Target } from "lucide-react";

const iconVariants: Variants = {
    idle: { rotate: 0, scale: 1 },
    hovered: {
        rotate: 12,
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    },
};

export default function Testimonials() {
    const benefits = [
        {
            icon: <Zap className="w-10 h-10 text-amber-500" />,
            title: "Lightning Fast",
            text: "Your website will load in under 2 seconds, keeping visitors engaged and improving your search rankings."
        },
        {
            icon: <Smartphone className="w-10 h-10 text-blue-500" />,
            title: "Mobile First",
            text: "Designed and optimized for all devices. Your site will look perfect on phones, tablets, and desktops."
        },
        {
            icon: <Target className="w-10 h-10 text-red-500" />,
            title: "SEO Ready",
            text: "Built with search engine optimization in mind so customers can easily find your business online."
        }
    ];

    return (
        <section className="py-24 px-6 bg-zinc-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Why Choose MarmorSlab
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        High-end design meets high-performance engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial="idle"
                            whileHover="hovered" // 2. Trigger "hovered" variant for all children
                            className="group bg-zinc-900 p-10 rounded-3xl border border-zinc-700/50 text-center transition-colors hover:border-blue-500/50"
                        >
                            <motion.div
                                className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors"
                                variants={iconVariants} // 3. Apply variants to the icon container
                            >
                                {benefit.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-4 text-white">
                                {benefit.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}