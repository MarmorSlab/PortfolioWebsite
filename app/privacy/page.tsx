export const metadata = { title: 'Privacy Policy | Agustin Marmor' }

export default function PrivacyPolicy() {
    return (
        <main className="max-w-4xl mx-auto py-24 px-6 text-zinc-300">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="mb-8 text-zinc-500 italic">Last Updated: December 20, 2025</p>

            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Information Collected by Agustin Marmor</h2>
            
                    <p>
                        This policy describes how <strong>Agustin Marmor</strong> (operating under the portfolio brand "MarmorSlab") 
                        collects and handles your data. We collect information that you provide directly to us through our contact forms, 
                        including your name, email address, and project details. Additionally, we automatically collect technical 
                        information through Vercel Speed Insights to monitor and improve the performance of our web infrastructure.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. How We Use Your Information</h2>
                    <p>The information we collect is used strictly to communicate with you regarding your inquiries and to maintain the technical integrity of the MarmorSlab platform. We do not use your data for marketing purposes without your explicit consent.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Data Retention & Security</h2>
                    <p>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations. We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Third-Party Services</h2>
                    <p>We utilize trusted third-party providers to host our infrastructure and manage communications, including Vercel and Resend. These providers have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Client Site Data</h2>
                    <p>For websites engineered for our clients, the Developer does not store or have access to the end-user data collected by those sites unless specifically requested for maintenance or support services.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-3">6. Changes to This Policy</h2>
                    <p>The Developer reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. Your continued use of our services after such changes constitutes your acknowledgment of the modified policy.</p>
                </div>
            </section>
        </main>
    );
}