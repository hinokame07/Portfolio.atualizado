import React, { useState, useEffect } from "react";
import { Code, Mail, ArrowDown, Briefcase, Award } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Desenvolvedor Full-Stack & Especialista em Inovação Digital";
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
    setTypingComplete(true);
  }, [displayText]);

  return (
    <section
      id="home"
      className="hero-section min-h-screen h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/20 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 hero-bg-element">
          <div className="text-4xl md:text-7xl font-mono text-blue-400 animate-pulse">
            {"</>"}
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 hero-bg-element">
          <div className="text-4xl md:text-7xl font-mono text-purple-400 animate-pulse">
            {"{"}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5 hero-bg-element">
          <div className="text-6xl md:text-9xl font-mono text-cyan-400 animate-float">λ</div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5 hero-bg-element">
          <div className="text-4xl md:text-6xl font-mono text-blue-300 animate-pulse">
            {"{}"}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center text-center h-full py-20">
        {/* FOTO SEM MOLDURA */}
        <div className="hero-avatar w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 ring-4 ring-blue-500/30 hover:ring-purple-500/50 transition-all duration-300">
          <img
            src="https://i.pinimg.com/736x/23/96/60/239660887f6fec2f8ff9770716c08a39.jpg"
            alt="foto de perfil"
            className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
          Olá, sou{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Hino
          </span>
        </h1>

        <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 h-8 md:h-10">
          {displayText}
          {!typingComplete && (
            <span className="animate-pulse text-blue-400">|</span>
          )}
        </h2>

        <p
          className="hero-description text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mb-8 opacity-0 animate-fade-in-up leading-relaxed px-4"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          Desenvolvedor Full-Stack apaixonado por tecnologia com mais de 4 anos
          de experiência criando soluções digitais inovadoras. Especializado em
          desenvolvimento web moderno, automação inteligente, arquitetura de
          sistemas escaláveis e experiência do usuário. Transformo ideias
          complexas em código elegante, funcional e de alta performance, sempre
          focado em entregar valor real aos usuários.
        </p>

        {/* BOTÕES PRINCIPAIS */}
        <div
          className="hero-buttons flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 md:mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="hero-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group text-sm sm:text-base"
          >
            <Code
              size={18}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="hero-button px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group text-sm sm:text-base"
          >
            <Mail
              size={18}
              className="group-hover:bounce transition-transform duration-300"
            />
            Fale Comigo
          </a>
          <a
            href="#about"
            className="hero-button px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 flex items-center gap-2 group text-sm sm:text-base"
          >
            <Briefcase
              size={18}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            Sobre Mim
          </a>
          <a
            href="#skills"
            className="hero-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 group text-sm sm:text-base"
          >
            <Award
              size={18}
              className="group-hover:bounce transition-transform duration-300"
            />
            Habilidades
          </a>
        </div>

        {/* SKILLS */}
        <div
          className="hero-skills flex flex-wrap justify-center gap-2 sm:gap-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}
        >
          {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Next.js"].map(
            (skill, index) => (
              <span
                key={skill}
                className="hero-skill-tag px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs sm:text-sm hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${2.7 + index * 0.1}s` }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* SETA PARA BAIXO */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

