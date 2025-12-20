export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-slate-900 text-slate-300">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">MarmorSlab</h3>
                    <p className="text-sm">
                        Professional web development service for small businesses.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-semibold text-white mb-3">Quick Links</h4>
                    <div className="space-y-2 text-sm">
                        <a href="#about" className="block hover:text-blue-400 transition">About</a>
                        <a href="#services" className="block hover:text-blue-400 transition">Services</a>
                        <a href="#projects" className="block hover:text-blue-400 transition">Work</a>
                        <a href="#pricing" className="block hover:text-blue-400 transition">Pricing</a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-semibold text-white mb-3">Contact</h4>
                    <div className="space-y-2 text-sm">
                        <p>Email: info@marmorslab.dev</p>
                    </div>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-700 text-center text-sm">
                <p>© 2025 MarmorSlab. All rights reserved.</p>
            </div>
        </footer>
    );
}
