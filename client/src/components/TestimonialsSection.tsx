import { useState, useEffect, useRef } from 'react';
import { testimonials, transformations } from '@/lib/utils';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Update slider position when currentSlide changes
    if (sliderRef.current) {
      const width = 100 / 3; // For 3 visible testimonials on desktop
      sliderRef.current.style.transform = `translateX(-${currentSlide * width}%)`;
    }

    // Auto-advance carousel every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl mb-2 gold-text">TESTIMONIANZE</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Ecco cosa dicono le persone che hanno scelto B2W per la loro trasformazione
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div id="testimonials-carousel" className="relative max-w-5xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              id="testimonials-slider" 
              className="flex transition-transform duration-500 ease-in-out"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-700 rounded-lg shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image}
                        alt={`Cliente B2W - ${testimonial.name}`} 
                        className="w-16 h-16 rounded-full object-cover" 
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-lg text-gray-100">{testimonial.name}</h4>
                        <div className="flex text-primary">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="italic text-gray-300">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            id="prev-testimonial" 
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-primary text-black rounded-full p-2 shadow-lg hover:bg-opacity-90 transition focus:outline-none hidden md:block"
            onClick={prevSlide}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            id="next-testimonial" 
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-primary text-black rounded-full p-2 shadow-lg hover:bg-opacity-90 transition focus:outline-none hidden md:block"
            onClick={nextSlide}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Mobile Indicators */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-primary/70'} transition`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Transformations */}
        <div className="mt-20">
          <h3 className="font-heading text-3xl text-center mb-12 gold-text">TRASFORMAZIONI</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((transformation) => (
              <div 
                key={transformation.id}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300" 
                data-aos="fade-up" 
                data-aos-delay={100 * transformation.id}
              >
                <div className="relative">
                  <img 
                    src={transformation.image}
                    alt={`Trasformazione B2W - ${transformation.weeks} settimane`} 
                    className="w-full h-auto" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-black py-2 px-4 font-bold">
                    {transformation.weeks} SETTIMANE
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
