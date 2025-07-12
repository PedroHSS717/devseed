
import Link from 'next/link';
import React from "react";
import Image from 'next/image';

export default function Home() {
  const teamMembers = [
    {
      name: "Pedro Sampaio",
      role: "Desenvolvedor",
      photo:
        "/img/pedro-sampaio.jpeg",
    },
    {
      name: "André Sousa",
      role: "Desenvolvedor",
      photo:
        "/img/andre-souza.jpeg",
    },
    {
      name: "Mayson Marques",
      role: "Desenvolvedor",
      photo:
        "/img/mayson-marques.jpeg",
    },
    {
      name: "Jeová Alisson",
      role: "Designer",
      photo:
        "/img/jeova-alisson.jpeg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section id="home" className="text-center mb-20">
        <h1 className="text-5xl font-bold text-green-200 mb-4">
          DevSeed
        </h1>
        <p className="text-xl max-w-xl mx-auto">
          Plantando o futuro da programação
        </p>
      </section>

      {/* Description and Buttons */}
      <section className="text-center mb-20">
        <p className="mb-6 max-w-3xl mx-auto">
          Projeto de extensão para ajudar jovens de escolas públicas do Ceará a terem acesso a conteúdo introdutório de programação.
        </p>
        <div className="space-x-6">
          <Link
            href="https://www.notion.so/Introdu-o-Fundamentos-de-Programa-o-1baec26405b580a18a80eb9828d5a51a?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-200 text-green-200 px-4 py-2 rounded-md font-semibold hover:bg-green-200 hover:text-black transition-colors duration-200"
          >
            Notion
          </Link>
          <Link
            href="https://example.com/platform2"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-200 text-green-200 px-4 py-2 rounded-md font-semibold hover:bg-green-200 hover:text-black transition-colors duration-200"
          >
            Discord
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-12">
          Responsáveis pelo Projeto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {teamMembers.map(({ name, role, photo }) => (
            <div
              key={name}
              className="flex flex-col items-center bg-gray-900 rounded-lg p-6"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-200">
                <Image
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-green-200 rounded-md w-full text-center py-2">
                <h3 className="font-bold text-black">{name}</h3>
                <p className="text-black">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
