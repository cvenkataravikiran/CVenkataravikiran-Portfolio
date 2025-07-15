import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { ThemeProvider, useTheme } from './components/ThemeContext';

function AppContent() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
      // Toggle dark-mode class on the body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;