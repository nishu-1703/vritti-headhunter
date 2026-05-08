import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'default', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const type = props.type ?? 'button';
  const baseStyles = 'motion-button inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8bb0ac] focus:ring-offset-2 focus:ring-offset-[#f6f8f5] disabled:cursor-not-allowed disabled:opacity-60';
  
  const variants = {
    default: 'bg-[linear-gradient(135deg,#5c8986_0%,#6f94ad_44%,#b88973_72%,#d1bc92_100%)] text-white shadow-[0_16px_48px_rgba(92,137,134,0.24)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(92,137,134,0.26)]',
    ghost: 'border border-white/60 bg-white/55 text-slate-700 hover:bg-white/80',
    outline: 'border border-[#c8d7d1] bg-white/45 text-slate-800 hover:border-[#8bb0ac] hover:bg-white/85'
  };

  const sizes = {
    sm: 'rounded-full px-4 py-2 text-sm',
    md: 'rounded-full px-6 py-3 text-base',
    lg: 'rounded-full px-8 py-4 text-lg'
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
