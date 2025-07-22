import React, { useState, useEffect } from 'react';
import { Github, Code, MessageCircle, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  
  const fullText = 'Desenvolvedor & Entusiasta de Tecnologia';
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [displayText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-5 dark:opacity-10">
          <div className="text-7xl font-mono text-gray-800 dark:text-gray-200">
            &lt;/&gt;
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-5 dark:opacity-10">
          <div className="text-7xl font-mono text-gray-800 dark:text-gray-200">
            {'{'}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img 
              src="icon11.png"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hinokame</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 h-8">
            {displayText}
            {!typingComplete && <span className="animate-pulse">|</span>}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-10 opacity-0 animate-fade-in-up" style={{
            animationDelay: '1.5s',
            animationFillMode: 'forwards'
          }}>
            Programador desde os 10 anos, apaixonado por criar bots, sites e soluções criativas.
            Transformando ideias em código, um projeto de cada vez.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{
            animationDelay: '2s',
            animationFillMode: 'forwards'
          }}>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors flex items-center gap-2"
            >
              <Code size={18} />
              Meus Projetos
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Fale Comigo
            </a>
            <a 
              href="https://github.com/hinokame07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-full transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;