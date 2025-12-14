import React from 'react';

function Certifications() {
  // --- Add your certificate data here ---
  const certificatesData = [
    {
      name: ' Data Analytics using Power BI',
      issuer: 'A.V.College of Arts, Science & Commerce (Autonomous)',
      date: 'Issued November 2025',
      link: 'https://drive.google.com/file/d/130w7aJqz6OiVSRQmbmzLsLC6AvsX5ST8/view?usp=drivesdk'
    },
    {
      name: ' Postman API Fundamentals Student Expert',
      issuer: 'Postman Student Expert Program',
      date: 'Issued June 2025',
      link: 'https://badgr.com/public/assertions/jl6fOIfXQjSXeCerNEetSw?identity__email=venkataravikiran.challa%40gmail.com'
    },
    {
      name: ' Introduction to Cloud Computing',
      issuer: 'Simplilearn',
      date: 'Issued May 2025',
      link: 'https://simpli-web.app.link/e/510RPHdYLUb'
    },
    {
      name: ' An Inter-Collegiate Symposium on Artificial Intelligence & Machine Learning Presentation',
      issuer: 'IIMC',
      date: 'Issued March 2024',
      link: 'https://drive.google.com/file/d/1_h17AuetzaU6K0yho1fc9N1Xf6kGzqHf/view'
    },
  ];

  const CertificateCard = ({ cert }) => (
    <div className="mb-4 p-4 rounded certificate-card">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <h3 className="h5 mb-1">{cert.name}</h3>
          <h4 className="h6">{cert.issuer}</h4>
        </div>
        <span className="badge flex-shrink-0 ms-3">{cert.date}</span>
      </div>
      <a 
        href={cert.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="certificate-link"
      >
        View Certificate <i className="fas fa-external-link-alt fa-xs ms-1"></i>
      </a>
    </div>
  );

  return (
    <section id="certifications" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">My Certifications</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="certificate-timeline">
              {certificatesData.map((cert, index) => (
                <CertificateCard key={index} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
