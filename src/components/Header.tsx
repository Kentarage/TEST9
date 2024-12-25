import React from 'react';
import { Camera } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">LensLife</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="home" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 cursor-pointer">Accueil</Link>
            <Link to="portfolio" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 cursor-pointer">Portfolio</Link>
            <Link to="services" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 cursor-pointer">Services</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 cursor-pointer">Contact</Link>
          </nav>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            Réserver
          </Link>
        </div>
      </div>
    </header>
  );
}