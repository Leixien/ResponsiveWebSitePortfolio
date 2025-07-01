import { scrollToElement } from '@/lib/utils';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to open WhatsApp for consultation
  const handleContactWhatsApp = () => {
    const phoneNumber = "393661349967";
    const message = "Ciao, sono interessato a prenotare una consulenza con B2W - Born To Win.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
            <div className="text-primary text-4xl">
              <i className="fas fa-dumbbell animate-bounce"></i>
            </div>
          </div>
        )}
        <img 
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Fitness training silhouette" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-40' : 'opacity-0'}`}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 to-[#111111]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-6xl md:text-8xl font-heading mb-4 leading-tight">
            <span className="text-white">BORN TO</span>
            <span className="block gold-text">WIN</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body text-gray-200">
            Supera i tuoi limiti e trasforma il tuo corpo con allenamenti personalizzati. Raggiungere i tuoi obiettivi non è mai stato così possibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToElement('services')} 
              className="group bg-primary text-black py-4 px-8 rounded-lg font-body font-bold text-center hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Scopri i Servizi
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </button>
            <button 
              onClick={handleContactWhatsApp} 
              className="group border-2 border-white text-white py-4 px-8 rounded-lg font-body font-bold text-center hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp text-xl"></i>
                Prenota Consulenza
                <i className="fas fa-external-link-alt group-hover:scale-110 transition-transform duration-300"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToElement('about')} 
          className="group text-white opacity-80 hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-body tracking-wider">SCORRI</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <i className="fas fa-chevron-down text-lg group-hover:translate-y-1 transition-transform duration-300"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
