"use client";
import { Logo } from "./Logo";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");
    const locale = useLocale();
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex flex-col mb-6">
                            <Logo variant="full" className="mb-2" />
                            {/* Legal anchor connecting brand to individual */}
                            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 font-bold ml-1">
                                {t("signature")}
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed">
                            {t("tagline")}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-widest text-xs">{t("connect")}</h4>
                        <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-zinc-400">
                            <a href="https://github.com/agus-marmor/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                <Github size={16} aria-hidden/> {t("social.github")}
                            </a>
                            <a href="https://www.linkedin.com/in/agustin-marmor/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                <Linkedin size={16} aria-hidden/> {t("social.linkedin")}
                            </a>
                            <a href="mailto:info@marmorslab.dev" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                <Mail size={16} aria-hidden/> {t("email")}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-widest text-xs">{t("availabilityTitle")}</h4>
                        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {t("availabilityStatus")}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-slate-500 dark:text-zinc-500 text-sm font-medium">
                            {t("ownerLine", { year: currentYear })}
                        </p>
                        <p className="text-[10px] text-slate-400 dark:text-zinc-600 italic">
                            {t("legalNote")}
                        </p>
                    </div>
                    <div className="flex gap-6 text-xs font-medium text-slate-500 dark:text-zinc-500">
                        <Link href={`/${locale}/privacy`} className="hover:text-blue-600 transition-colors underline-offset-4">{t("privacy")}</Link>
                        <Link href={`/${locale}/tos`} className="hover:text-blue-600 transition-colors underline-offset-4">{t("terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}