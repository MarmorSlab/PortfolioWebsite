"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "en", label: <span className="fi fi-us w-5 h-5" /> },
        { code: "es", label: <span className="fi fi-es w-5 h-5" /> }
    ];

    function switchLocale(newLocale: string) {
        setOpen(false);
        if (newLocale === locale) return;
        

        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium
          bg-slate-100 dark:bg-zinc-800
          text-slate-700 dark:text-slate-300
          hover:bg-blue-600 hover:text-white
          dark:hover:bg-blue-600 transition-all"
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                {languages.find(l => l.code === locale)?.label}
                <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {open && (
                <ul className="absolute right-0 mt-2 w-24 bg-white dark:bg-zinc-900
          border border-slate-200 dark:border-zinc-700 rounded-md shadow-lg z-50">
                    {languages.map(lang => (
                        <li key={lang.code}>
                            <button
                                disabled={isPending}
                                onClick={() => switchLocale(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors
                  ${locale === lang.code
                                        ? "bg-blue-600 text-white font-bold"
                                        : "hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300"
                                    }`}
                            >
                                {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
