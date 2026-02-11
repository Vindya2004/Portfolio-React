import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        // { name: 'Next.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      color: 'from-green-500 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 85 },
        // { name: 'PostgreSQL', level: 80 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      color: 'from-purple-500 to-pink-400',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Prototyping', level: 80 },
        { name: 'Wireframing', level: 90 },
        { name: 'User Research', level: 75 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      color: 'from-orange-500 to-yellow-400',
      skills: [
        { name: 'React Native', level: 85 },
        // { name: 'Flutter', level: 70 },
        // { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 70 },
      ]
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      color: 'from-indigo-500 to-purple-400',
      skills: [
        { name: 'MongoDB', level: 88 },
        // { name: 'PostgreSQL', level: 85 },
        // { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'MySQL', level: 82 },
      ]
    },
    {
      title: 'Development Tools',
      icon: <Terminal size={24} />,
      color: 'from-red-500 to-rose-400',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux CLI', level: 80 },
      ]
    },
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
        <p className="section-subtitle">
          Mastering modern technologies to deliver exceptional solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="card group"
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mr-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

