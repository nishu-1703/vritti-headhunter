import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full resize-none rounded-[1.35rem] border border-[#c9d8d2] bg-white/75 px-4 py-3.5 text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all placeholder:text-slate-400 focus:border-[#5c8986] focus:outline-none focus:ring-4 focus:ring-[#e2ece8] ${className}`}
      {...props}
    />
  );
}
