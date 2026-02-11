// import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Target, Award, Clock } from 'lucide-react';

// const About = () => {
//   const stats = [
//     { icon: <Award size={24} />, value: '50+', label: 'Projects Completed' },
//     { icon: <User size={24} />, value: '30+', label: 'Happy Clients' },
//     { icon: <Clock size={24} />, value: '3+', label: 'Years Experience' },
//     { icon: <Target size={24} />, value: '100%', label: 'Satisfaction' },
//   ];

//   return (
//     <section id="about" className="section-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="section-title">About Me</h2>
//         <p className="section-subtitle">
//           Passionate developer creating innovative solutions with cutting-edge technologies
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Image and Stats */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-8"
//         >
//           <div className="relative">
//             <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
//               <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
//                 <div className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                   ABOUT
//                 </div>
//               </div>
//             </div>
            
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
//             >
//               <div className="text-3xl font-bold">3+</div>
//               <div className="text-sm">Years Exp</div>
//             </motion.div>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card text-center p-4"
//               >
//                 <div className="flex justify-center mb-2 text-primary">
//                   {stat.icon}
//                 </div>
//                 <div className="text-2xl font-bold">{stat.value}</div>
//                 <div className="text-gray-300 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right Column - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <h3 className="text-2xl font-bold">
//             Crafting Digital Experiences That <span className="text-primary">Inspire</span>
//           </h3>
          
//           <p className="text-gray-300">
//             I'm a passionate Full Stack Developer with over 3 years of experience creating 
//             exceptional digital experiences. My expertise spans across modern web technologies, 
//             with a focus on React, Node.js, and cloud platforms.
//           </p>
          
//           <div className="space-y-4">
//             <div className="flex items-start space-x-3">
//               <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//               <div>
//                 <h4 className="font-semibold">Innovative Solutions</h4>
//                 <p className="text-gray-400 text-sm">
//                   Building scalable and efficient applications that solve real-world problems
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-3">
//               <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
//               <div>
//                 <h4 className="font-semibold">User-Centric Design</h4>
//                 <p className="text-gray-400 text-sm">
//                   Creating intuitive interfaces that enhance user experience and engagement
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-3">
//               <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//               <div>
//                 <h4 className="font-semibold">Clean Code</h4>
//                 <p className="text-gray-400 text-sm">
//                   Writing maintainable, efficient, and well-documented code following best practices
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn-primary"
//               onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
//             >
//               Let's Work Together
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Target, Award, Clock } from 'lucide-react';

// const About = () => {
//   const stats = [
//     { icon: <Award size={24} />, value: '50+', label: 'Projects Completed' },
//     { icon: <User size={24} />, value: '30+', label: 'Happy Clients' },
//     { icon: <Clock size={24} />, value: '3+', label: 'Years Experience' },
//     { icon: <Target size={24} />, value: '100%', label: 'Satisfaction' },
//   ];

//   return (
//     <section id="about" className="section-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="section-title">About Me</h2>
//         <p className="section-subtitle">
//           Passionate developer creating innovative solutions with cutting-edge technologies
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Image and Stats */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-8"
//         >
//           <div className="relative">
//             <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
//               {/* Image එක මෙහි දමන්න */}
//               <div className="w-full h-full relative">
//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                
//                 {/* Your Image */}
//                 <img 
//                   src="/my-image.jpeg" // ඔබගේ image path එක
//                   alt="About Me" 
//                   className="w-full h-full object-cover mix-blend-overlay opacity-90"
//                 />
                
//                 {/* Optional: Text overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-5xl md:text-7xl font-bold text-white mb-2">ABOUT</div>
//                     <div className="text-gray-200 text-lg">ME</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
//             >
//               <div className="text-3xl font-bold">3+</div>
//               <div className="text-sm">Years Exp</div>
//             </motion.div>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card text-center p-4"
//               >
//                 <div className="flex justify-center mb-2 text-primary">
//                   {stat.icon}
//                 </div>
//                 <div className="text-2xl font-bold">{stat.value}</div>
//                 <div className="text-gray-300 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right Column - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <h3 className="text-2xl font-bold">
//             Crafting Digital Experiences That <span className="text-primary">Inspire</span>
//           </h3>
          
//           <p className="text-gray-300">
//             I'm a passionate Full Stack Developer with over 3 years of experience creating 
//             exceptional digital experiences. My expertise spans across modern web technologies, 
//             with a focus on React, Node.js, and cloud platforms.
//           </p>
          
//           <div className="space-y-4">
//             <div className="flex items-start space-x-3">
//               <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//               <div>
//                 <h4 className="font-semibold">Innovative Solutions</h4>
//                 <p className="text-gray-400 text-sm">
//                   Building scalable and efficient applications that solve real-world problems
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-3">
//               <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
//               <div>
//                 <h4 className="font-semibold">User-Centric Design</h4>
//                 <p className="text-gray-400 text-sm">
//                   Creating intuitive interfaces that enhance user experience and engagement
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-3">
//               <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//               <div>
//                 <h4 className="font-semibold">Clean Code</h4>
//                 <p className="text-gray-400 text-sm">
//                   Writing maintainable, efficient, and well-documented code following best practices
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn-primary"
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               Let's Work Together
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Award, Clock, BookOpen, GraduationCap, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen size={24} />, value: '10+', label: 'Projects Completed' },
    { icon: <Award size={24} />, value: '4.0', label: 'Current GPA' },
    { icon: <Clock size={24} />, value: '1+', label: 'Years Learning' },
    { icon: <Users size={24} />, value: '5+', label: 'Team Projects' },
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate IT Diploma student eager to apply theoretical knowledge in practical scenarios
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image and Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="relative">
            <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <div className="w-full h-full relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                
                {/* Your Image */}
                <img 
                  src="/my-image.jpeg" 
                  alt="About Me" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
                
                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl">
                    <GraduationCap size={48} className="text-white mx-auto mb-4" />
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">DIPLOMA</div>
                    <div className="text-gray-200 text-lg">IN SE</div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
            >
              <div className="text-3xl font-bold">4.0</div>
              <div className="text-sm">GPA</div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center p-4"
              >
                <div className="flex justify-center mb-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">
            Aspiring Developer Ready to <span className="text-primary">Learn & Grow</span>
          </h3>
          
          <p className="text-gray-300">
            I'm a dedicated computer science Diploma student with a strong passion for web development and 
            software engineering. Currently pursuing my diploma, I've gained hands-on experience 
            in modern technologies through academic projects and self-learning.
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Academic Background
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Course:</span>
                <span className="text-primary">IJSE-Institute Of Software Engineering Undergraduate BSc (Hons) in Computer Science</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-gray-300">2024 - Present</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Specialization:</span>
                <span className="text-secondary">Software Development</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Quick Learner</h4>
                <p className="text-gray-400 text-sm">
                  Adapt quickly to new technologies and frameworks with strong fundamentals
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Problem Solver</h4>
                <p className="text-gray-400 text-sm">
                  Enjoy tackling coding challenges and finding efficient solutions
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Team Player</h4>
                <p className="text-gray-400 text-sm">
                  Experience collaborating on group projects with excellent communication skills
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect With Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;