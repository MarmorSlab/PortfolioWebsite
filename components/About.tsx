"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function About() {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-24 px-6 bg-white dark:bg-zinc-900"
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
                <p className="text-slate-700 dark:text-slate-200 text-lg mb-4">
                    Hi, I'm Agustin, an aspiring embedded systems engineer with a passion for web development.
                    While I'm building my skills and portfolio, I'm excited to help small businesses get online with clean,
                    fast, and mobile-friendly websites. I focus on delivering modern designs that not only look great but
                    also perform well, all while keeping your budget in mind.
                </p>
                <p className="text-slate-700 dark:text-slate-200 text-lg">
                    If you're looking for a motivated developer who's eager to grow and deliver real value, let's connect!
                </p>
            </div>
        </motion.section>
    );
}
