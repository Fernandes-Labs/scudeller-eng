import type { Metadata } from "next";
import {Syne} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scudeller Engenharia",
  description: "Transformamos Desafios em Soluções Inovadoras e Sustentáveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.className}`}>
        <Header/>
        <body>
            <div className="flex flex-col px-8 py-4">
                {children}
            </div>
        </body>
        <Footer />
    </html>
  );
}
