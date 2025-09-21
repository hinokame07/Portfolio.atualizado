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
      title: 'Sistema de Automação Inteligente',
      description: 'Plataforma robusta de automação desenvolvida com JavaScript/Node.js para gestão de processos e integrações',
      tags: ['JavaScript', 'Node.js', 'API Integration', 'Automation'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: 'Sistema avançado de automação que evoluiu de funcionalidades básicas para uma plataforma completa de gestão de processos. Desenvolvido com Node.js e múltiplas integrações de API, automatiza fluxos de trabalho complexos e facilita a comunicação entre sistemas. Superei desafios significativos de arquitetura, escalabilidade e otimização de performance.'
    },
    {
      id: 2,
      title: 'Charles Leclerc Biography',
      description: 'Site biográfico dedicado ao piloto de Fórmula 1 Charles Leclerc',
      tags: ['HTML', 'CSS', 'JavaScript', 'Biography'],
      image: 'https://i.imgur.com/VmjscFk.png',
      link: 'https://charles-leclerc.vercel.app/',
      details: 'Site biográfico completo sobre Charles Leclerc, piloto monegasco da Ferrari na Fórmula 1. O projeto apresenta sua trajetória, conquistas e momentos marcantes na carreira, com design responsivo, interface moderna e otimizações de performance para uma experiência de usuário excepcional.'
    },
    {
      id: 3,
      title: 'Ayrton Senna Biography',
      description: 'Tributo ao lendário piloto brasileiro Ayrton Senna',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tribute'],
      image: 'https://i.imgur.com/H3MKsov.png',
      link: 'https://ayrton-senna-seven.vercel.app/',
      details: 'Site em homenagem a Ayrton Senna, o maior piloto brasileiro de todos os tempos. Apresenta sua história, conquistas na Fórmula 1 e seu legado que transcende o automobilismo. Desenvolvido com foco em storytelling digital e experiência imersiva, inspirando gerações através da tecnologia.'
    },
    {
      id: 4,
      title: 'ADO Biography',
      description: 'Site biográfico da cantora japonesa ADO',
      tags: ['HTML', 'CSS', 'JavaScript', 'Music'],
      image: 'https://i.imgur.com/T3pQMcg.png',
      link: 'https://ado-theta.vercel.app/',
      details: 'Site dedicado à cantora japonesa ADO, conhecida por suas músicas virais e colaborações com animes populares. O projeto explora sua carreira musical e impacto na cultura pop japonesa, com design inspirado na estética musical contemporânea e navegação intuitiva.'
    },
    {
      id: 5,
      title: 'Frieren Portfolio',
      description: 'Portfólio temático inspirado no anime Frieren',
      tags: ['React', 'CSS', 'Anime Theme', 'Portfolio'],
      image: 'https://i.imgur.com/x2vldO0.png',
      link: 'https://frieren-sandy.vercel.app/',
      details: 'Portfólio com design inspirado no anime "Frieren: Beyond Journey\'s End". Combina elementos visuais temáticos com funcionalidades modernas de portfólio, demonstrando habilidades em design criativo, React e criação de experiências únicas e imersivas.'
    },
    {
      id: 6,
      title: 'Professional Animated Portfolio',
      description: 'Portfólio com animações profissionais e design moderno',
      tags: ['React', 'Animations', 'Modern Design', 'Portfolio'],
      image: 'https://i.imgur.com/mQfZ2VV.png',
      link: 'https://aaaaaaaaaaaaaaaaaaaaaaa-lake.vercel.app/',
      details: 'Portfólio profissional com animações sofisticadas e design contemporâneo. Demonstra técnicas avançadas de animação web, micro-interações e transições fluidas, criando uma experiência visual impressionante que destaca competências técnicas em desenvolvimento frontend moderno.'
    },
    {
      id: 7,
      title: 'Gestão de Comunidades Digitais',
      description: 'Desenvolvimento e gestão de comunidades online com milhares de membros ativos',
      tags: ['Community Management', 'Digital Strategy', 'Leadership'],
      image: 'https://i.pinimg.com/736x/b6/58/a3/b658a3981724a7bd4d94f2cd061a04df.jpg',
      details: 'Desenvolvi e gerenciei comunidades digitais que alcançaram milhares de membros ativos. Esta experiência me proporcionou conhecimentos valiosos sobre liderança digital, estratégias de engajamento, moderação de conteúdo e criação de ambientes online saudáveis. Aprendi sobre psicologia de comunidades, gestão de conflitos e construção de relacionamentos digitais duradouros.'
    },
    {
      id: 8,
      title: 'Plataforma de Produtividade Educacional',
      description: 'Sistema avançado de organização e acompanhamento de estudos com metodologias otimizadas',
      tags: ['Productivity', 'Education Tech', 'System Design'],
      image: 'https://i.pinimg.com/736x/2c/08/68/2c0868a78119b73f9131248bd0fa84e3.jpg',
      details: 'Criei um sistema abrangente de gestão educacional com metodologias de aprendizado otimizadas, tracking de progresso avançado e recursos interativos. Esta plataforma revolucionou minha abordagem ao aprendizado, implementando técnicas de gamificação, análise de dados de performance e metodologias ágeis aplicadas à educação.'
    },
    {
      id: 9,
      title: 'Portfolio Profissional Avançado',
      description: 'Portfólio pessoal de alta performance desenvolvido com React, TypeScript e Tailwind CSS',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Performance'],
      image: 'https://i.pinimg.com/736x/a7/5d/4a/a75d4a7e372c0c253dcdaa77adf71f83.jpg',
      link: 'https://www.hinodev.xyz/',
      details: 'Meu portfólio profissional desenvolvido com tecnologias modernas: React, TypeScript e Tailwind CSS. Representa uma vitrine completa das minhas competências técnicas e criativas, com foco em performance, acessibilidade e experiência do usuário. Implementa práticas avançadas de SEO, otimização de imagens e design responsivo, demonstrando meu compromisso com excelência técnica e atenção aos detalhes.'
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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meus <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore uma seleção dos projetos que desenvolvi ao longo da minha jornada como desenvolvedor.
            Cada projeto representa não apenas uma solução técnica, mas também um marco no meu crescimento profissional e criativo.
          </p>
        </div>

        {/* Carousel com padding lateral para os botões */}
        <div className="relative overflow-visible px-16">

          {/* Botão Esquerda */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
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
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
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
                  className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-700"
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
                          className="text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors"
                        >
                          <Info size={18} />
                        </button>
                        <div className="flex space-x-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-white bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700"
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
            className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-gray-700"
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
              <h3 className="text-2xl font-bold text-white mb-2">{activeProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{activeProject.details}</p>
              <div className="flex space-x-4">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
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