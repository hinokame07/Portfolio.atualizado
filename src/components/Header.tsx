import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  // Fecha menu ao clicar fora ou pressionar ESC
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.contains(e.target as Node)) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-purple-500/10 py-2'
          : 'bg-gray-900/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-2xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Hino<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">.dev</span>
          </span>
        </a>
        
        {/* Professional tagline */}
        <span className="hidden lg:inline text-gray-300 ml-6 italic text-sm">
          Desenvolvedor Full-Stack • Especialista em Soluções Digitais • Inovação Tecnológica
        </span>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#home" className="nav-link">Início</a>
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#projects" className="nav-link">Projetos</a>
            <a href="#skills" className="nav-link">Habilidades</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        tabIndex={-1}
        aria-modal={isMenuOpen}
        role="dialog"
      >
        <nav className="flex flex-col py-4">
          <a href="#home" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Início</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Projetos</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
