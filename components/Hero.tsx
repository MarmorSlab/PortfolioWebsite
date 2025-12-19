"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-40 pb-24 px-6 flex justify-center bg-white dark:bg-zinc-900">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl text-center space-y-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-600 rounded-full text-white text-sm font-medium mb-4">
                    ✓ Computer Engineering Student · Modern Web Solutions
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Professional websites that
                    <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        drive real results
                    </span>
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Affordable, custom websites built with the latest technology. 
                    Clean design, fast performance, and SEO optimized to help your business stand out.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                    >
                        Get a Free Quote →
                    </a>
                    <a
                        href="#projects"
                        className="inline-block px-8 py-4 bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white rounded-lg text-lg font-semibold transition-all duration-200 hover:border-blue-600 hover:scale-105"
                    >
                        View My Work
                    </a>
                </div>
                
                <div className="flex justify-center gap-8 pt-8 text-sm text-slate-700 dark:text-slate-200">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        <span>Fast Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">💯</span>
                        <span>100% Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🔒</span>
                        <span>Secure & Reliable</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}