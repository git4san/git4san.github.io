import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import logoSvg from '@/assets/logo.svg';

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Me' },
    { href: '/publications', label: 'Publications' },
    { href: '/tools', label: 'S/W Tools' },
    { href: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-lg border-b border-[var(--border-color)] z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img 
                  src={logoSvg} 
                  alt="SanSPortfolio Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`transition-colors ${
                      location === item.href 
                        ? 'text-[var(--primary-color)] font-medium' 
                        : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-[var(--primary-color)]"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[var(--bg-primary)] z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex justify-center mb-8">
            <img 
              src={logoSvg} 
              alt="SanSPortfolio Logo"
              className="h-12 w-auto"
            />
          </div>
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-4 border-b border-[var(--border-color)] transition-colors ${
                location === item.href 
                  ? 'text-[var(--primary-color)] font-medium' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
