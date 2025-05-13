import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Service types for the B2W application
export type ServiceType = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

export const services: ServiceType[] = [
  {
    id: "schema-allenamento",
    title: "SCHEDA ALLENAMENTO PERSONALIZZATA",
    description: "Programma di allenamento completamente personalizzato in base ai tuoi obiettivi, al tuo livello di esperienza e alle tue esigenze specifiche.",
    price: "€79",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "schema-allenamento-alimentazione",
    title: "SCHEDA ALLENAMENTO + ALIMENTAZIONE",
    description: "Programma completo che include un piano di allenamento personalizzato abbinato a consigli nutrizionali per massimizzare i risultati.",
    price: "€129",
    image: "https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "allenamenti-one-to-one",
    title: "ALLENAMENTI ONE-TO-ONE",
    description: "Sessioni di allenamento individuali dal vivo o online, con supervisione costante, correzioni in tempo reale e motivazione diretta.",
    price: "€45/h",
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  }
];

export type TestimonialType = {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
};

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Marco S.",
    text: "Ho provato molti personal trainer, ma solo con B2W ho finalmente visto dei risultati concreti. In 3 mesi ho perso 8kg e guadagnato massa muscolare!",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: 2,
    name: "Giulia T.",
    text: "La scheda personalizzata ha completamente cambiato il mio approccio all'allenamento. I risultati sono arrivati rapidamente e la motivazione è sempre alta!",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 4.5
  },
  {
    id: 3,
    name: "Alessandro P.",
    text: "Le sessioni one-to-one hanno fatto la differenza! Tecnica migliorata, più motivazione e risultati visibili. B2W è sinonimo di professionalità.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  }
];

export type TransformationType = {
  id: number;
  weeks: number;
  image: string;
};

export const transformations: TransformationType[] = [
  {
    id: 1,
    weeks: 12,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 2,
    weeks: 8,
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 3,
    weeks: 16,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=350"
  }
];

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

export const products: ProductType[] = [
  {
    id: 1,
    title: "Felpa B2W Premium",
    description: "Felpa in cotone pesante premium con logo B2W, perfetta per gli allenamenti e per il tempo libero. Materiale di alta qualità che garantisce comfort e resistenza.",
    price: "€59,90",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
  },
  {
    id: 2,
    title: "T-Shirt B2W Training",
    description: "T-shirt tecnica traspirante con logo B2W, ideale per gli allenamenti intensi. Tessuto che assorbe il sudore e mantiene il corpo asciutto anche durante gli sforzi più impegnativi.",
    price: "€29,90",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
  }
];
