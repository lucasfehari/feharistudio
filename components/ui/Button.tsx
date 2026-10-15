import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variants?: any;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}) => {
  const baseStyles = "group inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none rounded-full";

  const variants = {
    primary: "bg-accent text-white shadow-[0_12px_50px_rgba(255,61,20,0.25)] hover:bg-[#ff5a2b] hover:shadow-[0_16px_60px_rgba(255,61,20,0.38)] hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-white text-[#111] shadow-[0_12px_40px_rgba(255,255,255,.08)] hover:bg-[#f1f0ec] hover:-translate-y-0.5",
    outline: "bg-white/[0.07] text-white hover:bg-accent"
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-sm",
    lg: "h-14 px-8 text-base"
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};

export default Button;
