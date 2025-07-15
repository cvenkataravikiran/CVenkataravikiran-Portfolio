import React from 'react';

function Footer() {
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/cvenkataravikiran' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/venkataravikiran/' },
  ];

  return (
    <footer className="py-4 site-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h3 className="h6 mb-0">Challa Venkata Ravi Kiran</h3>
            <p className="small mb-0">Full Stack Developer, AI/ML Explorer</p>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none social-link-item"
                >
                  <i className={`${link.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="small mb-0">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;