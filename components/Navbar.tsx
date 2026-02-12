import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, ChevronDown, Menu } from 'lucide-react';

import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-border py-3'
        : 'bg-transparent border-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Container constrained to match the App's max-width logic but effectively handling full width of the fixed nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">

          {/* Left Navigation (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-start gap-8">
            <div className="group flex items-center gap-1 cursor-pointer text-sm font-medium text-text hover:text-accent transition-colors">
              Soluções
              <ChevronDown className="w-3 h-3 text-text-secondary group-hover:text-accent transition-transform group-hover:rotate-180" />
            </div>
            <a href="#" className="text-sm font-medium text-text hover:text-accent transition-colors">
              Processo
            </a>
            <Link to="/portfolio" className="group flex items-center gap-1 cursor-pointer text-sm font-medium text-text hover:text-accent transition-colors">
              Portfolio
            </Link>
          </div>

          {/* Logo (Center) */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/">
              <img className='w-40 hover:cursor-pointer hover:scale-105 transition-all duration-300' src="/logo-fehari-black.svg" alt="Fehari Studio Logo" />
            </Link>
          </div>

          {/* Right Navigation & CTA (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            <a href="#planos" className="text-sm font-medium text-text hover:text-accent transition-colors">
              Planos
            </a>
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-text transition-colors">
              Login
            </a>
            <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="gap-2 rounded-[80px] px-10 py-5">
                Comece Agora
                <ArrowRight className="w-3 h-3" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle (Visible only on mobile) */}
          {/* Mobile Menu Toggle (Visible only on mobile) */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-text hover:bg-background-secondary rounded-md z-50 relative"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-text hover:text-accent transition-colors"
              >
                Home
              </Link>
              <a
                href="#solucoes"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-text hover:text-accent transition-colors"
              >
                Soluções
              </a>
              <a
                href="#processo"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-text hover:text-accent transition-colors"
              >
                Processo
              </a>
              <Link
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-text hover:text-accent transition-colors"
              >
                Portfolio
              </Link>
              <a
                href="#planos"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-text hover:text-accent transition-colors"
              >
                Planos
              </a>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-text-secondary hover:text-text transition-colors"
              >
                Login
              </a>
              <a
                href="https://wa.me/5564999602571"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Comece Agora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;