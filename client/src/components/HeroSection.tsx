import { scrollToElement } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Fitness training silhouette" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 to-[#111111]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-6xl md:text-8xl font-heading mb-4 leading-tight">
            <span className="text-white">NATO PER</span>
            <span className="block gold-text">VINCERE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body">
            Supera i tuoi limiti e trasforma il tuo corpo con allenamenti personalizzati. Raggiungere i tuoi obiettivi non è mai stato così possibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToElement('services')} 
              className="bg-primary text-black py-3 px-8 rounded-md font-body font-bold text-center hover:bg-opacity-90 transition"
            >
              Scopri i Servizi
            </button>
            <button 
              onClick={() => scrollToElement('contact')} 
              className="border-2 border-white py-3 px-8 rounded-md font-body font-bold text-center hover:bg-white hover:text-black transition"
            >
              Prenota Consulenza
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToElement('about')} 
          className="text-white opacity-80 hover:opacity-100 transition"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
