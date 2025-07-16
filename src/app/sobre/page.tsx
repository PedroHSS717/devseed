

import React from "react";
import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-200 mb-6">
          Sobre o DevSeed
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Transformando o futuro através da educação em programação
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-200 mb-6">
          Nossa Missão
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          O DevSeed é um projeto de extensão universitária dedicado a democratizar o acesso ao conhecimento em programação para jovens de escolas públicas do Ceará. Acreditamos que a tecnologia é uma ferramenta poderosa de transformação social e que todos os jovens merecem ter a oportunidade de aprender e crescer neste campo.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Nosso objetivo é plantar as sementes do conhecimento tecnológico, cultivando uma nova geração de programadores e inovadores que possam contribuir para o desenvolvimento da nossa região e do país.
        </p>
      </section>

      {/* Importance Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-200 mb-6">
          A Importância da Programação na Educação
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-200 mb-4">
              Desenvolvimento do Pensamento Lógico
            </h3>
            <p className="text-gray-300">
              A programação ensina os estudantes a pensar de forma estruturada e lógica, desenvolvendo habilidades de resolução de problemas que são aplicáveis em todas as áreas da vida.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-200 mb-4">
              Preparação para o Futuro
            </h3>
            <p className="text-gray-300">
              Em um mundo cada vez mais digital, conhecimentos em programação se tornam essenciais para diversas profissões, não apenas na área de tecnologia.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-200 mb-4">
              Criatividade e Inovação
            </h3>
            <p className="text-gray-300">
              Programar é um ato criativo que permite aos estudantes materializar suas ideias, criando soluções inovadoras para problemas reais.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-200 mb-4">
              Inclusão Digital
            </h3>
            <p className="text-gray-300">
              Ensinar programação nas escolas públicas promove a inclusão digital e reduz a desigualdade de acesso ao conhecimento tecnológico.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-200 mb-6">
          Nosso Impacto
        </h2>
        
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">50+</div>
              <p className="text-gray-300">Estudantes Alcançados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">2</div>
              <p className="text-gray-300">Escolas Parceiras</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">1+</div>
              <p className="text-gray-300">Projetos Desenvolvidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-lime-green-200 mb-6">
          Nossa Metodologia
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-200 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Introdução Lúdica
              </h3>
              <p className="text-gray-300">
                Começamos com uma estrutura feita pelo Notion, com video-aulas, e algumas questões para que seja praticado o conteúdo em questão.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-200 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Projetos Práticos
              </h3>
              <p className="text-gray-300">
                Os estudantes desenvolvem projetos reais que resolvem problemas da sua comunidade, aplicando os conhecimentos adquiridos.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-200 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mentoria Contínua
              </h3>
              <p className="text-gray-300">
                Oferecemos acompanhamento personalizado e mentoria para que cada estudante possa desenvolver seu potencial máximo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-green-200 mb-6">
          Faça Parte Desta Transformação
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Junte-se a nós nesta missão de democratizar o ensino de programação e transformar vidas através da tecnologia.
        </p>
        <div className="space-x-4">
          <Link href="https://chat.whatsapp.com/LhOQHFML7tSLKEtYeE3nCt" className="bg-green-200 text-black px-8 py-3 rounded-md font-semibold hover:bg-lime-500 transition-colors duration-200">
            Seja voluntário! 
          </Link>
          <Link href="https://www.instagram.com/devseed.ufc/" className="border border-green-200 text-green-200 px-8 py-3 rounded-md font-semibold hover:bg-green-200 hover:text-black transition-colors duration-200">
            Acesse nosso Instagram
          </Link>
        </div>
      </section>
    </div>
  );
}
