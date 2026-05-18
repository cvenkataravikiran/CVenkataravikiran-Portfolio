import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
  "Aspiring AI/ML Engineer",
  " Aspiring Data Analyst ",
  " Skilled in Python, SQL, Excel & Power BI ", 
  " Building Data-Driven Dashboards & Insights ", 
  " Python for Data Analysis"
    // 'Aspiring Data Analyst',
    // 'Python Backend Developer',
    // 'Full Stack Developer',
    // 'REST API Builder',
    // 'Problem Solver Through Code',
    // 'Building Real-World Web Apps'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
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
              Building data-driven solutions with Python & analytics
                {/* Building impactful solutions with code. */}
              </p>

              <div className="d-flex gap-3">
                <a href="#projects" className="btn btn-lg hero-button">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-lg hero-button">
                  Get in Touch
                </a>
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
                  {/* <div className="code-content">
                    <p className="comment">// Core Skills</p>
                    <p>const skills = {`{`}</p>
                    <p className="property">programming: ['Python', 'SQL', 'JavaScript'],</p>
                    <p className="property">frameworks: ['Flask', 'React.js'],</p>
                    <p className="property">databases: ['SQLite', 'MongoDB'],</p>
                    <p className="property">tools: ['Git', 'GitHub', 'VS Code'],</p>
                    <p className="property">backend: ['REST APIs', 'API Design', 'JWT Auth'],</p>
                    <p>{`};`}</p>
                  </div> */}
                  {/* === UPDATED SECTION END === */}
                  {/* === UPDATED SECTION START === */}
<div className="code-content">
  <p className="comment">// Core Skills</p>
  <p>const skills = {`{`}</p>
  <p className="property">data_analysis: ['Excel', 'SQL', 'Python (Pandas, NumPy)'],</p>
  <p className="property">data_visualization: ['Power BI', 'Matplotlib', 'Seaborn'],</p>
  <p className="property">databases: ['MySQL', 'SQLite'],</p>
  <p className="property">tools: ['Git', 'GitHub', 'Jupyter Notebook'],</p>
  <p className="property">concepts: ['Machine Learning', 'Data Cleaning', 'EDA', 'Dashboarding'],</p>
  <p>{`};`}</p>
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
