import React from 'react';

function Skills() {
  const skillCategories = [
  { 
    title: 'Programming Languages', 
    skills: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C++', icon: 'fas fa-code' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' }
    ]
  },
  { 
    title: 'AI & ML', 
    skills: [
      { name: 'Artificial Intelligence', icon: 'fas fa-brain' },
      { name: 'Machine Learning', icon: 'fas fa-robot' },
      { name: 'Generative AI', icon: 'fas fa-wand-magic-sparkles' },
      { name: 'Prompt Engineering', icon: 'fas fa-keyboard' },
    ]
  },
  { 
    title: 'Frameworks & Libraries', 
    skills: [
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'Flask', icon: 'fas fa-code' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'Pandas', icon: 'fas fa-table' },
      { name: 'NumPy', icon: 'fas fa-square-root-alt' }
    ]
  },
  {
    title: 'Databases & APIs',
    skills: [
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'SQLite', icon: 'fas fa-database' },
      { name: 'REST API', icon: 'fas fa-cogs' }
    ]
  },
  {
    title: 'Tools & Development', 
    skills: [ 
      { name: 'Git', icon: 'fab fa-git-alt' }, 
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'JWT', icon: 'fas fa-key' }
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