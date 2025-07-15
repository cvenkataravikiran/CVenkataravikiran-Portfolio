import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
  'Full Stack Developer',
  'AI/ML Explorer',
  'Problem Solver Through Code',
  'Future-Ready Technologist',
  'Team Leader & Communicator',
  'Builder of Purposeful Tech'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 100 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <>
      <Navbar />
      <section id="home" className="min-vh-100 d-flex align-items-center px-3 pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-fade-in">
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm <br /> Challa Venkata Ravi Kiran
              </h1>
              <div className="fs-4 mb-4 hero-subtitle">
                {text}
                <span className="cursor" />
              </div>
              <p className="fs-5 fst-italic mb-4 hero-tagline">
                Building impactful solutions with code.
              </p>
              <div className="d-flex gap-3">
                <a href="#projects" className="btn btn-lg hero-button">View Projects</a>
                <a href="#contact" className="btn btn-lg hero-button">Get in Touch</a>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <div className="hero-illustration position-relative">
                <div className="code-window">
                  <div className="window-header">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  {/* === UPDATED SECTION START === */}
                  <div className="code-content">
                    <p className="comment">// Core Skills</p>
                    <p>const skills = {`{`}</p>
                    <p className="property">frontend: ['React', 'Bootstrap', 'JavaScript'],</p>
                    <p className="property">backend: ['Python', 'Flask', 'Node.js', 'Express', 'MongoDB', 'SQLite'],</p>
                    <p className="property">design: ['UI/UX', 'Responsive']</p>
                    <p className="property">AI & ML: ['AI','ML', 'GenAI', 'Prompt-Engineering']</p>
                    <p>{`}`};</p>
                  </div>
                   {/* === UPDATED SECTION END === */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;