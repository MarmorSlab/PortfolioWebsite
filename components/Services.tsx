export default function Services() {
    const services = [
        {
            icon: "🎨",
            title: "Custom Design",
            description: "Clear, modern layouts focused on usability and your brand identity.",
            features: ["Mobile-first design", "Brand integration", "User experience focus"]
        },
        {
            icon: "⚡",
            title: "Development",
            description: "Fast, accessible, SEO-optimized websites built with modern technology.",
            features: ["Lightning-fast loading", "SEO optimized", "Fully responsive"]
        },
        {
            icon: "🚀",
            title: "Launch & Support",
            description: "Smooth deployment with ongoing maintenance and updates included.",
            features: ["Free hosting setup", "SSL certificate", "30-day support"]
        },
    ];

    return (
        <section id="services" className="py-24 px-6 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">What You Get</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Everything you need to establish a professional online presence
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="p-8 bg-slate-50 dark:bg-zinc-800 rounded-2xl border-2 border-slate-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                            <p className="text-slate-700 dark:text-slate-200 mb-4">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                                        <span className="text-blue-600 dark:text-blue-400">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}