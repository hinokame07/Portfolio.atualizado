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
      className="hero-section min-h-screen h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/20 overflow-hidden snap-start"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-5">
          <div className="text-7xl font-mono text-purple-400 animate-pulse">
            {"</>"}
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-5">
          <div className="text-7xl font-mono text-purple-400 animate-pulse">
            {"{"}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-3">
          <div className="text-9xl font-mono text-cyan-400 animate-float">λ</div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-3">
          <div className="text-6xl font-mono text-pink-400 animate-pulse">
            {"{}"}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center text-center">
        {/* FOTO SEM MOLDURA */}
        <div className="w-36 h-36 rounded-full overflow-hidden mb-6">
          <img
            src="https://i.pinimg.com/1200x/71/1e/a0/711ea0830f36b4c146977dd42f1c4b39.jpg"
            alt="foto de perfil"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Olá, sou{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Hino
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
          {displayText}
          {!typingComplete && (
            <span className="animate-pulse text-purple-400">|</span>
          )}
        </h2>

        <p
          className="text-lg text-gray-400 max-w-3xl mb-8 opacity-0 animate-fade-in-up leading-relaxed"
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
          className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 group"
          >
            <Code
              size={18}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-gray-800 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 group"
          >
            <Mail
              size={18}
              className="group-hover:bounce transition-transform duration-300"
            />
            Fale Comigo
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 flex items-center gap-2 group"
          >
            <Briefcase
              size={18}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            Sobre Mim
          </a>
          <a
            href="#skills"
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 group"
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
          className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}
        >
          {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Next.js"].map(
            (skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${2.7 + index * 0.1}s` }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* SETA PARA BAIXO */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Role para ver mais">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
