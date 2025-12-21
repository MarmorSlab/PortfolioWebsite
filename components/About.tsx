"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Code2, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-white dark:bg-zinc-950 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                            Engineering Precision <br />
                            <span className="text-blue-600 dark:text-blue-400">meets Business Growth</span>
                        </h2>

                        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                            <p>
                                Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Agustin Marmor</span>.
                                As a Computer Engineering student based in Kissimmee, I look at the web as a technical system, not just a design project.
                            </p>
                            <p>
                                Under my professional brand, <strong>MarmorSlab</strong>, I engineer high-performance digital foundations for small businesses.
                                My approach is simple: a website should be as solid and unbreakable as a concrete slab. Optimized for speed, security, and search engine visibility.
                            </p>
                            <p className="font-medium text-blue-600 dark:text-blue-400">
                                I bridge the gap between complex engineering and clean, effective business solutions.
                            </p>
                        </div>
                    </motion.div>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <Cpu className="w-5 h-5" />,
                                label: "Engineering Mindset",
                                desc: "Logical, structured, and scalable code architecture."
                            },
                            {
                                icon: <Code2 className="w-5 h-5" />,
                                label: "Modern Tech",
                                desc: "Next.js and React foundations for maximum performance."
                            },
                            {
                                icon: <Globe className="w-5 h-5" />,
                                label: "SEO Optimized",
                                desc: "Built to be found by Google and local customers."
                            },
                            {
                                icon: <GraduationCap className="w-5 h-5" />,
                                label: "Computer Engineering",
                                desc: "Applying university-grade logic to web challenges."
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-slate-100 dark:border-zinc-800"
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