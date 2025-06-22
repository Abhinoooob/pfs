
import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left font-koho">
            &copy; {new Date().getFullYear()} Saloni Rauniyar. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/saloni-rauniyar-9b6a4a2b7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/salonirau" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/saluuuuni" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
