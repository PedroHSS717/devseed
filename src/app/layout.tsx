import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "../app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevSeed",
  description: "Plantando o futuro da programação",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white scroll-smooth`}>
        <Navbar />

        <main className="min-h-[calc(100vh-72px)]">{children}</main>

        <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
          <p>© 2024 DevSeed. Todos os direitos reservados. Projeto de extensão UFC - Quixadá</p>
        </footer>
      </body>
    </html>
  );
}