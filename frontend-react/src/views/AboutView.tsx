import React from 'react';

/**
 * AboutView Component
 * Renders system description and details.
 */
const AboutView: React.FC = () => {
  return (
    <div className="about-card">
      <h2>About Employee Dashboard</h2>
      <p style={{ marginBottom: '1rem' }}>
        Employee Dashboard is a modular workforce administration platform designed for employee records and status management, tracking daily attendance, overseeing departments, and delivering organizational analytics.
      </p>
    </div>
  );
};

export default AboutView;
