import { scrollToElement } from '@/lib/utils';

const CTASection = () => {
  // Function to open WhatsApp for consultation
  const handleContactWhatsApp = () => {
    const phoneNumber = "393661349967";
    const message = "Ciao, sono pronto a iniziare il mio percorso con B2W - Born To Win!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
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
          <p className="text-xl mb-8 text-gray-200">
            Non rimandare più. Inizia oggi il percorso verso la tua migliore versione.
          </p>
          <button 
            onClick={handleContactWhatsApp}
            className="inline-block bg-primary text-black py-3 px-10 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg"
          >
            INIZIA ORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
