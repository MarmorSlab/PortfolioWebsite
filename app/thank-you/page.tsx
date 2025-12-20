export default function ThankYou() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Message Received!</h1>
            <p className="text-lg text-slate-600 dark:text-slate-600 max-w-md">
                Thanks for reaching out to Marmor Slab. I'll review your project details and get back to you within 24-48 hours.
            </p>
            <a href="/" className="mt-8 text-blue-500 hover:underline">
                ← Back to Home
            </a>
        </main>
    );
}