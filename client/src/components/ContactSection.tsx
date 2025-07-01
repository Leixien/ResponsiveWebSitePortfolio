import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

const contactSchema = z.object({
  name: z.string().min(2, 'Il nome è troppo breve').max(100),
  email: z.string().email('Email non valida'),
  service: z.string().optional(),
  message: z.string().min(10, 'Il messaggio è troppo breve').max(1000)
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactSectionProps {
  selectedService: string;
}

const ContactSection = ({ selectedService }: ContactSectionProps) => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: selectedService || '',
      message: ''
    }
  });

  // Set the selected service when it changes
  useState(() => {
    if (selectedService) {
      setValue('service', selectedService);
    }
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per il tuo messaggio! Ti risponderemo al più presto.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Errore",
        description: `Si è verificato un errore: ${error}`,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl mb-2 gold-text">CONTATTI</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Inizia oggi il tuo percorso verso il successo. Contattami per una consulenza gratuita.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg" data-aos="fade-right">
            <h3 className="font-heading text-3xl mb-6">Invia un messaggio</h3>
            
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                  Nome e Cognome *
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Il tuo nome completo" 
                    className={`w-full px-4 py-4 bg-gray-800 border ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-primary'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-400 transition-all duration-300`}
                    {...register('name')}
                  />
                  <i className="fas fa-user absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                {errors.name && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                  Email *
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="La tua email" 
                    className={`w-full px-4 py-4 bg-gray-800 border ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-primary'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-400 transition-all duration-300`}
                    {...register('email')}
                  />
                  <i className="fas fa-envelope absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                {errors.email && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium mb-2">Servizio Richiesto</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  {...register('service')}
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="Scheda Allenamento Personalizzata">Scheda Allenamento Personalizzata</option>
                  <option value="Scheda Allenamento + Alimentazione">Scheda Allenamento + Alimentazione</option>
                  <option value="Allenamenti One-to-One">Allenamenti One-to-One</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Messaggio *</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Descrivi il tuo obiettivo o fai una domanda" 
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none`}
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-black py-3 px-6 rounded-md font-bold text-lg hover:bg-opacity-90 transition"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? 'INVIO IN CORSO...' : 'INVIA MESSAGGIO'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div data-aos="fade-left">
            <h3 className="font-heading text-3xl mb-6">Informazioni di contatto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-xl mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <a href="mailto:matteo.trocchia@b2w-fitness.it" className="text-gray-300 hover:text-primary transition">
                    matteo.trocchia@b2w-fitness.it
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-xl mt-1">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/393661349967" target="_blank" className="text-gray-300 hover:text-primary transition">
                    +39 366 134 9967
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-primary text-xl mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold mb-1">Zona di attività</h4>
                  <p className="text-gray-300">
                    Saviano (NA), Campania e online in tutta Italia
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-xl font-bold mb-4">Seguimi sui social</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/matteo_trocchia" target="_blank" className="bg-gray-800 text-primary hover:bg-primary hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://tiktok.com/@matteo_trocchia" target="_blank" className="bg-gray-800 text-primary hover:bg-primary hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-tiktok text-xl"></i>
                  </a>
                  <a href="https://youtube.com/@matteotrocchia" target="_blank" className="bg-gray-800 text-primary hover:bg-primary hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
