import React from 'react';
import type { Department } from '../types';

/**
 * DepartmentsView Component
 * Renders department cards grid.
 */
const DepartmentsView: React.FC = () => {
  const departments: Department[] = [
    { title: 'Engineering', members: '11 Employees', lead: 'Tech Operations' },
    { title: 'Marketing', members: '1 Employees', lead: 'Growth & Brand' },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Organization Departments</h2>
      <div className="dept-grid">
        {departments.map((dept, index) => (
          <div key={index} className="dept-card">
            <h3>{dept.title}</h3>
            <p>Members: {dept.members}</p>
            <p>Lead: {dept.lead}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsView;
