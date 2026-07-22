import React from 'react';

/**
 * AboutView Component
 * Renders system description and details.
 */
function AboutView() {
  return (
    <div className="about-card">
      <h2>About Employee Management System</h2>
      <p style={{ marginBottom: '1rem' }}>
        The Employee Management System is a modular workforce administration platform designed to manage staff records, track daily attendance, oversee departments, and deliver organizational analytics.
      </p>
      <p>Version: 2.0.0 (React Web Architecture)</p>
    </div>
  );
}

export default AboutView;
