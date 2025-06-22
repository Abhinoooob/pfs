
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Algorithm Visualizer',
    description: 'An interactive tool that helps visualize how sorting algorithms work step-by-step through animations.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05590?q=80&w=2670&auto=format&fit=crop',
    githubUrl: 'https://github.com/salonirau/algovisualizer.git',
  },
  {
    title: 'Inventory Stock Alert',
    description: 'A web app (in progress) to help small businesses track stock levels and receive real-time alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-brand-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-radio-canada text-brand-secondary">My Projects</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold font-radio-canada text-brand-secondary">{project.title}</h3>
                <p className="mt-4 font-koho text-brand-secondary/80">{project.description}</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-brand-primary font-bold hover:underline"
                >
                  View on GitHub <Github className="ml-2" size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

