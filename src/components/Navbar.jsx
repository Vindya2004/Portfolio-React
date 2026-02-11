// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Home, User, Code, Briefcase, Mail, GraduationCap, FolderOpen } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
  
//   const navItems = [
//     { id: 'home', label: 'Home', icon: <Home size={18} /> },
//     { id: 'about', label: 'About', icon: <User size={18} /> },
//     { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
//     { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
//     { id: 'projects', label: 'Projects', icon: <FolderOpen size={18} /> },
//     { id: 'services', label: 'Services', icon: <Briefcase size={18} /> },
//     { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => document.getElementById(item.id));
//       const scrollPosition = window.scrollY + 100;
      
//       sections.forEach(section => {
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.clientHeight;
          
//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             setActiveSection(section.id);
//           }
//         }
//       });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.1 }}
//       className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center space-x-2"
//           >
//             <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
//               <Code size={20} />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               VM
//             </span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-1">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
//                   activeSection === item.id 
//                     ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30' 
//                     : 'text-gray-300 hover:text-primary hover:bg-gray-800'
//                 }`}
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-primary p-2 rounded-lg hover:bg-gray-800"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden py-4 border-t border-gray-800"
//           >
//             <div className="flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-4 py-3 rounded-lg flex items-center space-x-3 ${
//                     activeSection === item.id 
//                       ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary' 
//                       : 'text-gray-300 hover:text-primary hover:bg-gray-800'
//                   }`}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, GraduationCap, FolderOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen size={18} /> },
    { id: 'services', label: 'Services', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Home page එකට scroll වෙන්න function
  const scrollToHome = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setActiveSection('home');
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable Home Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHome}
            className="flex items-center space-x-2 cursor-pointer focus:outline-none"
            aria-label="Go to Home"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VM
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30' 
                    : 'text-gray-300 hover:text-primary hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary p-2 rounded-lg hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-2">
              {/* Mobile Home Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={scrollToHome}
                className={`px-4 py-3 rounded-lg flex items-center space-x-3 ${
                  activeSection === 'home' 
                    ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary' 
                    : 'text-gray-300 hover:text-primary hover:bg-gray-800'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </motion.button>
              
              {/* Other Nav Items */}
              {navItems.filter(item => item.id !== 'home').map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg flex items-center space-x-3 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary' 
                      : 'text-gray-300 hover:text-primary hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;