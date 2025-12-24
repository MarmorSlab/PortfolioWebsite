import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("projects");
    const projects = [
        {
            title: t("project1.title"),
            description: t("project1.description"),
            metrics: t.raw("project1.metrics") as string[],
            tech: t("project1.tech"),
            image: "bg-gradient-to-br from-blue-500 to-cyan-500"
        },
        {
            title: t("project2.title"),
            description: t("project2.description"),
            metrics: t.raw("project2.metrics") as string[],
            tech: t("project2.tech"),
            image: "bg-gradient-to-br from-green-500 to-emerald-500"
        },
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-zinc-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">{t("title")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {t("subtitle")}
                    </p>
                </div>

                <ul role="list" className="grid md:grid-cols-2 gap-8">


                    {projects.map((project) => (
                        <li
                            key={project.title}
                            role="listitem"
                            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-200 dark:border-zinc-700"
                        >
                            <div className={`h-48 ${project.image}`}></div>
                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="text-slate-700 dark:text-slate-200 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.metrics.map((metric) => (
                                        <span
                                            key={metric}
                                            className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                                    {project.tech}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}