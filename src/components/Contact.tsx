import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Tem um projeto em mente? Quer discutir uma oportunidade de colaboração ou simplesmente trocar ideias sobre tecnologia e inovação?
            Estou sempre aberto para novas conexões e desafios interessantes. Vamos construir algo incrível juntos!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-900/50 p-3 rounded-full text-purple-400 mr-4 border border-purple-700">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email Profissional</h4>
                    <p className="text-gray-300 mt-1">trabalhohino@gmail.com</p>
                    <a href="mailto:trabalhohino@gmail.com" className="text-purple-400 text-sm hover:underline mt-1 inline-block">
                      Enviar email agora
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-900/50 p-3 rounded-full text-purple-400 mr-4 border border-purple-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Localização</h4>
                    <p className="text-gray-300 mt-1">São Paulo, Brasil</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Disponível para projetos remotos e presenciais
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-900/50 p-3 rounded-full text-purple-400 mr-4 border border-purple-700">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Disponibilidade</h4>
                    <p className="text-gray-300 mt-1">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Resposta garantida em até 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              
              <form
                className="space-y-4"
                action="https://formsubmit.co/trabalhohino@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-700 text-white"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Seu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-700 text-white"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Sua mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-700 text-white"
                    placeholder="O que você gostaria de conversar?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
