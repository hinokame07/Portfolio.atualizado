import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-blue-500/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500">
            HIno<span className="text-cyan-400">.dev</span>
          </span>
        </a>
        
        {/* Professional tagline */}
        <span className="hidden md:inline text-gray-400 ml-6 italic text-sm">
          Transformando ideias em código • Criando o futuro digital
        </span>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#home" className="nav-link">Início</a>
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#projects" className="nav-link">Projetos</a>
            <a href="#skills" className="nav-link">Habilidades</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/hinokame07"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver GitHub"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <a
            href="https://github.com/hinokame07"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver GitHub"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-blue-400 transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col py-4">
          <a href="#home" className="mobile-nav-link" onClick={toggleMenu}>Início</a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>Sobre</a>
          <a href="#projects" className="mobile-nav-link" onClick={toggleMenu}>Projetos</a>
          <a href="#skills" className="mobile-nav-link" onClick={toggleMenu}>Habilidades</a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;