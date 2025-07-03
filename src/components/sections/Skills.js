import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Skills = () => {
  const toolsCategories = [
    { name: 'Programming', value: 35, color: '#8B5CF6' },
    { name: 'Visualization', value: 30, color: '#06B6D4' },
    { name: 'Database', value: 20, color: '#10B981' },
    { name: 'Tools', value: 15, color: '#F59E0B' }
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem Solving',
    'Curiosity-Driven Learning',
    'Technical Communication',
    'Team Collaboration',
    'Adaptability',
    'Project Ownership',
    'Self-Motivation'
  ];


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              As a Computer Science undergraduate, I’m passionate about both software development and data analytics, and I'm constantly expanding my technical toolkit to build real-world solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">Skills Distribution</h3>
              <div className="chart-container" aria-label="Skills Distribution Pie Chart">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={toolsCategories}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {toolsCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {toolsCategories.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">About My Technical Strength</h3>
              <div className="space-y-4 text-gray-300">
    <p>
      I have a strong foundation in software development with proficiency in languages such as <strong>Python, Java, C#, and JavaScript</strong>. I am experienced in building full-stack applications using frameworks like <strong>.NET</strong> and <strong>React</strong>, skilled in developing RESTful APIs and seamlessly integrating backend and frontend solutions.
    </p>

    <p>
      My expertise extends to advanced <strong>database management</strong> with <strong>SQL</strong>, alongside data analysis and visualization using tools such as <strong>Power BI</strong>, <strong>Tableau</strong>, and <strong>Jupyter Notebook</strong>. I’m familiar with data science environments and package managers like <strong>Anaconda</strong>, which help streamline my workflow.
    </p>

    <p>
      Additionally, I am well-versed in a broad range of Python libraries and frameworks, including <strong>Pandas, NumPy, Matplotlib, and Scikit-learn</strong>, enabling me to transform complex datasets into clear, actionable insights through effective visualization and analysis.
    </p>

    <p>
      I continuously adapt to new technologies to deliver scalable, efficient, and user-centric solutions that solve real-world problems.
    </p>
  </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4 text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                >
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
