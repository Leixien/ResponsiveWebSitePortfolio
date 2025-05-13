import { type ProductType, products } from '@/lib/utils';

const ProductsSection = () => {
  // Function to open WhatsApp with a preset message
  const handleBuyProduct = (productName: string) => {
    // WhatsApp number with the client's actual number
    const phoneNumber = "393661349967";
    const message = `Ciao, vorrei acquistare ${productName} della collezione B2W - Born To Win.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-neutral text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl mb-2 gold-text">ABBIGLIAMENTO</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Indossa il marchio Born To Win e mostra al mondo la tua determinazione
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product: ProductType) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1" 
              data-aos="fade-up" 
              data-aos-delay={100 * product.id}
            >
              <div className="relative pt-[100%]">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-2xl mb-2">{product.title}</h3>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="mb-6 text-gray-700">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-2xl font-heading">{product.price}</span>
                  <button 
                    className="bg-accent text-white py-2 px-6 rounded font-bold hover:bg-opacity-90 transition"
                    onClick={() => handleBuyProduct(product.title)}
                  >
                    Acquista
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

export default ProductsSection;