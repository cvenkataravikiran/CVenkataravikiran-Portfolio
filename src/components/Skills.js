import React from 'react';

function Skills() {
  const skillCategories = [
  { 
    title: 'Programming', 
    skills: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' }
    ]
  },

  { 
    title: 'Backend Development', 
    skills: [
      { name: 'Flask', icon: 'fas fa-code' },
      { name: 'REST APIs', icon: 'fas fa-cogs' },
      { name: 'API Design', icon: 'fas fa-network-wired' },
      { name: 'JWT Auth', icon: 'fas fa-key' }
    ]
  },

  { 
    title: 'Frameworks & Libraries', 
    skills: [
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'Pandas', icon: 'fas fa-table' },
      { name: 'NumPy', icon: 'fas fa-square-root-alt' }
    ]
  },

  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'SQLite', icon: 'fas fa-database' }
    ]
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'Postman', icon: 'fas fa-paper-plane' }
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
