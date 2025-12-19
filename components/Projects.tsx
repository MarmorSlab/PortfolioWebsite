export default function Projects() {
    const projects = [
        {
            title: "Restaurant Website",
            description: "Beautiful website concept with online reservations and menu showcase.",
            metrics: ["Responsive design", "Modern UI"],
            tech: "React · TypeScript · Framer Motion",
            image: "bg-gradient-to-br from-blue-500 to-cyan-500"
        },
        {
            title: "Business Portfolio",
            description: "Clean, professional website design with contact forms and service pages.",
            metrics: ["SEO ready", "Performance focused"],
            tech: "Next.js · Tailwind · Vercel",
            image: "bg-gradient-to-br from-green-500 to-emerald-500"
        },
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-zinc-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">Example Projects</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Concept designs showcasing modern web solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}