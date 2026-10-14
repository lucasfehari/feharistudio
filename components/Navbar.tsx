import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';

const navItems = [
  { label: 'Para quem', href: '/#para-quem' },
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Cases', href: '/#cases' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Como funciona', href: '/#processo' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto flex max-w-[1380px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-5 ${
            scrolled
              ? 'border-white/10 bg-[#080808]/80 shadow-[0_16px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
              : 'border-white/[0.08] bg-black/30 backdrop-blur-lg'
          }`}
        >
          <Link to="/" className="flex items-center gap-3" aria-label="Fehari Studio — início">
            <img src="/fehari.svg" alt="Fehari Studio" className="h-7 w-auto" />
            <span className="hidden text-sm font-semibold tracking-[-0.02em] text-white sm:block">Fehari Studio</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-[13px] font-medium text-white/60 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
            {location.pathname !== '/' && (
              <Link to="/portfolio" className="text-[13px] font-medium text-white/60 transition-colors hover:text-white">
                Portfólio
              </Link>
            )}
          </div>

          <div className="hidden md:block">
            <Button
              href="https://wa.me/5564999602571?text=Oi%2C%20quero%20entender%20como%20a%20Fehari%20pode%20ajudar%20meu%20time."
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="gap-2"
            >
              Falar com a Fehari <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#070707] px-6 pb-8 pt-28 md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-5 text-3xl font-medium tracking-[-0.04em] text-white"
                >
                  <span><span className="mr-4 text-xs text-accent">0{index + 1}</span>{item.label}</span>
                  <ArrowUpRight className="h-5 w-5 text-white/30" />
                </a>
              ))}
            </div>
            <Button
              href="https://wa.me/5564999602571?text=Oi%2C%20quero%20entender%20como%20a%20Fehari%20pode%20ajudar%20meu%20time."
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full gap-2"
            >
              Começar uma conversa <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
