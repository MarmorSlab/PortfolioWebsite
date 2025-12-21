export const metadata = { title: 'Terms of Service | Agustin Marmor' }

export default function TOS() {
    return (
        <main className="max-w-4xl mx-auto py-24 px-6 text-zinc-300">
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            <p className="mb-8 text-zinc-500 italic">Last Updated: December 20, 2025</p>

            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Scope of Engineering Services</h2>
                    <p>
                        MarmorSlab is a professional portfolio brand owned and operated by <strong>Agustin Marmor</strong> ("the Developer"). 
                        These terms govern the custom web design, front-end engineering, and deployment infrastructure 
                        services provided by the Developer. Each project is governed by a separate Statement of Work (SOW).
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. Client Responsibilities & Assets</h2>
                    <p>Clients are responsible for providing all necessary brand assets, text copy, and high-resolution imagery. MarmorSlab is not liable for project delays resulting from incomplete or late submission of these materials.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Hosting & Third-Party Platforms</h2>
                    <p>MarmorSlab utilizes industry-leading infrastructure providers (e.g., Vercel, Name.com). While we handle initial configuration, the client is responsible for maintaining their own accounts and associated third-party fees. MarmorSlab is not liable for downtime or data loss caused by these providers.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Intellectual Property & Code Ownership</h2>
                    <p>Full ownership of the custom frontend code and design assets is transferred to the client upon receipt of final payment. MarmorSlab retains the right to display the project in our professional portfolio and use non-proprietary engineering patterns developed during the build.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Acceptance & Bug-Fix Window</h2>
                    <p>Upon deployment to the production environment, the client has 14 calendar days to report any technical bugs or deviations from the original SOW. After this period, the project is considered "Accepted" and any further modifications will be billed at our standard hourly engineering rate.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">6. Limitation of Liability</h2>
                    <p>In no event shall the Developer (Agustin Marmor) be liable for any indirect, incidental, or consequential damages (including loss of business profits) arising from the use of the websites engineered under the MarmorSlab brand.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">7. Modifications to Terms</h2>
                    <p>MarmorSlab reserves the right to modify these Terms of Service at any time. Changes will become effective immediately upon being posted to this page. It is the client's responsibility to review these terms periodically to stay informed of updates.</p>
                </div>
            </section>
        </main>
    );
}
