import { Logo } from "./Logo";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <Logo variant="full" className="mb-6" />
                        <p className="text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed">
                            Engineering high-performance digital foundations for modern businesses.
                            Designed in the lab, built to be the slab.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-widest text-xs">Connect</h4>
                        <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-zinc-400">
                            <a href="https://github.com/agus-marmor/" className="hover:text-blue-600 flex items-center gap-2"><Github size={16} /> GitHub</a>
                            <a href="https://www.linkedin.com/in/agustin-marmor/" className="hover:text-blue-600 flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a>
                            <a href="mailto:info@marmorslab.dev" className="hover:text-blue-600 flex items-center gap-2"><Mail size={16} /> info@marmorslab.dev</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-widest text-xs">Project Status</h4>
                        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Taking new clients
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-zinc-500">
                    <p>© {new Date().getFullYear()} MarmorSlab. Developed by Agustin Marmor.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
                        <a href="#" className="hover:underline underline-offset-4">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}