import { Link } from 'wouter';
import { Button } from './ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md z-50" style={{ backgroundImage: 'url(/background.jfif)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <Link href="/">
          <img 
            src="/logo.jfif" 
            alt="Vritti Headhunters" 
            className="h-16 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm font-medium text-blue-100 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-blue-100 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-blue-100 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium text-blue-100 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 relative z-10">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-blue-100 hover:text-white transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="block text-sm font-medium text-blue-100 hover:text-white transition-colors py-2">
              About
            </Link>
            <Link href="/services" className="block text-sm font-medium text-blue-100 hover:text-white transition-colors py-2">
              Services
            </Link>
            <Link href="/contact" className="block text-sm font-medium text-blue-100 hover:text-white transition-colors py-2">
              Contact
            </Link>
            <Link href="/contact" className="block">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
