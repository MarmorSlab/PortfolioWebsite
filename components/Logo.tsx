"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "icon" | "full";
}

export function Logo({ className, variant = "full" }: LogoProps) {
    return (
        <div className={cn("inline-flex items-center gap-3", className)}>
            {/* The Isometric Slab Icon */}
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 transition-transform duration-500 hover:rotate-[360deg]"
            >
                {/* The "Slab" - Isometric Box Silhouette */}
                <path
                    d="M50 10L15 30V70L50 90L85 70V30L50 10Z"
                    className="fill-slate-100 dark:fill-zinc-800 stroke-blue-600 dark:stroke-blue-500"
                    strokeWidth="4"
                    strokeLinejoin="round"
                />

                {/* The "Lab" - Engineering "M" Blueprint Lines */}
                <path
                    d="M25 40V75M50 30V90M75 40V75M25 40L50 55L75 40"
                    className="stroke-blue-600 dark:stroke-blue-400"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Technical Nodes (The 'Engineering' details) */}
                <circle cx="50" cy="30" r="3" className="fill-blue-600 dark:fill-blue-400" />
                <circle cx="25" cy="40" r="3" className="fill-blue-600 dark:fill-blue-400" />
                <circle cx="75" cy="40" r="3" className="fill-blue-600 dark:fill-blue-400" />
            </svg>

            {/* The Wording: MarmorSlab */}
            {variant === "full" && (
                <div className="flex flex-col -space-y-1">
                    <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                        Marmor
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-black tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase">
                            S
                        </span>
                        <span className="text-xs font-bold tracking-[0.3em] text-slate-500 dark:text-zinc-500 uppercase">
                            Lab
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}