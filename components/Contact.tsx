"use client";

import { sendEmail } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation"
export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const botField = target.elements.namedItem("website") as HTMLInputElement;

        if (botField?.value) {
            console.warn("Bot detected.");
            router.push("/thank-you");
            return;
        }

        setIsSubmitting(true);


        const result = await sendEmail(formData);


        if (result.success) {
            router.push("/thank-you");
        } else {
            alert("There was an error sending your message. Please try again later.");
            setIsSubmitting(false);
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
            <h2 className="mb-8 text-3xl font-bold text-center tracking-tight text-slate-900 dark:text-white">
                Contact
            </h2>
            <div className="max-w-xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="p-8 shadow-lg border-2 border-blue-100 dark:border-blue-900 bg-white/80 dark:bg-zinc-900/80 rounded-2xl flex flex-col gap-6"
                >
                    {/* --- Honeypot Field --- */}
                    <input
                        type="text"
                        name="website"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                    {/* ---------------------- */}
                    <label className="flex flex-col text-left">
                        <span className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Name</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-md border border-slate-300 dark:border-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-100"
                        />
                    </label>

                    <label className="flex flex-col text-left">
                        <span className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-md border border-slate-300 dark:border-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-fuchsia-500 bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-100"
                        />
                    </label>

                    <label className="flex flex-col text-left">
                        <span className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Message</span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}

                            required
                            rows={6}
                            className="resize-y min-h-[120px] max-h-[320px] rounded-lg border border-slate-300 dark:border-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-100"
                        />
                    </label>
                    <button
                        type="submit"
                        className="self-end px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
export default Contact;