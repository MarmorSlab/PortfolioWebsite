"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Calendar, Mail } from "lucide-react";

export default function ThankYou() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 bg-white dark:bg-zinc-950">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full text-center"
            >
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="bg-blue-600 rounded-full p-4"
                        >
                            <CheckCircle2 className="w-12 h-12 text-white" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Inquiry Received
                </h1>

                <p className="text-xl text-slate-600 dark:text-zinc-400 mb-12 leading-relaxed">
                    Thank you for reaching out. <strong>Agustin Marmor</strong> has received your project
                    details and is currently reviewing the technical requirements for your new foundation.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left">
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-slate-100 dark:border-zinc-800">
                        <Mail className="w-6 h-6 text-blue-600 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Check Your Inbox</h3>
                        <p className="text-sm text-slate-600 dark:text-zinc-400">
                            A confirmation email has been sent to you. Please check your spam folder if you don't see it.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-slate-100 dark:border-zinc-800">
                        <Calendar className="w-6 h-6 text-blue-600 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Next Steps</h3>
                        <p className="text-sm text-slate-600 dark:text-zinc-400">
                            Agustin will contact you within 24 business hours to schedule a discovery call.
                        </p>
                    </div>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-zinc-950 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to MarmorSlab
                </Link>

                <p className="mt-12 text-xs text-slate-400 dark:text-zinc-600 italic">
                    All business communications are handled directly by Agustin Marmor.
                </p>
            </motion.div>
        </main>
    );
}