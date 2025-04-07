import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "../components/Shared/Header/Header";

export const metadata: Metadata = {
  title: "Kevin Espitia - Desarrollador de software",
  description: "Portafolio de Kevin Espitia, especializado en React y Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="selection:bg-night selection:text-seasalt">
        <Header />
        {children}
      </body>
    </html>
  );
}
