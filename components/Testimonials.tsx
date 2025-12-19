"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
    const benefits = [
        {
            icon: "⚡",
            title: "Lightning Fast",
            text: "Your website will load in under 2 seconds, keeping visitors engaged and improving your search rankings."
        },
        {
            icon: "📱",
            title: "Mobile First",
            text: "Designed and optimized for all devices. Your site will look perfect on phones, tablets, and desktops."
        },
        {
            icon: "🎯",
            title: "SEO Ready",
            text: "Built with search engine optimization in mind so customers can easily find your business online."
        }
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold mb-3 text-slate-900 dark:text-white">Why Choose Me</h2>
                    <p className="text-slate-600 dark:text-slate-300">
                        Modern solutions for your business
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-slate-200 dark:border-zinc-700 text-center"
                        >
                            <div className="text-5xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
