
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-radio-canada text-brand-secondary">About Me</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4 mb-8"></div>
          <p className="max-w-4xl mx-auto text-lg text-brand-secondary/80 leading-relaxed font-koho">
            Hi, I'm a Computer Science student with a passion for clean design and front-end development. I love crafting simple, functional web experiences using HTML, CSS, and JavaScript. Lately, I’ve also been exploring visual storytelling through design tools, blending aesthetics with code in creative ways.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

