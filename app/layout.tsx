import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "MarmorSlab - Professional Web Development for Small Businesses",
  description: "MarmorSlab offers expert web development services tailored for small businesses. We create stunning, responsive websites that drive growth and enhance your online presence.",
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