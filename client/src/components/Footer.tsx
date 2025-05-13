import { scrollToElement } from '@/lib/utils';

const Footer = () => {
  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              <img src="/assets/corona-b2w.png" alt="B2W Logo" className="h-8 mr-2" />
              <div className="text-primary font-heading text-3xl">B2W</div>
              <span className="ml-2 text-sm">Born To Win</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              © {new Date().getFullYear()} B2W - Born To Win. Tutti i diritti riservati.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
            <div>
              <h4 className="font-bold text-primary mb-3">Link Utili</h4>
              <ul className="space-y-2">
                {['home', 'about', 'services', 'products', 'testimonials'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`}
                      className="text-gray-400 hover:text-primary transition"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                    >
                      {item === 'home' ? 'Home' : 
                       item === 'about' ? 'Chi sono' : 
                       item === 'services' ? 'Servizi' :
                       item === 'products' ? 'Abbigliamento' : 'Testimonianze'}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-primary mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition">Termini e Condizioni</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
