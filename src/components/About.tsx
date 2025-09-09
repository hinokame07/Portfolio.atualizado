import React from 'react';
import { Calendar, MapPin, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre <span className="text-blue-600 dark:text-blue-400">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quem sou eu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Oi! Eu sou um jovem desenvolvedor de 13 anos, nascido em 19/07/2011. Minha paixão por programação começou cedo, aos 10 anos, quando me deparei com os bots do Discord. Desde então, venho me aventurando por diferentes tecnologias e criando projetos que me deixam animado.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Apesar de ser mais quieto e gostar de observar, encontrei na programação uma maneira de me expressar e de conhecer pessoas incríveis. Acredito que, mesmo sendo introvertido, posso contribuir e deixar minha marca no mundo da tecnologia.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 hover:scale-110 transition-transform duration-300">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Idade</h4>
                  <p className="text-gray-900 dark:text-white font-medium">14 anos (19/07/2011)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Localização</h4>
                  <p className="text-gray-900 dark:text-white font-medium">São Paulo, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 hover:scale-110 transition-transform duration-300">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Experiência</h4>
                  <p className="text-gray-900 dark:text-white font-medium">3 anos programando</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Minha História
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Descoberta da Programação</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Tudo começou quando eu tinha 10 anos e descobri que era possível criar bots para o Discord usando Python e JavaScript. Fiquei fascinado com o que dava pra fazer e fui atrás de aprender cada vez mais.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Crescimento no Discord</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Criei um servidor no Discord que chegou a 5 mil membros! Foi uma experiência incrível, onde aprendi muito sobre comunidades online e como gerenciar projetos digitais.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Criação do Bot Akishiro</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Desenvolvi o Akishiro, um bot que começou simples, só com sistema de tickets, mas foi crescendo e ganhando novas funções, como parcerias. Passei por alguns perrengues com hospedagem, mas contei com a ajuda de amigos e doações para superar.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Aprendizado Contínuo</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Sempre busco aprender mais: já fiz cursos de desenvolvimento web, montei planos de estudo no Notion e sigo me dedicando para criar projetos cada vez melhores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
