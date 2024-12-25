import React from 'react';
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-end justify-center animate-fadeIn overflow-hidden pb-26">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80" />
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/2af58a78-c796-4771-b771-07ff2d4da98e.png"
          alt="H&M Bros Studio"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4">
        <p className="text-2xl md:text-3xl text-white font-light">
          Capturons ensemble vos moments précieux
        </p>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
        >
          Réserver Maintenant
        </Link>
      </div>
    </div>
  );
};

export default Hero;