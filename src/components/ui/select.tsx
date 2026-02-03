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
      onClick={() => onOpenChange(!isOpen)}
      className={`w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${className}`}
      {...props}
    >
      {children}
      <ChevronDown size={16} className="opacity-50" />
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
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      {children}
    </div>
  );
}

export function SelectItem({ value, className = '', children, ...props }: SelectItemProps) {
  const { value: selectedValue, onValueChange, onOpenChange } = React.useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <button
      onClick={() => {
        onValueChange(value);
        onOpenChange(false);
      }}
      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
        isSelected ? 'bg-primary/10 text-primary font-medium' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
