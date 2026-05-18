import React, { useState } from 'react';

function Projects() {
  const [activeTab, setActiveTab] = useState('analytics');

  const analyticsProjects = [
    {
      title: 'AI Data Insights Analyzer',
  description: 'Full-stack analytics platform built with Python and Streamlit that processes any CSV/Excel dataset to generate automated insights. Features intelligent column detection, interactive visualizations, ML-based sales forecasting and AI-powered business recommendations using OpenAI GPT-3.5 integration.',
  image: '/images/ai-insights-preview.png',
  technologies: [
    'Python',
    'Streamlit',
    'NumPy',
    'Pandas',
    'Plotly',
    'Scikit-learn',
    'OpenAI API',
    'Machine Learning',
    'Data Visualization'
  ],
  liveLink: 'https://ai-data-insights-analyzer.streamlit.app/',
  githubLink: 'https://github.com/cvenkataravikiran/AI-Data-Insights-Analyzer.git',
  category: 'analytics'
    },{
      title: 'CareerPath AI: Intelligent Career Roadmap Generator',
      description: 'Developed an AI-powered platform that analyzes resumes and generates personalized career roadmaps with chatbot support.',
      image: '/images/careerpath-ai.png',
      technologies: ['React', 'Python', 'Flask', 'MongoDB', 'AI (Groq API / Llama 3)', 'Cloudinary'],
      liveLink: 'https://career-path-ai-ochre.vercel.app/',
      githubLink: 'https://github.com/cvenkataravikiran/CareerPath-AI-Frontend',
      category: 'development'
    },
    {
      title: 'Retail_Sales & Profitability Analytics Dashboard',
      description: 'Interactive Excel dashboard created using retail sales data to analyze sales trends, profitability, and regional performance. Performed data cleaning, built pivot tables and pivot charts, and used slicers to create interactive business Insights.',
      image: '/images/dashboard-preview.png',
      technologies: ['Microsoft Excel','Pivot Tables','Pivot Charts','Data Visualization','Data Cleaning','Business Analytics','Slicers'],
      liveLink: '/images/dashboard-preview.png',
      githubLink: 'https://github.com/cvenkataravikiran/Retail-Sales-Profitability-Analytics-dashboard.git',
      category: 'analytics'
    },
    {
      title: 'Sales Dashboard - Excel Data Analysis',
      description: 'Built an interactive sales dashboard analyzing 500+ records to identify sales performance by region, product-wise revenue, monthly trends and top customers. Performed data cleaning, created pivot tables and designed visualizations to derive business insights.',
      image: '/images/sales-dashboard.png',
      technologies: ['Microsoft Excel', 'Pivot Tables', 'Data Visualization', 'Data Cleaning', 'Business Analytics', 'Charts & Slicers'],
      liveLink: '/images/sales-dashboard.png',
      githubLink: 'https://github.com/cvenkataravikiran/Sales-Dashboard-Excel',
      category: 'analytics'
    }

  ];

  const developmentProjects = [
    {
      title: 'RecruitFlow - Recruitment & Interview Management System',
      description: 'Built a recruitment platform with applicant tracking, interview scheduling, role-based authentication and admin dashboards.',
      image: '/images/recruit-flow.png',
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap 5', 'JavaScript', 'HTML5', 'CSS3', 'Web3Forms API', 'Django Auth'],
      liveLink: 'https://recruitflow-oz8p.onrender.com/',
      githubLink: 'https://github.com/cvenkataravikiran/RecruitFlow.git',
      category: 'development'
    },
    {
      title: 'CareerPath AI: Intelligent Career Roadmap Generator',
      description: 'Developed an AI-powered platform that analyzes resumes and generates personalized career roadmaps with chatbot support.',
      image: '/images/careerpath-ai.png',
      technologies: ['React', 'Python', 'Flask', 'MongoDB', 'RESTful APIs', 'AI (Groq API / Llama 3)', 'JWT Authentication', 'Cloudinary'],
      liveLink: 'https://career-path-ai-ochre.vercel.app/',
      githubLink: 'https://github.com/cvenkataravikiran/CareerPath-AI-Frontend',
      category: 'development'
    },
    {
      title: 'My Personal Portfolio',
      description: 'Designed a responsive developer portfolio showcasing projects, skills, resume and contact integration.',
      image: '/images/portfolio.png',
      technologies: ['React', 'JavaScript (ES6+)', 'Bootstrap', 'CSS3', 'HTML5', 'Node.js', 'Web3Forms API'],
      liveLink: 'https://cvenkataravikiran-portfolio.vercel.app/',
      githubLink: 'https://github.com/cvenkataravikiran/CVenkataravikiran-Portfolio.git',
      category: 'development'
    },
    {
      title: 'Smart Healthcare Web Application',
      description: 'Built a healthcare platform with symptom checker, hospital locator, calorie tracker and user dashboard.',
      image: '/images/smart-healthcare.png',
      technologies: ['React', 'Node.js', 'Express.js', 'SQLite', 'Google Maps API', 'Bootstrap CSS', 'JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://drive.google.com/file/d/1dnLfl8pd3IZf-EHRgDO3GqoGCMc5Sv9u/view?usp=drive_link',
      githubLink: 'https://github.com/cvenkataravikiran/Smart-Healthcare-WebApp-Frontend.git#',
      category: 'development'
    }
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
            {/* <a href={project.liveLink} className="btn btn-sm btn-project-live">Video Demo/Live Demo</a> */}
            <a href={project.liveLink} className="btn btn-sm btn-project-live">Preview</a>
            <a href={project.githubLink} className="btn btn-sm btn-project-github">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );

  const currentProjects = activeTab === 'analytics' ? analyticsProjects : developmentProjects;

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">My Projects</h2>
        
        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-5">
          <div className="project-tabs">
            <button
              className={`project-tab ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              {/* <i className="fas fa-chart-line me-2"></i>  */}
            Projects
            </button>
            {/* <button
              className={`project-tab ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => setActiveTab('development')}
            >
              <i className="fas fa-code me-2"></i>
              Development Projects
            </button> */}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
