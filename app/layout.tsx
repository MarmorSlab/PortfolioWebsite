import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "MarmorSlab | Modern Web Solutions",
  description: "Engineering high-performance digital foundations. Designed in the lab, built to be the slab.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}