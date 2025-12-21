import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#09090b" }, 
    ],
    width: "device-width",
    initialScale: 1,
};


export const metadata: Metadata = {
    title: {
        default: "MarmorSlab | Professional Web Engineering",
        template: "%s | MarmorSlab",
    },
    description:
        "Engineering high-performance digital foundations. Designed in the lab, built to be the slab by Agustin Marmor.",
    metadataBase: new URL("https://marmorslab.dev"), 
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "MarmorSlab | Professional Web Engineering",
        description: "Modern web solutions engineered for performance and reliability.",
        url: "https://marmorslab.dev",
        siteName: "MarmorSlab",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MarmorSlab | Professional Web Engineering",
        description: "Engineering high-performance digital foundations.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body
                className={cn(
                    inter.className,
                    "antialiased bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 min-h-screen flex flex-col"
                )}
            >
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}