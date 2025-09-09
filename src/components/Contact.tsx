import React from 'react';
import { Mail, MessageCircle, Github as GitHub } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos <span className="text-blue-600 dark:text-blue-400">conversar?</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tem uma ideia legal, quer tirar dúvidas ou só bater um papo sobre programação?
            Fique à vontade para me chamar por qualquer um dos meios abaixo!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Como me encontrar</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">trabalhohino@gmail.com</p>
                    <a href="mailto:trabalhohino@gmail.com" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-1 inline-block">
                      Me envie um email
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Discord</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">hino07</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                      Me adiciona lá para conversarmos quando quiser!
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <GitHub size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">hinokame07</p>
                    <a href="https://github.com/hinokame07" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-1 inline-block">
                      Veja meus projetos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Ou me mande uma mensagem</h3>
              
              <form
                className="space-y-4"
                action="https://formsubmit.co/trabalhohino@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Seu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sua mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="O que você gostaria de conversar?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
