import React from 'react';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">
          About Me
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="profile-image-container">
              <img
                src="/images/profile-picture.jpg"
                alt="Professional Profile"
                className="img-fluid rounded-3"
              />
              <div className="image-overlay rounded-3"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 rounded card-content-box">
              <h3 className="mb-4">
                Who I Am
              </h3>
              <p>
                <h5>
                  I am a BSc Computer Science graduate with a strong foundation in technical skills including programming, database management and software development. I am passionate about exploring AI/ML concepts and actively use AI tools to develop intelligent, user-centric digital solutions with a detail-oriented approach and a commitment to continuous learning, I aim to contribute to innovative, real-world technology projects that make a meaningful impact.
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;