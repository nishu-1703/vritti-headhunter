import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from './ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`nav-shell mx-auto max-w-7xl rounded-[1.9rem] border border-white/70 px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:px-6 ${
          isScrolled
            ? 'bg-white/84 shadow-[0_24px_60px_rgba(88,110,118,0.16)]'
            : 'bg-white/64 shadow-[0_12px_40px_rgba(88,110,118,0.08)]'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <div className="flex h-14 w-[8.5rem] items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/70 bg-[#17313b] shadow-[0_12px_30px_rgba(88,110,118,0.12)] sm:w-[9.15rem]">
              <img
                src={`${import.meta.env.BASE_URL}logo.jfif`}
                alt="Vritti Headhunters"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/55 p-1.5 lg:flex">
            {navItems.map((item) => {
              const isActive = location === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_10px_20px_rgba(88,110,118,0.12)]"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/contact">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-slate-700 shadow-[0_10px_20px_rgba(88,110,118,0.08)] transition-colors hover:bg-white/90 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="mt-4 overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/88 p-4 shadow-[0_22px_50px_rgba(88,110,118,0.14)] md:hidden"
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = location === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-[1.2rem] px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#edf3f0] text-slate-900'
                          : 'text-slate-600 hover:bg-white hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
