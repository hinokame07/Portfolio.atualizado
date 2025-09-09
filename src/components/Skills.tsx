import React from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills: React.FC = () => {
  const programmingSkills: Skill[] = [
    { name: 'JavaScript', level: 75, icon: '⚡' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'HTML & CSS', level: 80, icon: '🎨' },
    { name: 'Node.js', level: 65, icon: '🟢' },
    { name: 'Discord.js', level: 85, icon: '🤖' }
  ];

  const softSkills: Skill[] = [
    { name: 'Resolução de Problemas', level: 80, icon: '🧩' },
    { name: 'Autodidatismo', level: 90, icon: '📚' },
    { name: 'Organização', level: 75, icon: '📋' },
    { name: 'Criatividade', level: 85, icon: '💡' }
  ];

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="mr-2 text-xl">{skill.icon}</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            animation: 'progressAnimation 1.5s ease-out forwards'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Minhas <span className="text-blue-600 dark:text-blue-400">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As habilidades que desenvolvi ao longo da minha jornada de aprendizado.
            Estou sempre buscando aprimorar e expandir meus conhecimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-2xl mr-2">💻</span> Habilidades Técnicas
            </h3>
            {programmingSkills.map(renderSkillBar)}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-2xl mr-2">🧠</span> Habilidades Pessoais
            </h3>
            {softSkills.map(renderSkillBar)}
          </div>
        </div>

        {/* Seção de ferramentas */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-2xl mr-2">🚀</span> Ferramentas & Tecnologias
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Visual Studio Code', icon: '📝' },
              { name: 'Git & GitHub', icon: '🔄' },
              { name: 'Discord API', icon: '💬' },
              { name: 'Notion', icon: '📒' },
              { name: 'Vercel', icon: '▲' },
              { name: 'Replit', icon: '⚙️' }
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-center group"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
