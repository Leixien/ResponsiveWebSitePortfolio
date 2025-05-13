import { scrollToElement, services, ServiceType } from "@/lib/utils";

interface ServicesSectionProps {
  setSelectedService: (service: string) => void;
}

const ServicesSection = ({ setSelectedService }: ServicesSectionProps) => {
  const handleServiceRequest = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToElement('contact');
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
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1" 
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 100)}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover" 
              />
              
              <div className="p-6">
                <h3 className="font-heading text-2xl mb-2">{service.title}</h3>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="mb-6 text-gray-300">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-2xl font-heading">{service.price}</span>
                  <button 
                    className="bg-primary text-black py-2 px-6 rounded font-bold hover:bg-opacity-90 transition"
                    onClick={() => handleServiceRequest(service.title)}
                  >
                    Richiedi Ora
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
