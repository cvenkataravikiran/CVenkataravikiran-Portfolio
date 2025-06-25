import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false });
    const payload = {
      ...formData,
      access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
      subject: `New Contact Form Message from ${formData.name}`,
      from_name: "CVENKATARAVIKIRAN PORTFOLIO",
    };
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ submitting: false, error: null, success: true });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus({ submitting: false, error: error.message, success: false });
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <h2 className="text-center mb-5 section-title">
          Contact Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 rounded card-content-box">
              <div className="row mb-4">
                <div className="col-md-4 mb-4 mb-md-0"><div className="text-center"><a href="mailto:venkataravikiran.challa@gmail.com" className="text-decoration-none d-inline-block contact-icon-link" title="Send me an email"><div className="contact-icon-wrapper"><i className="fas fa-envelope fa-2x"></i><h3 className="h6 mt-2 mb-0">Email</h3></div></a></div></div>
                <div className="col-md-4 mb-4 mb-md-0"><div className="text-center"><a href="tel:+919490595604" className="text-decoration-none d-inline-block contact-icon-link" title="Call me"><div className="contact-icon-wrapper"><i className="fas fa-phone fa-2x"></i><h3 className="h6 mt-2 mb-0">Phone</h3></div></a></div></div>
                <div className="col-md-4"><div className="text-center"><a href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India" className="text-decoration-none d-inline-block contact-icon-link" target="_blank" rel="noopener noreferrer" title="View location on Google Maps"><div className="contact-icon-wrapper"><i className="fas fa-map-marker-alt fa-2x"></i><h3 className="h6 mt-2 mb-0">Location</h3></div></a></div></div>
              </div>
              
              {status.error && (<div className="alert alert-danger mb-4" role="alert">{status.error}</div>)}
              {status.success && (<div className="alert alert-success mb-4" role="alert">Message sent successfully! Thank you for reaching out.</div>)}

              <form onSubmit={handleSubmit}>
                <div className="mb-3"><input type="text" className="form-control contact-input" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required /></div>
                <div className="mb-3"><input type="email" className="form-control contact-input" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required /></div>
                <div className="mb-3"><textarea className="form-control contact-input" rows="5" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required></textarea></div>
                <button type="submit" className="btn btn-lg w-100 btn-submit" disabled={status.submitting}>{status.submitting ? 'Sending...' : 'Send Message'}</button>
              </form>

              <div className="mt-4 text-center">
                <a href="https://github.com/cvenkataravikiran" target="_blank" rel="noopener noreferrer" className="text-decoration-none d-inline-block mx-3 social-link" title="GitHub"><div className="contact-icon-wrapper"><i className="fab fa-github fa-2x"></i><h3 className="h6 mt-2 mb-0">GitHub</h3></div></a>
                <a href="https://www.linkedin.com/in/venkataravikiran/" target="_blank" rel="noopener noreferrer" className="text-decoration-none d-inline-block mx-3 social-link" title="LinkedIn"><div className="contact-icon-wrapper"><i className="fab fa-linkedin fa-2x"></i><h3 className="h6 mt-2 mb-0">LinkedIn</h3></div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;