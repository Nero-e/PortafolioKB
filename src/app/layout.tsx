import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "../styles/globals.css";
import { Header } from "../components/Shared/Header/Header";

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: "Kevin Espitia - Desarrollador de software",
  description: "Portafolio de Kevin Espitia, especializado en React y Next.js",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="selection:bg-night selection:text-seasalt">
        <Header />
        <main className="relative w-full h-full min-h-screen overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
