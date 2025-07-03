import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Government Science College,Matale',
      period: '2016 - 2020',
      responsibilities: [
        'Successfully completed G.C.E. Ordinary Level with 9 A passes',
        'Completed G.C.E. Advanced Level in the Physical Science stream.\nZ-score: 0.8333.'
        ]
    },
    {
      id: 2,
      title: 'Eastern University,Sri Lanka',
      period: '2022 - Current',
      responsibilities: [
        'Final year undergraduate in Computer Science with a current GPA of 3.7'
      ]
    },

  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              A passionate learner and aspiring software developer with hands-on experience in data-driven and full-stack academic projects.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-400 h-full"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="mb-12 flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-last'}`}>
                  <div className="glass rounded-xl p-6 card-hover">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <ul className="list-disc list-inside text-gray-300 mt-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center z-10">
                    <Briefcase className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;