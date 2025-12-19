"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "left" | "right";

interface FadeInSectionProps {
    children: ReactNode;
    direction?: Direction;
}

export function FadeInSection({ children, direction = "up" }: FadeInSectionProps) {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, y: 0 });
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : 0,
            x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
        },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
