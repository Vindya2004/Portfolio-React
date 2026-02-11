// import React from 'react';
// import { motion } from 'framer-motion';
// import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

// const Education = () => {
//   const education = [
//     {
//       degree: 'Master of Science in Computer Science',
//       institution: 'Stanford University',
//       duration: '2020 - 2022',
//       location: 'Stanford, CA',
//       description: 'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Network Optimization.',
//       gpa: '3.9/4.0',
//       achievements: ['Graduated Summa Cum Laude', 'Research Paper Published', 'TA for Data Structures']
//     },
//     {
//       degree: 'Bachelor of Science in Software Engineering',
//       institution: 'MIT',
//       duration: '2016 - 2020',
//       location: 'Cambridge, MA',
//       description: 'Focused on Full Stack Development and Software Architecture. Lead multiple team projects.',
//       gpa: '3.8/4.0',
//       achievements: ['Dean\'s List All Semesters', 'Hackathon Winner', 'Open Source Contributor']
//     },
//     {
//       degree: 'Frontend Development Specialization',
//       institution: 'Meta (Coursera)',
//       duration: '2021',
//       location: 'Online',
//       description: 'Advanced React, State Management, and Performance Optimization.',
//       gpa: '98%',
//       achievements: ['Certified React Developer', 'Perfect Score Capstone']
//     }
//   ];

//   const certifications = [
//     { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
//     { name: 'Google Professional Cloud Developer', issuer: 'Google Cloud', year: '2022' },
//     { name: 'Microsoft Azure Developer', issuer: 'Microsoft', year: '2022' },
//     { name: 'Scrum Master Certified', issuer: 'Scrum Alliance', year: '2021' },
//   ];

//   return (
//     <section id="education" className="section-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="section-title">Education & Certifications</h2>
//         <p className="section-subtitle">
//           Continuous learning and professional development journey
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//         {education.map((edu, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="card relative"
//           >
//             <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
//               <GraduationCap size={24} />
//             </div>

//             <div className="mb-4">
//               <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
//               <p className="text-primary font-semibold">{edu.institution}</p>
//             </div>

//             <div className="space-y-3 mb-4">
//               <div className="flex items-center text-gray-400 text-sm">
//                 <Calendar size={16} className="mr-2" />
//                 {edu.duration}
//               </div>
//               <div className="flex items-center text-gray-400 text-sm">
//                 <MapPin size={16} className="mr-2" />
//                 {edu.location}
//               </div>
//               <div className="flex items-center text-gray-400 text-sm">
//                 <Award size={16} className="mr-2" />
//                 GPA: {edu.gpa}
//               </div>
//             </div>

//             <p className="text-gray-300 mb-4">{edu.description}</p>

//             <div>
//               <h4 className="font-semibold mb-2">Achievements:</h4>
//               <ul className="space-y-1">
//                 {edu.achievements.map((achievement, i) => (
//                   <li key={i} className="flex items-center text-sm text-gray-400">
//                     <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
//                     {achievement}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Certifications */}
//       {/* <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className="card text-center p-6"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Award size={24} className="text-primary" />
//               </div>
//               <h4 className="font-bold mb-2">{cert.name}</h4>
//               <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
//               <span className="text-primary text-sm font-semibold">{cert.year}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div> */}
//     </section>
//   );
// };

// export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, Users, Target } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Computer Science',
      institution: 'Institute of Java and Software Engineering (IJSE)',
      duration: '2024 - Present',
      location: 'Panadura, Sri Lanka',
      description: 'Currently pursuing a comprehensive computer science diploma with focus on software development, web technologies, and database management.',
      gpa: 'Ongoing',
      specializations: ['Software Development', 'Web Technologies', 'Mobile Development', 'Database Systems', 'Networking']
    },
    {
      degree: 'G.C.E. Advanced Level (Art Stream with ICT)',
      institution: 'Galewela National College',
      duration: '2020 - 2022',
      location: 'Galewela, Sri Lanka',
      description: 'Completed Advanced Level examination in Art stream with ICT.',
      specializations: ['Information & Communication Technology']
    },
    {
      degree: 'Higher Diploma in English Language',
      institution: 'Sri Lanka English Language Graduates Association (SLEGA)',
      duration: '2023',
      location: 'Online',
      description: 'Advanced English language proficiency diploma focusing on professional communication, academic writing, and language teaching methodologies.',
      gpa: '4.0/4.0',
      specializations: ['Professional Communication', 'Academic Writing']
    }
  ];

  const certifications = [
    { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023' },
    { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2023' },
    { name: 'Front End Development Libraries', issuer: 'freeCodeCamp', year: '2023' },
    { name: 'React Basics', issuer: 'Meta (Coursera)', year: '2023' },
  ];

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Education & Learning</h2>
        <p className="section-subtitle">
          Academic journey and continuous skill development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card relative"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <GraduationCap size={24} />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-primary font-semibold">{edu.institution}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                {edu.duration}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin size={16} className="mr-2" />
                {edu.location}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Award size={16} className="mr-2" />
                GPA/Status: {edu.gpa}
              </div>
            </div>

            <p className="text-gray-300 mb-4">{edu.description}</p>

            {/* Specializations/Key Areas */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <BookOpen size={16} className="mr-2 text-primary" />
                Key Areas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.specializations.map((specialization, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {specialization}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section - Uncomment if needed */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">Certifications & Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card text-center p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h4 className="font-bold mb-2 text-sm">{cert.name}</h4>
              <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
              <span className="text-primary text-xs font-semibold bg-primary/10 px-2 py-1 rounded-full">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </section>
  );
};

export default Education;