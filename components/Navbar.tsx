"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "@/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const t = useTranslations('navbar');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t('services'), href: "#services", id: 'services' },
        { name: t('work'), href: "#projects", id: 'projects' },
        { name: t('pricing'), href: "#pricing", id: 'pricing' },
        { name: t('about'), href: "#about", id: 'about' },
    ];

    // Track active section for animated underline
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number } | null>(null);
    const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for navbar height

            let current = null;
            for (const link of navLinks) {
                const el = document.getElementById(link.id);
                if (!el) continue;

                const rect = (el as HTMLElement).getBoundingClientRect();
                const elementTop = window.scrollY + rect.top;
                const elementBottom = elementTop + rect.height;

                // Check if scroll position is within this section
                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    current = link.id;
                    break;
                }
            }

            setActiveSection(current);
        };

        const handleResize = () => {
            // Recalculate underline position on resize
            if (activeSection && navRefs.current[activeSection]) {
                const el = navRefs.current[activeSection];
                const rect = el.getBoundingClientRect();
                const parentRect = el.parentElement?.getBoundingClientRect();
                if (parentRect) {
                    setUnderlineStyle({
                        left: rect.left - parentRect.left,
                        width: rect.width
                    });
                } else {
                    setUnderlineStyle(null);
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener("resize", handleResize)

        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate underline position and width
    useEffect(() => {
        if (!activeSection || !navRefs.current[activeSection]) {
            setUnderlineStyle(null);
            return;
        }
        const el = navRefs.current[activeSection];
        if (el) {
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement?.getBoundingClientRect();
            if (parentRect) {
                setUnderlineStyle({
                    left: rect.left - parentRect.left,
                    width: rect.width
                });
            }
        }
    }, [activeSection, navLinks.map(l => l.id).join(",")]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
                isScrolled
                    ? "py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 shadow-sm"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.history.pushState(null, '', window.location.pathname);
                    }}
                    className="group flex flex-col hover:opacity-90 transition-opacity"
                >
                    <div className="flex items-center gap-2">
                        <Logo variant="full" className="scale-90 md:scale-100 origin-left" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold ml-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        By Agustin Marmor
                    </span>
                </Link>


                <nav className="hidden md:flex items-center gap-8 relative" style={{ minHeight: 40 }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            ref={el => { navRefs.current[link.id] = el; }}
                            className={cn(
                                "relative px-1 py-0.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                activeSection === link.id
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                            )}
                            aria-current={activeSection === link.id ? 'page' : undefined}
                        >
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}
                    {/* Animated underline */}
                    {underlineStyle && (
                        <motion.span
                            className="absolute bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                            animate={{ left: underlineStyle.left, width: underlineStyle.width }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ zIndex: 20 }}
                        />
                    )}
                    <Link
                        href="#contact"
                        className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-bold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                        {t('contact')}
                    </Link>
                    <div className="ml-2">
                        <LanguageSwitcher />
                    </div>
                </nav>

                <button
                    className="md:hidden p-2 text-slate-900 dark:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-zinc-900/90 border-b border-slate-200 dark:border-zinc-800 overflow-hidden shadow-2xl backdrop-blur-xl z-50"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-lg font-semibold px-2 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                        activeSection === link.id
                                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-zinc-800"
                                            : "text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                                    )}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex justify-center py-2">
                                <LanguageSwitcher />
                            </div>
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full text-center py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                            >
                                {t('contact')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}