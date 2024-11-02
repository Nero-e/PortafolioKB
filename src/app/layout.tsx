import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "../components/Shared/Header/Header";

export const metadata: Metadata = {
  title: "Kevin Espitia - Desarrollador de software",
  description: "Portafolio by Kevin Espitia",
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
