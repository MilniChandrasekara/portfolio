import React from "react";
import { Brain, Target, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Analytical Thinking",
      description:
        "Strong foundation in data analysis and interpretation with hands-on project experience",
    },
    {
      icon: Target,
      title: "Tech-Driven Vision",
      description:
        "Aligning software and analytical skills to solve real-world business problems",
    },
    {
      icon: Lightbulb,
      title: "Creative Development",
      description:
        "Designing intuitive user interfaces and data visualizations to improve usability",
    },
    {
      icon: Zap,
      title: "Goal Oriented",
      description:
        "Focused on delivering efficient, scalable, and impactful solutions",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-Stack Developer & Insightful Data Analyst
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Bridging Code and Insights
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I am <strong>Milni Chandrasekara</strong>, a final-year
                  undergraduate of the Bachelor of Science in Computer Science
                  at Eastern University of Sri Lanka. I am maintaining a solid
                  academic background with a current GPA of around{" "}
                  <strong>3.6</strong>.
                </p>

                <p>
                  I’m not only focused on academics—I also have strong practical
                  experience in software development and data analysis. I enjoy
                  building applications that are both functional and insightful,
                  combining backend logic with visual data storytelling.
                </p>

                <p>
                  My technical skill set includes{" "}
                  <strong>Python, Java, C#, and JavaScript</strong>, with
                  hands-on experience in frameworks like <strong>.NET</strong>{" "}
                  and <strong>React</strong>. I am proficient in developing
                  RESTful APIs and creating interactive web applications.
                </p>

                <p>
                  I have advanced knowledge of{" "}
                  <strong>Database Management</strong> and have used tools like{" "}
                  <strong>SQL, Power BI, and Tableau</strong> to turn raw data
                  into meaningful insights. I'm also familiar with a range of
                  libraries and frameworks that help streamline and scale
                  development.
                </p>

                <p>
                  I’m passionate about learning, collaborating, and contributing
                  to real-world projects that make an impact. I continuously
                  seek opportunities to apply and grow my skills through
                  innovative internships and teamwork.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="glass rounded-xl p-6 card-hover">
                  <item.icon
                    className="w-8 h-8 text-purple-400 mb-4"
                    aria-hidden="true"
                  />
                  <h4 className="font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
