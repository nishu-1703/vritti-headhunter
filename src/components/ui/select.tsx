import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  children: React.ReactNode;
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface SelectValueProps {
  placeholder?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

const SelectContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}>({ value: '', onValueChange: () => {}, isOpen: false, onOpenChange: () => {} });

export function Select({ children }: SelectProps) {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange: setValue, isOpen, onOpenChange: setIsOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ className = '', children, ...props }: SelectTriggerProps) {
  const { isOpen, onOpenChange } = React.useContext(SelectContext);

  return (
    <button
      type="button"
      onClick={() => onOpenChange(!isOpen)}
      className={`flex w-full items-center justify-between rounded-[1.35rem] border border-[#c9d8d2] bg-white/75 px-4 py-3.5 text-left text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all focus:border-[#5c8986] focus:outline-none focus:ring-4 focus:ring-[#e2ece8] ${className}`}
      {...props}
    >
      {children}
      <ChevronDown size={16} className={`opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}

export function SelectValue({ placeholder = 'Select...' }: SelectValueProps) {
  const { value } = React.useContext(SelectContext);
  return <span>{value || placeholder}</span>;
}

export function SelectContent({ children }: SelectContentProps) {
  const { isOpen } = React.useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-[1.35rem] border border-[#c9d8d2] bg-white/95 p-1 shadow-[0_24px_60px_rgba(88,110,118,0.18)] backdrop-blur-xl">
      {children}
    </div>
  );
}

export function SelectItem({ value, className = '', children, ...props }: SelectItemProps) {
  const { value: selectedValue, onValueChange, onOpenChange } = React.useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      onClick={() => {
        onValueChange(value);
        onOpenChange(false);
      }}
      className={`w-full rounded-[1rem] px-4 py-3 text-left transition-colors ${
        isSelected ? 'bg-[#e6efeb] text-[#446b68] font-medium' : 'hover:bg-slate-50'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
