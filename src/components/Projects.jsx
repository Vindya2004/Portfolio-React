import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, ShoppingCart, CheckSquare, Brain, Heart, Home, TrendingUp,Utensils,ShoppingBag,AlertTriangle,Gamepad2 } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'The Wind E-Commerce Platform',
      category: 'Full Stack',
      description: 'A full-stack e-commerce platform designed for seamless online shopping, featuring real-time inventory tracking, secure payments, and an intuitive admin dashboard.',
      image: '/shoes.webp', // Local image path
      icon: <ShoppingCart size={20} />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: 'https://github.com/Vindya2004/The_Wind_Frontend',
      live: 'https://example.com',
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'User reviews']
    },
    {
      id: 2,
      title: 'RecipeBox Recipe Finder App',
      category: 'Mobile',
      description: 'A cross-platform mobile recipe finder app that helps users discover, save, and manage recipes with personalized recommendations and user-friendly navigation.',
      image: '/Recipe.png', // Local image path
      icon: <Utensils size={20} />,
      technologies: ['React Native', 'Firebase', 'context'],
      github: 'https://github.com/Vindya2004/RecipeBox',
      live: 'https://example.com',
      features: ['Recipe search & discovery', 'Save and manage favorite recipes', 'User authentication', 'Recipe reviews & ratings', 'CRUD operations for user recipes']
    },
    {
      id: 3,
      title: 'Sweet Delight POS System',
      category: 'Desktop Application',
      description: 'A desktop-based Point of Sale (POS) system developed for Sweet Delight, designed using layered architecture to manage sales, products, and customer transactions efficiently.',
      image: '/cake.png', // Local image path
      icon: <ShoppingBag size={20} />,
      technologies: ['Java', 'JavaFX'],
      github: 'https://github.com/Vindya2004/layeredProject',
      live: 'https://example.com',
      features: ['Product and category management', 'Sales and billing management', 'Order processing and invoice generation', 'Customer management']
    },
    {
      id: 4,
      title: 'Hela Suwaya Ayuewedha Retreat Management System',
      category: 'Web App',
      description: 'A web-based Ayurveda retreat management system designed to handle patient bookings, treatment management, and administrative operations for a traditional wellness center',
      image: '/Ayurwedha.webp', // Local image path
      icon: <Heart size={20} />,
      technologies: ['Spring Boot','HTML', 'CSS', 'Java'],
      github: 'https://github.com/Vindya2004/AWRMS',
      live: 'https://www.youtube.com/watch?v=HmQDJn3IYHM&t=2s',
      features: ['Online retreat and treatment booking', 'Patient and visitor management', 'User authentication & role-based access', 'Admin dashboard for retreat management', 'Payment processing for bookings', 'REST API integration']
    },
    {
      id: 5,
      title: 'Complaint Management System',
      category: 'Web App',
      description: 'A web-based complaint management system designed to streamline complaint submission, tracking, and resolution through an organized and user-friendly platform.',
      image: '/complaint-management-software.jpg', // Local image path
      icon: <AlertTriangle size={20} />,
      technologies: ['JavaEE', 'JSP', 'MYSQL'],
      github: 'https://github.com/Vindya2004/CMS-JSP',
      live: 'https://www.youtube.com/watch?v=IJznCcRHTKo',
      features: ['Online complaint submission', 'Complaint tracking and status updates', 'User authentication and role management', 'Admin dashboard for complaint handling']
    },
    {
      id: 6,
      title: 'Tic Tak Toe Game',
      category: 'Game',
      description: 'A classic Tic Tac Toe game developed using Java and Object-Oriented Programming (OOP) principles, focusing on clean game logic, modular design, and interactive gameplay.',
      image: '/tic-tak.avif', // Local image path
      icon: <Gamepad2 size={20} />,
      technologies: ['Java', 'Java OOP Concepts', 'JavaFX'],
      github: 'https://github.com/Vindya2004/Tik-Tac-Toe',
      live: 'https://example.com',
      features: ['Two-player gameplay', 'Object-oriented game logic', 'Win, draw, and game reset functionality', 'Interactive and user-friendly interface']
    },
  ];

  const categories = ['All', 'Full Stack', 'Mobile', 'Game', 'Web App', 'Desktop Application'];

  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my best work and innovative solutions
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                {/* Image Container with Fallback */}
                <div className="w-full h-full relative">
                  {/* Background Gradient Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  
                  {/* Your Local Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If image fails to load, show gradient background
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Icon Overlay for missing images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button className="text-primary hover:text-secondary flex items-center gap-2 transition-colors">
                  View Details <ArrowRight size={16} />
                </button>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-4 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-4">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="w-full h-64 rounded-xl mb-6 overflow-hidden">
                      {/* Modal Image with Fallback */}
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl text-white/30">
                            {selectedProject.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gray-800 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mb-8">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2 flex-1"
                      >
                        <Github size={20} /> View Code
                      </a>
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center justify-center gap-2 flex-1"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;