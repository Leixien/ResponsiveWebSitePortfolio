import { scrollToElement, services, ServiceType } from "@/lib/utils";

interface ServicesSectionProps {
  setSelectedService: (service: string) => void;
}

const ServicesSection = ({ setSelectedService }: ServicesSectionProps) => {
  // Function to open WhatsApp for service request
  const handleServiceRequest = (serviceTitle: string) => {
    const phoneNumber = "393661349967";
    const message = `Ciao, sono interessato al servizio "${serviceTitle}" di B2W - Born To Win. Vorrei ricevere maggiori informazioni.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl mb-2 gold-text">SERVIZI</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Programmi personalizzati che si adattano perfettamente alle tue esigenze e obiettivi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: ServiceType, index: number) => (
            <div 
              key={service.id}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-primary/50" 
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 100)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="mb-6 text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-2xl font-heading font-bold group-hover:scale-110 transition-transform duration-300">{service.price}</span>
                  <button 
                    className="bg-primary text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:-translate-y-1 group-hover:scale-105"
                    onClick={() => handleServiceRequest(service.title)}
                  >
                    <span className="flex items-center gap-2">
                      Richiedi Ora
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
