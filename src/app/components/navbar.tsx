'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 border-b border-gray-700">
      {/* Container flexível */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Topo: logo + botão hamburguer */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-200">DevSeed</div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-green-200 transition">Home</Link>
            <Link href="/sobre" className="hover:text-green-200 transition">Sobre</Link>
            <Link href="#contato" className="hover:text-green-200 transition">Contato</Link>
          </nav>
          <Link
            href="https://www.instagram.com/devseed.ufc/"
            className="ml-6 border border-green-200 text-green-200 px-4 py-2 rounded-md font-semibold hover:bg-green-200 hover:text-black transition"
          >
            Instagram
          </Link>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block hover:text-green-200 transition">Home</Link>
            <Link href="/sobre" className="block hover:text-green-200 transition">Sobre</Link>
            <Link href="#contato" className="block hover:text-green-200 transition">Contato</Link>
            <Link
              href="https://www.instagram.com/devseed.ufc/"
              className="block border border-green-200 text-green-200 px-4 py-2 rounded-md font-semibold hover:bg-green-200 hover:text-black transition"
            >
              Instagram
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}