// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Smartphone, Palette, Cloud, Database, BarChart } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: <Code size={28} />,
//       title: 'Web Development',
//       description: 'Custom web applications built with modern frameworks like React, Vue, and Angular.',
//       features: ['Responsive Design', 'Progressive Web Apps', 'API Integration', 'Performance Optimization']
//     },
//     {
//       icon: <Smartphone size={28} />,
//       title: 'Mobile Development',
//       description: 'Cross-platform mobile applications using React Native and Flutter.',
//       features: ['iOS & Android', 'Offline Support', 'Push Notifications', 'App Store Deployment']
//     },
//     {
//       icon: <Palette size={28} />,
//       title: 'UI/UX Design',
//       description: 'User-centered design that combines aesthetics with functionality.',
//       features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
//     },
//     {
//       icon: <Database size={28} />,
//       title: 'Backend Development',
//       description: 'Scalable server-side solutions using Node.js, Python, and cloud services.',
//       features: ['REST APIs', 'Microservices', 'Database Design', 'Authentication']
//     },
//     {
//       icon: <Cloud size={28} />,
//       title: 'Cloud Solutions',
//       description: 'Deployment and management of applications on AWS, Azure, and Google Cloud.',
//       features: ['Serverless Architecture', 'DevOps', 'CI/CD Pipelines', 'Infrastructure as Code']
//     },
//     {
//       icon: <BarChart size={28} />,
//       title: 'Consulting',
//       description: 'Technical guidance and architecture planning for your digital projects.',
//       features: ['Tech Stack Selection', 'Code Reviews', 'Performance Audits', 'Team Training']
//     }
//   ];

//   return (
//     <section id="services" className="section-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="section-title">My Services</h2>
//         <p className="section-subtitle">
//           Comprehensive digital solutions tailored to your business needs
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -10 }}
//             className="card group"
//           >
//             <div className="flex items-start mb-6">
//               <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mr-4">
//                 {service.icon}
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-400">{service.description}</p>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <h4 className="font-semibold text-gray-300">What I offer:</h4>
//               <ul className="space-y-2">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center text-sm text-gray-400">
//                     <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-6 pt-6 border-t border-gray-700">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
//                 className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Database, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and user-friendly web interfaces using modern frameworks like React.js, Vue.js, and Angular. Focus on performance, accessibility, and seamless user experience across all devices.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications with React Native and Flutter. Delivering native-like performance with code reusability, offline capabilities, and smooth animations for iOS and Android platforms.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces with focus on user experience. From wireframes to interactive prototypes, ensuring delightful user journeys and efficient workflows.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    {
      icon: <Database size={28} />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and RESTful APIs using Node.js, Python, and Java. Focus on scalability, security, and efficient database management for web and mobile applications.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    }
  ];

  // Auto scroll function
  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length;
      setCurrentIndex(nextIndex);
      scrollToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, services.length]);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.children;
      if (cards[index]) {
        const card = cards[index];
        const cardWidth = card.offsetWidth;
        const gap = 24;
        const scrollPosition = index * (cardWidth + gap);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = (currentIndex + 1) % services.length;
    scrollToIndex(newIndex);
  };

  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          Professional development services tailored to your project requirements
        </p>
      </motion.div>

      <div className="relative">
        {/* Left Navigation Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-gray-700/80 transition-all duration-300 shadow-xl"
        >
          <ChevronLeft size={24} />
        </motion.button>

        {/* Right Navigation Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-gray-700/80 transition-all duration-300 shadow-xl"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Services Cards Container - SCROLLBAR HIDDEN */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden space-x-6 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`flex-shrink-0 w-full md:w-[400px] lg:w-[450px] transition-all duration-500 ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
              }`}
            >
              <div className="card h-full hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center text-white mr-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-3 ${service.bgColor} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;