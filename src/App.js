import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const Section = ({ children, id }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
      <motion.section
        id={id}
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="App">
      <Navigation />
      <Section id="home"><Hero /></Section>
      <Section id="about"><About /></Section>
      <Section id="skills"><Skills /></Section>
      <Section id="projects"><Projects /></Section>
      <Section id="experience"><Experience /></Section>
      <Section id="contact"><Contact /></Section>
      <Footer />
    </div>
  );
};

export default App;