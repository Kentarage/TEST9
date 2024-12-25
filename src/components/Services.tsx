import React from 'react';
import { Camera, Users, Calendar } from "lucide-react";

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photographie de Mariage",
    price: "300 000 AR",
    description: "Capturez votre journée spéciale avec nos services de photographie professionnelle.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Séances Portrait",
    price: "80 000 AR",
    description: "Photographie professionnelle pour individus, couples ou familles.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Événements",
    price: "140 000 AR",
    description: "Couverture professionnelle pour vos événements d'entreprise, fêtes ou occasions spéciales.",
  },
];

export const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-secondary hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;