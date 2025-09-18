import React, { useState, useEffect } from 'react';
import { Github, Code, MessageCircle, ArrowDown } from 'lucide-react';
import { fetchDiscordUser, DISCORD_USER_ID } from '../utils/discord';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [discordAvatar, setDiscordAvatar] = useState<string>('');
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(true);
  
  const fullText = 'Desenvolvedor & Entusiasta de Tecnologia';
  const [typingComplete, setTypingComplete] = useState(false);

  const fetchDiscordAvatar = async () => {
    try {
      setIsLoadingAvatar(true);
      const avatarUrl = await fetchDiscordUser(DISCORD_USER_ID);
      setDiscordAvatar(avatarUrl);
    } catch (error) {
      console.error('Erro ao buscar avatar do Discord:', error);
      setDiscordAvatar('https://i.pinimg.com/736x/d0/f7/b2/d0f7b2b45252f4273568b50b4344e7d0.jpg');
    } finally {
      setIsLoadingAvatar(false);
    }
  };

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

  useEffect(() => {
    fetchDiscordAvatar();
    // Atualizar avatar a cada 10 minutos
    const interval = setInterval(fetchDiscordAvatar, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative group">
            {isLoadingAvatar && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full flex items-center justify-center">
                <div className="text-gray-400 dark:text-gray-500">
                  <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </div>
            )}
            <img 
              src={discordAvatar || 'https://i.pinimg.com/736x/d0/f7/b2/d0f7b2b45252f4273568b50b4344e7d0.jpg'} 
              alt="Hino Avatar"
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isLoadingAvatar ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsLoadingAvatar(false)}
              onError={() => {
                setDiscordAvatar('https://i.pinimg.com/736x/d0/f7/b2/d0f7b2b45252f4273568b50b4344e7d0.jpg');
                setIsLoadingAvatar(false);
              }}
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">Hino</span>
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
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <Code size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              Meus Projetos
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <MessageCircle size={18} className="group-hover:bounce transition-transform duration-300" />
              Fale Comigo
            </a>
            <a 
              href="https://github.com/hinokame07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
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