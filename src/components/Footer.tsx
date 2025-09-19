import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Hino</h3>
            <p className="text-gray-300 mb-4">
              Desenvolvedor Full-Stack especializado em criar soluções digitais inovadoras que transformam ideias em realidade. 
              Comprometido com excelência técnica e impacto positivo através da tecnologia.
            </p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">Full-Stack</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">React</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">Node.js</span>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Habilidades</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Especialidades</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Desenvolvimento Web Full-Stack
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Arquitetura de Sistemas
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Automação e Integração
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                UI/UX Design
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Gestão de Projetos
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Hino. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Feito com</span>
              <Heart size={14} className="text-red-500" />
              <span className="text-gray-500 text-sm">e tecnologias modernas</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Desenvolvedor Full-Stack • São Paulo, Brasil • trabalhohino@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
            &copy; {currentYear} Hino. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Feito com <Heart size={14} className="mx-1 text-red-500" /> e React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;