import React from 'react';

/**
 * EmployeesView Component
 * Renders the Employees directory table.
 */
function EmployeesView() {
  const employees = [
    { id: 'EMP-001', name: 'Jane Doe', department: 'Engineering', role: 'Software Engineer', status: 'Active' },
    { id: 'EMP-002', name: 'John Smith', department: 'Human Resources', role: 'HR Specialist', status: 'Active' },
    { id: 'EMP-003', name: 'Alice Johnson', department: 'Marketing', role: 'Lead Strategist', status: 'Active' },
  ];

  return (
    <div className="table-container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
              <td>
                <span className="badge badge-active">{emp.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesView;
