import type { Metadata } from "next";
import '../styles/globals.css'
import { Header } from "../components/Shared/Header/Header";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Proyecto Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  );
}