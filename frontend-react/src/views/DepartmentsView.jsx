import React from 'react';

/**
 * DepartmentsView Component
 * Renders department cards grid.
 */
function DepartmentsView() {
  const departments = [
    { title: 'Engineering', members: '85 Employees', lead: 'Tech Operations' },
    { title: 'Human Resources', members: '15 Employees', lead: 'People Relations' },
    { title: 'Marketing', members: '30 Employees', lead: 'Growth & Brand' },
    { title: 'Finance', members: '20 Employees', lead: 'Financial Planning' },
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
}

export default DepartmentsView;
