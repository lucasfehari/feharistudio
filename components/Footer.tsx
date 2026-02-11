import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary border-t border-border pt-16 pb-8">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-display font-bold text-2xl tracking-tight text-text block mb-6">
              FEHARI
            </span>
            <p className="text-text-secondary text-sm leading-relaxed">
              Design e tecnologia sob demanda. Construímos interfaces, marcas e experiências digitais para o futuro.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Design System</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Motion Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Fehari Studio. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-text">Privacidade</a>
            <a href="#" className="hover:text-text">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;