import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Agustin Marmor - Frontend Developer",
  description: "Frontend developer building clean, fast, and accessible websites for small businesses.",
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}