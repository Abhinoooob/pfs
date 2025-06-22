
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/saloni-rauniyar-9b6a4a2b7',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/salonirau',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/saluuuuni',
  },
  {
    name: 'Mail',
    icon: Mail,
    url: 'mailto:example@mail.com',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-radio-canada text-brand-secondary">Contact Me</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-secondary/80 font-koho">
            Feel free to reach out. I'm always open to connecting and collaborating.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-brand-bg rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-brand-accent/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <link.icon className="w-12 h-12 text-brand-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="mt-4 text-xl font-bold font-radio-canada text-brand-secondary">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

