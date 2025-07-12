import React, { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevSeed",
  description: "Plantando o futuro da programação",
};
const handleButtonClick = () => {
    window.location.href = 'https://www.instagram.com/devseed.ufc/';
  };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white scroll-smooth`}>
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <div className="text-2xl font-bold text-green-200">DevSeed</div>
          <nav className="space-x-6">
            <a
              href="/"
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/sobre"
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              Contato
            </a>
          </nav>
          <div className="space-x-4">
            
            <a href="https://www.instagram.com/devseed.ufc/" className="border border-green-200 text-green-200 px-4 py-2 rounded-md font-semibold hover:bg-green-200 hover:text-black transition-colors duration-200" >
              Instagram
            </a>
          </div>
        </header>

        <main className="min-h-[calc(100vh-72px)]">{children}</main>

        <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
          <p>© 2024 DevSeed. Todos os direitos reservados. Projeto de extensão UFC - Quixadá</p>
        </footer>
      </body>
    </html>
  );
}