import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/MilniChandrasekara",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/milni-chandrasekara-367ab7293",
    },
    { name: "Gmail", icon: Mail, url: "mailto:mvchandrasekara@gmail.com" },
  ];

  return (
    <footer className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label={`Visit my ${link.name} profile`}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Milni Chandrasekara. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
