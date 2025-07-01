import { useState } from 'react';
import { scrollToElement } from '@/lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      id="navbar" 
      className="fixed w-full z-50 transition-all duration-300 bg-black/95 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center" onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}>
            <img src="/assets/corona-b2w.png" alt="B2W Logo" className="h-10 mr-2" />
            <div className="text-primary font-heading text-3xl">B2W</div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'products', 'testimonials', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className="font-body font-semibold text-white hover:text-primary transition-colors duration-300"
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'Chi sono' : 
                 item === 'services' ? 'Servizi' :
                 item === 'products' ? 'Abbigliamento' :
                 item === 'testimonials' ? 'Testimonianze' : 'Contatti'}
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              className="text-white focus:outline-none hover:text-primary transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu" 
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-800`}
        >
          <nav className="flex flex-col space-y-4">
            {['home', 'about', 'services', 'products', 'testimonials', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className="font-body font-semibold text-white hover:text-primary transition-colors duration-300"
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'Chi sono' : 
                 item === 'services' ? 'Servizi' :
                 item === 'products' ? 'Abbigliamento' : 
                 item === 'testimonials' ? 'Testimonianze' : 'Contatti'}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
