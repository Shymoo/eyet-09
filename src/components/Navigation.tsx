import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = {
    en: [
      { href: '/', label: 'Home' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/services', label: 'Services' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
    ar: [
      { href: '/', label: 'الرئيسية' },
      { href: '/portfolio', label: 'الأعمال' },
      { href: '/services', label: 'الخدمات' },
      { href: '/about', label: 'حولنا' },
      { href: '/contact', label: 'اتصل بنا' },
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/47e6dc6c-8c96-47ba-90f6-86f97456a44b.png" 
              alt="EyeT Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-rbno transition-colors hover:text-brand-pink ${
                  location.pathname === item.href 
                    ? 'text-brand-pink' 
                    : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
              className="hidden md:flex"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems[language].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-rbno transition-colors hover:text-brand-pink ${
                    location.pathname === item.href 
                      ? 'text-brand-pink' 
                      : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
                className="self-start"
              >
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;