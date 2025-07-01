const AboutSection = () => {
  const values = [
    {
      icon: "fa-dumbbell",
      title: "COSTANZA",
      description: "I risultati arrivano con l'impegno quotidiano"
    },
    {
      icon: "fa-trophy",
      title: "COMPETIZIONE",
      description: "La sfida più grande è contro te stesso"
    },
    {
      icon: "fa-bolt",
      title: "DETERMINAZIONE",
      description: "La forza mentale è la chiave del successo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl mb-2 gold-text">CHI SONO</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Matteo Trocchia - Men's Physique Athlete" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <h3 className="text-3xl font-heading mb-4 text-gray-100">Su di Me – Matteo Trocchia</h3>
            <p className="mb-6 text-lg text-gray-300">
              Mi chiamo <strong className="text-white">Matteo Trocchia</strong>, ho 26 anni e vengo da <strong className="text-white">Saviano (NA)</strong>. Sono un atleta della categoria <strong className="text-white">Men's Physique</strong>, vincitore di competizioni a livello regionale e nazionale.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              Ho trasformato la mia passione in una missione: aiutare gli altri a raggiungere il loro massimo potenziale fisico e mentale. Con il progetto <strong className="text-white">B2W – Born To Win</strong> voglio ispirare chiunque a scegliere la propria vittoria, ogni singolo giorno.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary text-3xl mb-2">
                    <i className={`fas ${value.icon}`}></i>
                  </div>
                  <h4 className="font-heading text-xl mb-2 text-gray-100">{value.title}</h4>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
