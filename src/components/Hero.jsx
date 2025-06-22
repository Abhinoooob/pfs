
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554189097-c48cf163245b?q=80&w=2574&auto=format&fit=crop')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-radio-canada text-brand-secondary leading-tight">
            Hello, <br />
            I’m Saloni!
          </h1>
        </motion.div>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-koho text-brand-secondary/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A computer science student and aspiring web developer. This is my space to share projects, progress, and passion for technology as I learn and grow.
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-10 inline-block bg-brand-primary text-white font-bold font-raleway py-3 px-8 rounded-full uppercase tracking-wider transition-transform duration-300 hover:scale-105 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

