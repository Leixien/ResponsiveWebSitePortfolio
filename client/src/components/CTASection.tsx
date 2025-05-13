import { scrollToElement } from '@/lib/utils';

const CTASection = () => {
  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Motivational workout scene" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[#111111]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 gold-text">
            SUPERA I TUOI LIMITI
          </h2>
          <p className="text-xl mb-8">
            Non rimandare più. Inizia oggi il percorso verso la tua migliore versione.
          </p>
          <button 
            onClick={() => scrollToElement('contact')}
            className="inline-block bg-primary text-black py-3 px-10 rounded-md font-bold text-lg hover:bg-opacity-90 transition"
          >
            INIZIA ORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
