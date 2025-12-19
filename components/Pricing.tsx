export default function Pricing() {
    const packages = [
        {
            name: "Starter",
            price: "$499",
            description: "Perfect for small businesses just getting started",
            features: [
                "Up to 5 pages",
                "Mobile responsive",
                "Contact form",
                "Basic SEO setup",
                "2 rounds of revisions",
                "2-week delivery"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$999",
            description: "Ideal for growing businesses",
            features: [
                "Up to 10 pages",
                "Advanced animations",
                "CMS integration",
                "Advanced SEO",
                "Analytics setup",
                "Unlimited revisions",
                "3-week delivery",
                "1 month support"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For complex projects and large businesses",
            features: [
                "All features of Professional",
                "Unlimited pages",
                "Custom features",
                "Priority support",
                "Performance optimization",
                "Ongoing maintenance",
                "Flexible timeline"
            ],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Choose the package that fits your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-xl ${
                                pkg.popular
                                    ? "border-blue-600 dark:border-blue-500 shadow-lg scale-105"
                                    : "border-slate-200 dark:border-zinc-700"
                            } bg-white dark:bg-zinc-800`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{pkg.name}</h3>
                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {pkg.price}
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    {pkg.description}
                                </p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2 text-sm">
                                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                                    pkg.popular
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-slate-100 dark:bg-zinc-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-zinc-600"
                                }`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
                
                <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-8">
                    All packages include free consultation and project scoping. Custom quotes available for unique requirements.
                </p>
            </div>
        </section>
    );
}
