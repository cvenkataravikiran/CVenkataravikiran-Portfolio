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
                  I’m currently pursuing my Master of Computer Applications (MCA) and have a strong interest in working with data and building useful solutions. I enjoy exploring how data can be used to find insights and solve real-world problems.<br/><br/>
                  I have a basic background in programming, databases, and software development, and I’m gradually focusing more on data analytics. I like creating dashboards and analyzing datasets using tools like Python, SQL, PowerBI and Excel.<br/><br/>
                  I’m also learning about AI and machine learning and how they connect with data. Right now, my goal is to improve my skills, work on real projects and gain practical experience in the field of data analytics.
                  {/* I’m currently pursuing a Master’s of Computer Applications (MCA) with a strong interest in building real-world technology that combines functionality with purpose. With a background in programming, software development, and database systems, I enjoy turning ideas into practical and effective digital solutions. */}
                  {/* I have a growing curiosity about artificial intelligence and machine learning, and I actively explore how they can be applied to create smarter, user-focused applications. I am continuously learning and improving, and I aim to contribute to meaningful projects that solve real-world problems. */}
                
                { /* I’m a BSc Computer Science graduate with a strong interest in building real-world technology that combines functionality with purpose. With a background in programming, software development, and database systems, I enjoy turning ideas into practical and effective digital solutions. */}
                  { /*  I have a growing curiosity about artificial intelligence and machine learning, and I actively explore how they can be used to create smarter, user-focused applications. I’m continuously learning and improving, and I aim to contribute to meaningful projects that solve real-world problems. */}
                  {/* I am a BSc Computer Science graduate with a strong foundation in technical skills including programming, database management and software development. I am passionate about exploring AI/ML concepts and actively use AI tools to develop intelligent, user-centric digital solutions with a detail-oriented approach and a commitment to continuous learning, I aim to contribute to innovative, real-world technology projects that make a meaningful impact. */}
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
