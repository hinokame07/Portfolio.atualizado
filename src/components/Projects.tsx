import React, { useState, useRef } from 'react';
import { ExternalLink, Github as GitHub, Info } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  details: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Bot Akishiro',
      description: 'Bot para Discord desenvolvido com JavaScript/Node.js que gerencia tickets e parcerias',
      tags: ['JavaScript', 'Node.js', 'Discord.js'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'O Akishiro começou como um simples bot de tickets e evoluiu para um sistema completo de gerenciamento de parcerias no Discord. Desenvolvido com Node.js e Discord.js, ele automatiza processos e facilita a comunicação entre usuários. Entre os desafios superados estava a hospedagem, que foi viabilizada através de doações e ajuda de amigos.'
    },
    {
      id: 2,
      title: 'Servidor Discord',
      description: 'Comunidade no Discord que chegou a ter 5 mil membros ativos',
      tags: ['Comunidade', 'Gestão', 'Discord'],
      image: 'https://i.pinimg.com/736x/b6/58/a3/b658a3981724a7bd4d94f2cd061a04df.jpg',
      details: 'Criei e administrei um servidor no Discord que atingiu a marca de 5 mil membros. Essa experiência me ensinou muito sobre gestão de comunidades online, moderação e como criar um ambiente digital acolhedor. Apesar do servidor ter encerrado suas atividades, o aprendizado sobre engajamento e construção de comunidade permanece comigo.'
    },
    {
      id: 3,
      title: 'Sistema de Estudo',
      description: 'Plataforma de organização de estudos desenvolvida no Notion',
      tags: ['Notion', 'Produtividade', 'Educação'],
      image: 'https://i.pinimg.com/736x/2c/08/68/2c0868a78119b73f9131248bd0fa84e3.jpg',
      details: 'Desenvolvi um sistema completo de organização de estudos no Notion, com planos estruturados, acompanhamento de progresso e recursos educacionais. Esta ferramenta me ajudou a sistematizar meu aprendizado em programação e outras áreas, permitindo um progresso mais eficiente e consistente.'
    },
    {
      id: 4,
      title: 'Portfolio Pessoal',
      description: 'Meu portfólio pessoal desenvolvido com React e Tailwind CSS',
      tags: ['React', 'Tailwind CSS', 'Portfolio'],
      image: 'https://i.pinimg.com/736x/a7/5d/4a/a75d4a7e372c0c253dcdaa77adf71f83.jpg',
      link: 'https://www.hinodev.xyz/',
      github: 'https://github.com/hinokame07/Portfolio.atualizado',
      details: 'Este é o meu portfólio pessoal, desenvolvido com React e Tailwind CSS. Ele serve como uma vitrine para meus projetos e habilidades, além de ser uma demonstração do meu estilo de design e desenvolvimento. O portfólio é responsivo e otimizado para diferentes dispositivos, refletindo minha atenção aos detalhes e compromisso com a qualidade.'
    },
  ];

  const openProjectDetails = (project: Project) => setActiveProject(project);
  const closeProjectDetails = () => setActiveProject(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meus <span className="text-blue-600 dark:text-blue-400">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi durante minha jornada como programador.
            Cada um representa um passo importante no meu aprendizado.
          </p>
        </div>

        {/* Carousel com padding lateral para os botões */}
        <div className="relative overflow-visible px-10">

          {/* Botão Esquerda */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow transition-colors"
            aria-label="Anterior"
          >
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Botão Direita */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow transition-colors"
            aria-label="Próximo"
          >
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination]}
            direction="horizontal"
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  onClick={() => openProjectDetails(project)}
                  className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-between items-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openProjectDetails(project);
                          }}
                          className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                        >
                          <Info size={18} />
                        </button>
                        <div className="flex space-x-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-white bg-gray-800 hover:bg-black p-2 rounded-full transition-colors"
                            >
                              <GitHub size={18} />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={closeProjectDetails}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{activeProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{activeProject.details}</p>
              <div className="flex space-x-4">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <GitHub size={18} />
                    GitHub
                  </a>
                )}
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Visitar Projeto
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Ícone de fechar (X)
const X = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default Projects;
