import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Target,
} from "lucide-react";
import GlaucoLens from "../.././assets/images/Glucolens.jpg";
import SuperpowersTracker from "../.././assets/images/SuperpowersTracker.jpg";
import financeDashboard from "../.././assets/images/personal_finance_dashboard.jpg";
import sales_Dashboard from "../.././assets/images/sales_dashboard.jpg";
import WebStore from "../.././assets/images/Ecommerce_webstore.jpg";
import Portfolio from "../.././assets/images/portfolio.jpg";
import Std_mng_system from "../.././assets/images/Student_management_system.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title:
        "GlaucoLens: Glaucoma Detection System with real-time medical chatbot",
      description:
        "GlaucoLens is a glaucoma detection system that uses fundus image analysis and a CNN model to identify signs of glaucoma. It features a real-time chatbot for medical consultation and is trained on a personally collected and filtered dataset using Jupyter Notebook.",
      category: "machine-learning",
      image: GlaucoLens,
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "OpenApi"],
      metrics: {
        accuracy: "84%+ Classification Accuracy",
        timeframe: "10 Months",
      },
      githubUrl: "https://github.com/MilniChandrasekara/GlaucoLens",
      demoUrl:
        "https://drive.google.com/file/d/1_DjmuL68NOkYaa89I7W8jOfJq5ydZ-fO/view?usp=drive_link",
      highlights: [
        "Custom fundus image dataset",
        "Preprocessing with OpenCV",
        "CNN model in Jupyter Notebook",
        "Live chatbot via OpenAI API",
      ],
    },
    {
      id: 2,
      title: "Superpowers Tracker: Hero Abilities & Stats Manager",
      description:
        "Superpowers Tracker is a full-stack web application that lets users explore, manage, and analyze superhero stats and abilities. Built with React and a custom .NET Web API, the app supports full CRUD operations tested with Postman and features a responsive interface styled with Tailwind CSS.",
      category: "fullstack",
      image: SuperpowersTracker,
      technologies: [
        "React",
        "C#",
        ".NET ASP Core",
        "Tailwind CSS",
        "REST API",
        "Postman",
      ],
      metrics: {
        timeframe: "2 Months",
      },
      githubUrl: "https://github.com/MilniChandrasekara/SuperpowersTracker",
      demoUrl:
        "https://drive.google.com/file/d/1ZNzNHhHdzuLeprglAig31lgecM4UWEaX/view?usp=drive_link",
      highlights: [
        "React frontend with Tailwind CSS styling",
        "Custom .NET Web API for data handling",
        "CRUD operations verified via Postman",
        "Hero stat visualization and filtering",
      ],
    },
    {
      id: 3,
      title: "Personal Financial Dashboard",
      description:
        "Interactive dashboard for visualizing and managing personal finances, including income, expenses, and category-wise breakdowns. Helps users make informed budgeting decisions.",
      category: "dashboard",
      image: financeDashboard,
      technologies: ["Power BI", "Power Platform", "MS EXCEL"],
      metrics: {
        impact: "Track Income & Expenses",
        users: "Individual Users",
        accuracy: "Manual Data Input",
        timeframe: "2 Weeks",
      },
      githubUrl:
        "https://github.com/MilniChandrasekara/Personal-Financial-Dashboard",
      demoUrl:
        "https://drive.google.com/file/d/1ar8beXqy6v07Yae68PKHI2ngvTqjMgUp/view?usp=drive_link",
      highlights: [
        "Dynamic chart visualizations",
        "Income and expense tracking",
        "Category-wise financial breakdown",
        "Clean and user-friendly UI",
      ],
    },
    {
      id: 4,
      title: "Sales Insights Power BI Dashboard",
      description:
        "Power BI dashboard that visualizes sales data with key performance indicators such as total revenue, profit trends, and region-wise sales analysis. Designed to assist decision-making through data-driven insights.",
      category: "dashboard",
      image: sales_Dashboard,
      technologies: ["Power BI", "DAX", "Excel"],
      metrics: {
        impact: "Data-Driven Sales Insights",
        users: "Business Analysts",
        accuracy: "100% Based on Uploaded Dataset",
        timeframe: "1 Week",
      },
      githubUrl:
        "https://github.com/MilniChandrasekara/My_First_PowerBI_Dashboard",
      demoUrl:
        "https://drive.google.com/file/d/1iBoekseJBkfxzepPt9wvpBoGqvkS_tXt/view?usp=drive_link",
      highlights: [
        "Interactive KPI cards",
        "Sales by product and region",
        "Trend analysis and slicers",
        "Clean and professional layout",
      ],
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description:
        "A responsive and animated portfolio website built with React and Tailwind CSS to showcase my projects, skills, and contact information. It includes smooth UI interactions, project demo videos, GitHub links, and a user-friendly experience to attract and engage clients.",
      category: "frontend",
      image: Portfolio,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      metrics: {
        impact: "Improved Client Reach & Engagement",
        users: "Public Portfolio Visitors",
        timeframe: "3 Weeks",
      },
      githubUrl: "https://github.com/MilniChandrasekara/portfolio",
      demoUrl:
        "https://drive.google.com/file/d/1GLzKUdJvn4e8I627t_s93JSqhKhrYuDs/view?usp=drive_link",
      highlights: [
        "Fully responsive design with modern layout",
        "Smooth animations using Framer Motion",
        "Interactive project cards with demo videos",
        "GitHub integration for source code access",
        "Contact form for client inquiries",
      ],
    },
    {
      id: 6,
      title: "E-commerce Web Store (.NET)-Ongoing",
      description:
        "A full-stack e-commerce web application built with ASP.NET Core and Razor Pages. Features include a product catalog, category filtering, and a clean shopping interface suitable for basic store operations.",
      category: "fullstack",
      image: WebStore,
      technologies: ["C#", "ASP.NET Core"],
      metrics: {
        timeframe: "2 Weeks",
      },
      githubUrl: "https://github.com/MilniChandrasekara/Ecommerce-Web-Store-",
      demoUrl:
        " https://drive.google.com/file/d/1UXtXnUT7Ax4emRB5SJm8Eu9yC3ILXGTW/view?usp=drive_link",
      highlights: [
        "Built with ASP.NET Core and Razor Pages",
        "Dynamic product catalog and layout",
        "Category-based filtering",
        "Clean and responsive UI",
      ],
    },
    {
      id: 7,
      title: "Student Management System (Database Project-Ongoing)",
      description:
        "A database-driven system designed to manage and classify student information efficiently. Includes functionalities to add, update, delete, and view student data while demonstrating relational database design and SQL queries.",
      category: "analysis",
      image: Std_mng_system,
      technologies: ["SQL", "MS EXCEL"],
      metrics: {
        impact: "Streamlined Student Record Classification",
        users: "Academic Institutions",
        accuracy: "100% Based on Structured Schema",
        timeframe: "1 Week",
      },
      githubUrl:
        "https://github.com/MilniChandrasekara/Student-Management-System",
      demoUrl:
        " https://drive.google.com/file/d/1UXtXnUT7Ax4emRB5SJm8Eu9yC3ILXGTW/view?usp=drive_link",
      highlights: [
        "Relational database with multiple student categories",
        "Normalization and ER modeling applied",
        "Secure CRUD operations using SQL and PHP",
        "Categorization based on academic performance, departments, etc.",
      ],
    },
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Fullstack", value: "fullstack" },
    { name: "Dashboards", value: "dashboard" },
    { name: "Machine Learning", value: "machine-learning" },
    { name: "Analysis", value: "analysis" },
    { name: "Frontend", value: "frontend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const metricIcons = {
    impact: TrendingUp,
    users: Users,
    accuracy: Target,
    timeframe: DollarSign,
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Showcasing data-driven solutions that deliver measurable business
              impact
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-purple-400 to-blue-400 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.name}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="glass rounded-xl p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.category.replace("-", " ").toUpperCase()}
                  </p>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(project.metrics).map(
                    ([key, value], index) => {
                      const Icon = metricIcons[key];
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon
                            className="w-5 h-5 text-purple-400"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-300">{value}</span>
                        </div>
                      );
                    }
                  )}
                </div>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                    aria-label={`View demo of ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
