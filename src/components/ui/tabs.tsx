import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
}

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
}>({ value: '', onValueChange: () => {} });

export function Tabs({ children, defaultValue = '' }: TabsProps) {
  const [value, onValueChange] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: TabsListProps) {
  return (
    <div className="flex border-b border-gray-200 gap-4">
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = '', ...props }: TabsTriggerProps) {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
  const isActive = selectedValue === value;

  return (
    <button
      onClick={() => onValueChange(value)}
      className={`px-4 py-2 font-medium transition-colors border-b-2 ${
        isActive
          ? 'border-primary text-primary'
          : 'border-transparent text-gray-600 hover:text-gray-900'
      } ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export function TabsContent({ value, children }: TabsContentProps) {
  const { value: selectedValue } = React.useContext(TabsContext);
  if (selectedValue !== value) return null;
  return <div>{children}</div>;
}
