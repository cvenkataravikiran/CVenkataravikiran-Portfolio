import React from 'react';

function Resume() {
  const handleDownload = (resumeType) => {
    const pdfUrls = {
      'AI_ML': 'resumes/ai-ml/Venkataravikiran.challa_Resume.pdf',
      'Data_Analytics': 'resumes/data-analytics/Venkataravikiran.challa_Resume.pdf'
    };
    const pdfUrl = pdfUrls[resumeType] || 'Venkataravikiran.challa_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  const resumes = [
    {
      type: 'AI_ML',
      title: 'AI/ML Resume',
      description: 'For AI, ML, and Deep Learning roles'
    },
    {
      type: 'Data_Analytics',
      title: 'Data Analytics Resume',
      description: 'For Data Analyst and BI roles'
    }
  ];

  return (
    <section id="resume" className="py-5">
      <div className="container py-4">
        <h2 className="text-center mb-4 section-title">My Resumes</h2>
        {/* <p className="text-center mb-4 text-muted">Choose the resume that best fits your needs</p> */}
        
        <div className="row justify-content-center g-4">
          {resumes.map((resume, index) => (
            <div key={index} className="col-lg-5 col-md-6">
              <div className="p-4 rounded resume-card glass-effect modern-card shadow-modern-lg h-100">
                <div className="text-center mb-4">
                  <h3 className="h5 mb-3 gradient-text">{resume.title}</h3>
                  <p className="mb-4 text-muted">{resume.description}</p>
                </div>
                
                <div className="d-flex gap-2">
                  <button 
                    onClick={() => handleDownload(resume.type)} 
                    className="btn btn-resume-download modern-btn glow-on-hover w-100"
                  >
                    <i className="fas fa-download me-2"></i> Download
                  </button>
                  <button 
                    onClick={() => handleDownload(resume.type)} 
                    className="btn btn-resume-view modern-btn glow-on-hover w-100"
                  >
                    <i className="fas fa-eye me-2"></i> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
