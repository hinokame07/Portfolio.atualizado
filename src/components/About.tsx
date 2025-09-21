import React from 'react';
import { Calendar, MapPin, Code, Target, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Target className="mr-2 text-blue-400" size={20} />
                Quem sou eu
              </h3>
              <p className="text-gray-300 mb-4">
                Olá! Sou um desenvolvedor Full-Stack apaixonado por tecnologia, com 14 anos e nascido em 19/07/2011. Minha jornada na programação começou aos 10 anos, quando descobri o fascinante mundo do desenvolvimento através da criação de bots. Desde então, venho explorando diferentes tecnologias e construindo soluções que fazem a diferença.
              </p>
              <p className="text-gray-300">
                Embora seja mais reservado por natureza, encontrei na programação uma forma poderosa de me expressar e conectar com uma comunidade incrível de desenvolvedores. Acredito firmemente que a tecnologia pode transformar vidas e estou determinado a contribuir para essa transformação digital.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 mr-4 hover:scale-110 transition-transform duration-300 border border-blue-700">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Idade</h4>
                  <p className="text-white font-medium">14 anos (19/07/2011)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center text-purple-400 mr-4 hover:scale-110 transition-transform duration-300 border border-purple-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Localização</h4>
                  <p className="text-white font-medium">São Paulo, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 mr-4 hover:scale-110 transition-transform duration-300 border border-blue-700">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Experiência</h4>
                  <p className="text-white font-medium">4+ anos programando</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Rocket className="mr-2 text-blue-400" size={20} />
                Minha História
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-white">Descoberta da Programação</h4>
                  <p className="text-gray-300 mt-1">
                    Aos 10 anos, descobri o fascinante mundo da programação através da criação de bots automatizados. O que começou como curiosidade rapidamente se transformou em paixão, levando-me a explorar Python, JavaScript e outras tecnologias.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-purple-500">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-white">Construção de Comunidades</h4>
                  <p className="text-gray-300 mt-1">
                    Desenvolvi e gerenciei comunidades digitais que alcançaram milhares de membros ativos. Esta experiência me ensinou valiosas lições sobre liderança, gestão de projetos e engajamento de usuários.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-white">Desenvolvimento de Soluções</h4>
                  <p className="text-gray-300 mt-1">
                    Criei sistemas automatizados complexos que evoluíram de funcionalidades básicas para plataformas robustas. Enfrentei desafios técnicos significativos, aprendendo sobre arquitetura de sistemas, escalabilidade e resolução de problemas.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-medium text-white">Evolução Profissional</h4>
                  <p className="text-gray-300 mt-1">
                    Mantenho um compromisso constante com o aprendizado: cursos especializados, projetos pessoais desafiadores e metodologias organizadas de estudo. Cada projeto é uma oportunidade de crescimento e inovação.
                  </p>
                </div>
              </div>
            </div>
            
            {/* New section: Values and Vision */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-600 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Lightbulb className="mr-2 text-blue-400" size={20} />
                Valores e Visão
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">🎯 Missão</h4>
                  <p className="text-gray-300">
                    Criar soluções tecnológicas que simplifiquem a vida das pessoas e impulsionem o crescimento de negócios através de código limpo, eficiente e inovador.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">🚀 Visão</h4>
                  <p className="text-gray-300">
                    Ser reconhecido como um desenvolvedor que transforma ideias complexas em realidades digitais acessíveis, sempre priorizando a experiência do usuário e a qualidade técnica.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">💎 Valores</h4>
                  <p className="text-gray-300">
                    Excelência técnica, aprendizado contínuo, colaboração, inovação responsável e compromisso com resultados que geram impacto positivo.
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
