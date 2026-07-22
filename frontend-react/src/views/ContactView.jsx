import React, { useState } from 'react';

/**
 * ContactView Component
 * Renders contact support form with controlled React inputs.
 */
function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-card">
      <h2 style={{ marginBottom: '1.5rem' }}>Contact Support</h2>

      {submitted && (
        <div className="success-banner" style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#10b98122', border: '1px solid #10b981', borderRadius: '0.5rem', color: '#10b981' }}>
          ✓ Thank you! Your request has been submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            required
            placeholder="Enter message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
}

export default ContactView;
