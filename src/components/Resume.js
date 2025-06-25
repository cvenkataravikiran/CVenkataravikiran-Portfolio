import React from 'react';

function Resume() {
  const handleDownload = () => {
    const pdfUrl = 'Venkataravikiran.challa_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="resume" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">Resume</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="p-4 rounded resume-card">
              <p className="mb-4">
                View or download my complete resume to know more about my skills, projects , experience, and qualifications.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button onClick={handleDownload} className="btn btn-lg btn-resume-download">
                  <i className="fas fa-download me-2"></i> Download Resume
                </button>
                <button onClick={handleDownload} className="btn btn-lg btn-resume-view">
                  <i className="fas fa-eye me-2"></i> View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;