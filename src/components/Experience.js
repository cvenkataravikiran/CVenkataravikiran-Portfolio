import React from 'react';

function Experience() {
  const experiences = [
    {
      period: 'June 2024 - Present',
      role: 'Data Analyst Intern',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Hyderabad, India',
      type: 'Internship',
      description: 'Working on data analysis projects, creating dashboards, and generating insights from business data.',
      responsibilities: [
        'Analyzed sales data using Excel and Power BI to identify trends and patterns',
        'Created interactive dashboards for business stakeholders',
        'Performed data cleaning and preprocessing on large datasets',
        'Collaborated with team members on data-driven decision making'
      ],
      technologies: ['Excel', 'Power BI', 'SQL', 'Python', 'Pandas']
    },
    // Add more experiences here as needed
    // Example:
    // {
    //   period: 'Jan 2024 - May 2024',
    //   role: 'Python Developer Intern',
    //   company: 'ABC Company',
    //   location: 'Remote',
    //   type: 'Internship',
    //   description: 'Developed backend APIs and automation scripts.',
    //   responsibilities: [
    //     'Built RESTful APIs using Flask',
    //     'Automated data processing tasks',
    //     'Wrote unit tests for code quality'
    //   ],
    //   technologies: ['Python', 'Flask', 'MongoDB', 'Git']
    // }
  ];

  const ExperienceCard = ({ exp, index }) => (
    <div className="mb-4 modern-timeline-item stagger-item" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="p-4 rounded glass-effect modern-card shadow-modern-md">
        <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
          <div className="mb-2 mb-md-0">
            <h3 className="h5 mb-1 gradient-text">{exp.role}</h3>
            <h4 className="h6 mb-1">{exp.company}</h4>
            <p className="text-muted small mb-0">
              <i className="fas fa-map-marker-alt me-2"></i>{exp.location}
            </p>
          </div>
          <div className="text-md-end">
            <span className="badge modern-badge d-block mb-2">{exp.period}</span>
            <span className="badge modern-badge" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
              {exp.type}
            </span>
          </div>
        </div>

        <p className="mb-3">{exp.description}</p>

        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <div className="mb-3">
            <h5 className="h6 mb-2">Key Responsibilities:</h5>
            <ul className="mb-0">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">{resp}</li>
              ))}
            </ul>
          </div>
        )}

        {exp.technologies && exp.technologies.length > 0 && (
          <div className="d-flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 rounded-pill tech-tag modern-badge shimmer">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-5 position-relative">
      {/* Background Blob */}
      <div className="blob" style={{width: '350px', height: '350px', top: '15%', right: '5%', opacity: 0.2}}></div>
      
      <div className="container py-5 position-relative" style={{zIndex: 1}}>
        <h2 className="text-center mb-5 section-title reveal-on-scroll revealed">Work Experience</h2>
        
        {experiences.length > 0 ? (
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} index={index} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center p-5 rounded glass-effect modern-card shadow-modern-md">
                <i className="fas fa-briefcase fa-3x mb-3 gradient-text"></i>
                <h3 className="h5 mb-3">Building My Professional Journey</h3>
                <p className="text-muted mb-0">
                  Currently pursuing my MCA and actively seeking opportunities to apply my skills in real-world projects. 
                  Open to internships and entry-level positions in Data Analytics and Software Development.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
