import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, PlayCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#home' },
    { name: 'אודות', href: '#about' },
    { name: 'סוגי ייעוץ', href: '#services' },
    { name: 'מאמרים', href: '#articles' },
    { name: 'תוכן מקצועי', href: '#videos' },
    { name: 'קביעת פגישה', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-indigo-900' : 'text-white'}`}>
              אריאל ישמח משה
              <span className="block text-sm font-normal opacity-80">ייעוץ פיננסי וביטוח</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-indigo-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0587610758"
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all mr-6 ${
                isScrolled 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <span dir="ltr">058-7610758</span>
              <Phone size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              aria-label="תפריט ניווט"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:0587610758"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-indigo-600 text-white rounded-md font-medium"
              >
                <span dir="ltr">058-7610758</span>
                <Phone size={20} />
              </a>
              <a
                href="mailto:financeme100@gmail.com"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-100 text-slate-700 rounded-md font-medium"
              >
                <Mail size={20} />
                financeme100@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
