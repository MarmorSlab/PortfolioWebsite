"use client";

import { sendEmail } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";


export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const t = useTranslations("contact");
    const locale = useLocale();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const botField = target.elements.namedItem("website") as HTMLInputElement;
        const thankYouPath = `/${locale}/thank-you`;

        if (botField?.value) {
            router.push(thankYouPath);
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                router.push(thankYouPath);
            } else {
                alert(t("errorMessage"));
            }
        } catch (error) {
            alert(t("unexpectedError"));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                    {t("title")}
                </h2>
                {/* Legal anchor: Links the brand to Agustin Marmor for $0 compliance */}
                <p className="text-slate-600 dark:text-zinc-400">
                    {t.rich("subtitle", {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>
            </div>

            <div className="max-w-xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="p-8 shadow-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 rounded-2xl flex flex-col gap-6 backdrop-blur-sm"
                >
                    {/* --- Honeypot Field --- */}
                    <input
                        type="text"
                        name="website"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="grid gap-6">
                        <label className="flex flex-col text-left">
                            <span className="mb-2 text-sm font-semibold text-slate-700 dark:text-zinc-300">{t("nameLabel")}</span>
                            <input
                                type="text"
                                name="name"
                                placeholder={t("namePlaceholder")}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="rounded-xl border border-slate-200 dark:border-zinc-800 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white transition-all"
                            />
                        </label>

                        <label className="flex flex-col text-left">
                            <span className="mb-2 text-sm font-semibold text-slate-700 dark:text-zinc-300">{t("emailLabel")}</span>
                            <input
                                type="email"
                                name="email"
                                placeholder={t("emailPlaceholder")}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="rounded-xl border border-slate-200 dark:border-zinc-800 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white transition-all"
                            />
                        </label>

                        <label className="flex flex-col text-left">
                            <span className="mb-2 text-sm font-semibold text-slate-700 dark:text-zinc-300">{t("messageLabel")}</span>
                            <textarea
                                name="message"
                                placeholder={t("messagePlaceholder")}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="resize-none rounded-xl border border-slate-200 dark:border-zinc-800 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white transition-all"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-xl text-lg font-bold transition-all hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98]"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                {t("submitProcessing")}
                            </>
                        ) : (
                            <>
                                {t("submitButton")}
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}