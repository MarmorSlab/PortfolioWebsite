"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Code2, GraduationCap } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-white dark:bg-zinc-900 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                            Engineering Precision <br />
                            <span className="text-blue-600 dark:text-blue-400">meets Creative Web Design</span>
                        </h2>

                        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                            <p>
                                Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Agustin</span>.
                                As a Computer Engineering student, I look at the web differently.
                                To me, a website isn't just a digital flyer—it's a high-performance system that needs to be
                                fast, secure, and efficient.
                            </p>
                            <p>
                                Under the <strong>MarmorSlab</strong> name, I help small businesses and entrepreneurs
                                bridge the gap between complex technology and a clean online presence.
                                I focus on the "Slab" philosophy: building solid, minimalist, and unbreakable foundations.
                            </p>
                            <p className="font-medium text-blue-600 dark:text-blue-400">
                                My goal is to deliver enterprise-level quality at a freelance scale.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Expertise Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <Cpu className="w-5 h-5" />,
                                label: "Engineering Mindset",
                                desc: "Logical, structured, and efficient code."
                            },
                            {
                                icon: <Code2 className="w-5 h-5" />,
                                label: "Modern Stack",
                                desc: "Next.js, React, and Tailwind CSS expert."
                            },
                            {
                                icon: <Globe className="w-5 h-5" />,
                                label: "Global Performance",
                                desc: "Optimized for speed across all devices."
                            },
                            {
                                icon: <GraduationCap className="w-5 h-5" />,
                                label: "Always Evolving",
                                desc: "Current Computer Engineering student."
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-800"
                            >
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.label}</h4>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-snug">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}