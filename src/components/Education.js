import React from 'react';

function Education() {
  const education = [
    { 
      period: '2022 - 2025', 
      degree: 'Bachelor of Science (B.Sc) - Major in Computer Science, Mathematics & Statistics',
      institution: 'Indian Institute of Management and Commerce', 
      grade: 'GPA: 8.76/10'
    },
    { 
      period: '2020 - 2022', 
      degree: 'Intermediate (M.P.C)', 
      institution: 'Sri Gayatri Junior College', 
      grade: 'Percentage: 86.9%'
    },
    { 
      period: '2020', 
      degree: 'SSC', 
      institution: 'Nirmala High School', 
      grade: 'GPA: 9.8/10'
    },
  ];

  const EducationCard = ({ item }) => (
    <div className="mb-4 p-4 rounded education-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="h5 mb-0">{item.degree}</h3>
        <span className="badge">{item.period}</span>
      </div>
      <h4 className="h6 mb-3">{item.institution}</h4>
      {/* This line is now updated to use item.grade */}
      <p className="mb-0">{item.grade}</p> 
    </div>
  );

  return (
    <section id="education" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">Education</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="education-timeline">
              {education.map((edu, index) => (
                <EducationCard key={index} item={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;