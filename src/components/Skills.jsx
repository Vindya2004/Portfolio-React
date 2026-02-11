import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette } from 'lucide-react';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        'React',
        'React Native',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: [
        'Java',
        'Node.js',
        'Express.js',
        'Python',
        'Spring Boot',
        'MongoDB',
        'MySQL'
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      skills: [
        'Figma',
        'Wireframing',
        'Prototyping',
        'User Research'
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Skills & Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-8"
          >

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
