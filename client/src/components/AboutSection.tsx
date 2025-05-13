const AboutSection = () => {
  const values = [
    {
      icon: "fa-dumbbell",
      title: "COSTANZA",
      description: "I risultati arrivano con l'impegno quotidiano"
    },
    {
      icon: "fa-fire",
      title: "TRASFORMAZIONE",
      description: "Cambia il tuo corpo, cambia la tua vita"
    },
    {
      icon: "fa-bolt",
      title: "DETERMINAZIONE",
      description: "La forza mentale è la chiave del successo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl mb-2 gold-text">CHI SONO</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Personal Trainer B2W" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <h3 className="text-3xl font-heading mb-4 text-black">La mia missione è la tua trasformazione</h3>
            <p className="mb-6 text-lg">
              Ciao, sono Marco, fondatore di B2W - Born To Win. Da oltre 10 anni aiuto persone come te a superare i propri limiti e raggiungere una forma fisica eccezionale attraverso programmi di allenamento personalizzati e un supporto costante.
            </p>
            <p className="mb-6 text-lg">
              La mia filosofia è semplice: ognuno di noi è nato per vincere, ma la vittoria richiede impegno, disciplina e la giusta guida. Che tu sia un principiante o un atleta esperto, creerò un percorso su misura per te.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-primary text-3xl mb-2">
                    <i className={`fas ${value.icon}`}></i>
                  </div>
                  <h4 className="font-heading text-xl mb-2">{value.title}</h4>
                  <p className="text-gray-700">
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
