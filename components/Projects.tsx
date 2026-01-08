import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ExternalLink } from "lucide-react";
import { i } from "framer-motion/client";
export default function Projects() {
    const t = useTranslations("projects");

    
    const projectKeys = ["restaurant", "business", "smallBusiness"] as const;
    
    const projects = projectKeys.map((key, index) => {
        const slug = key === "smallBusiness" ? "small-business" : key;
        return {
        id: key,
        title: t(`cards.${key}.title`),
        description: t(`cards.${key}.description`),
        metrics: t.raw(`cards.${key}.metrics`) as string[],
        tech: t(`cards.${key}.tech`),
        href: `/projects/${slug}`,
        image: index === 0 ? "bg-gradient-to-br from-blue-500 to-cyan-500" :
            index === 1 ? "bg-gradient-to-br from-green-500 to-emerald-500" :
                "bg-gradient-to-br from-purple-500 to-indigo-500"
        }
    });

    return (
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-zinc-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {t("subtitle")}
                    </p>
                </div>

                <ul role="list" className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <li key={project.id} role="listitem">
                            <Link
                                href={project.href}
                                className="block h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200 dark:border-zinc-700 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                            >
                                <div className={`h-48 relative overflow-hidden ${project.image}`}>
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                            {t("visit")} <ExternalLink size={14} />
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.metrics.map((metric) => (
                                            <span
                                                key={metric}
                                                className="text-[10px] font-bold uppercase tracking-tight bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full"
                                            >
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 font-mono">
                                        {project.tech}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="mt-12 text-center text-xs text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    {t("founderNote")}
                </p>
            </div>
        </section>
    );
}