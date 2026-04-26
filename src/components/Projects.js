import React from 'react';

function Projects() {
  const projects = [
     {
  title: 'RecruitFlow - Recruitment & Interview Management System',
  description: 'Built a recruitment platform with applicant tracking, interview scheduling, role-based authentication and admin dashboards.',
  image: '/images/recruit-flow.png',
  technologies: ['Django', 'Python', 'SQLite', 'Bootstrap 5', 'JavaScript', 'HTML5', 'CSS3', 'Web3Forms API', 'Django Auth'],
  liveLink: 'https://recruitflow-oz8p.onrender.com/',
  githubLink: 'https://github.com/cvenkataravikiran/RecruitFlow.git'
     },
    { title: 'CareerPath AI: Intelligent Career Roadmap Generator',
       description: 'Developed an AI-powered platform that analyzes resumes and generates personalized career roadmaps with chatbot support.',
       image: '/images/careerpath-ai.png',
        technologies: ['React', 'Python', 'Flask', 'MongoDB', 'RESTful APIs', 'AI (Groq API / Llama 3)', 'JWT Authentication', 'Cloudinary'],
         liveLink: 'https://career-path-ai-ochre.vercel.app/', 
         githubLink: 'https://github.com/cvenkataravikiran/CareerPath-AI-Frontend' },
    {
      title: 'My Personal Portfolio',
      description: 'Designed a responsive developer portfolio showcasing projects, skills, resume and contact integration.',
      image: '/images/portfolio.png',
      technologies: ['React', 'JavaScript (ES6+)', 'Bootstrap', 'CSS3', 'HTML5', 'Node.js', 'Web3Forms API'],
      liveLink: 'https://cvenkataravikiran-portfolio.vercel.app/', 
      githubLink: 'https://github.com/cvenkataravikiran/CVenkataravikiran-Portfolio.git'
    },

    { title: 'Smart Healthcare Web Application', 
    description: 'Built a healthcare platform with symptom checker, hospital locator, calorie tracker and user dashboard.',
     image: '/images/smart-healthcare.png',
     technologies: ['React', 'Node.js', 'Express.js', 'SQLite', 'Google Maps API', 'Bootstrap CSS', 'JavaScript', 'HTML', 'CSS'],
     liveLink: 'https://drive.google.com/file/d/1dnLfl8pd3IZf-EHRgDO3GqoGCMc5Sv9u/view?usp=drive_link',
     githubLink: 'https://github.com/cvenkataravikiran/Smart-Healthcare-WebApp-Frontend.git#' }
  ];

  const ProjectCard = ({ project }) => (
    <div className="col-lg-4 mb-4">
      <div className="card h-100 project-card">
        <div className="position-relative">
          <img src={project.image} className="card-img-top" alt={project.title} />
          <div className="project-overlay" />
        </div>
        <div className="card-body">
          <h3 className="card-title h5 mb-3">{project.title}</h3>
          <p className="card-text mb-3">{project.description}</p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 rounded-pill tech-tag">{tech}</span>
            ))}
          </div>
          <div className="d-flex gap-2">
            <a href={project.liveLink} className="btn btn-sm btn-project-live">Video Demo/Live Demo</a>
            <a href={project.githubLink} className="btn btn-sm btn-project-github">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
