import React from 'react';

function Skills() {
  const skillCategories = [
    { 
      title: 'Frontend', 
      skills: [
        { name: 'React', icon: 'fab fa-react' }, 
        { name: 'JavaScript', icon: 'fab fa-js' }, 
        { name: 'HTML5', icon: 'fab fa-html5' }, 
        { name: 'CSS3', icon: 'fab fa-css3-alt' }, 
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
      ]
    },
    { 
      title: 'Backend', 
      skills: [ 
        { name: 'Python', icon: 'fab fa-python' }, 
        { name: 'Flask', icon: 'fab fa-python' }, // Added Flask
        { name: 'Node.js', icon: 'fab fa-node-js' }, 
        { name: 'Express.js', icon: 'fas fa-server' }, 
        { name: 'MongoDB', icon: 'fas fa-database' }, // Added MongoDB
        { name: 'SQLite', icon: 'fas fa-database' },
        { name: 'Java', icon: 'fab fa-java' },
      ] 
    },
    { 
      title: 'AI & Cloud Services', // New category to highlight your advanced skills
      skills: [
        { name: 'AI/ML Concepts', icon: 'fas fa-brain' },
        { name: 'Groq API / LLMs', icon: 'fas fa-robot' },
        { name: 'REST APIs', icon: 'fas fa-cogs' },
        { name: 'Cloudinary API', icon: 'fas fa-cloud-upload-alt' },
        { name: 'Google Maps API', icon: 'fas fa-map-marked-alt' }
      ]
    },
    {
      title: 'Tools & Development', // Expanded this category
      skills: [ 
        { name: 'Git', icon: 'fab fa-git-alt' }, 
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'JWT', icon: 'fas fa-key' }, // From your AI project
      ] 
    }
  ];

  // The SkillCard component is well-structured and doesn't need changes.
  // It will now render 4 cards instead of 3.
  const SkillCard = ({ title, skills }) => (
    <div className="col-lg-4 mb-4">
      <div className="p-4 rounded h-100 skill-category-card">
        <h3 className="h4 mb-4 text-center">{title}</h3>
        <div className="row g-3">
          {skills.map((skill, index) => (
            <div key={index} className="col-6">
              <div className="p-3 rounded text-center skill-item">
                <i className={`${skill.icon} fa-2x mb-2`}></i>
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">My Skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;