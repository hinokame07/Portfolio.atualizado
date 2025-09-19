import React, { useState, useEffect } from 'react';
import { Github, Code, Mail, ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  
  const fullText = 'Desenvolvedor Full-Stack & Arquiteto de Soluções';
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [displayText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10">
          <div className="text-7xl font-mono text-blue-400 animate-pulse">
            {'</>'}
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className="text-7xl font-mono text-purple-400 animate-pulse">
            {'{'}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <div className="text-9xl font-mono text-cyan-400 animate-float">
            λ
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Professional avatar placeholder */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative group bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">H</span>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Olá, sou <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">HIno</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            {displayText}
            {!typingComplete && <span className="animate-pulse text-blue-400">|</span>}
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mb-10 opacity-0 animate-fade-in-up leading-relaxed" style={{
            animationDelay: '1.5s',
            animationFillMode: 'forwards'
          }}>
            Desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência criando soluções inovadoras. 
            Especializado em desenvolvimento web moderno, automação e arquitetura de sistemas escaláveis. 
            Transformo ideias complexas em código elegante e funcional.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{
            animationDelay: '2s',
            animationFillMode: 'forwards'
          }}>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
            >
              <Code size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              Ver Projetos
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gray-800 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
            >
              <Mail size={18} className="group-hover:bounce transition-transform duration-300" />
              Fale Comigo
            </a>
            <a 
              href="https://github.com/hinokame07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 flex items-center gap-2 group"
            >
              <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              GitHub
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:bounce transition-transform duration-300" />
              Currículo
            </a>
          </div>

          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-0 animate-fade-in-up" style={{
            animationDelay: '2.5s',
            animationFillMode: 'forwards'
          }}>
            {['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript'].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${2.7 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;