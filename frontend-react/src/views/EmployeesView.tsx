import React from 'react';
import type { Employee } from '../types';

/**
 * EmployeesView Component
 * Renders the Employees directory table.
 */
const EmployeesView: React.FC = () => {
  const employees: Employee[] = [
    { id: 'EMP-001', name: 'Sai Gopal', department: 'Engineering', role: 'Associate Software Engineer', status: 'Active' },
    { id: 'EMP-002', name: 'Sivakumar', department: 'Engineering', role: 'Associate Software Engineer', status: 'Active' },
    { id: 'EMP-003', name: 'Sai Charan', department: 'Engineering', role: 'Associate Software Engineer', status: 'Active' },
    { id: 'EMP-004', name: 'Rohith', department: 'Engineering', role: 'Senior Software Engineer', status: 'Active' },
    { id: 'EMP-005', name: 'Dheeraj', department: 'Engineering', role: 'Associate Software Engineer', status: 'Active' },
    { id: 'EMP-006', name: 'Hema', department: 'Engineering', role: 'Senior Software Engineer', status: 'Active' },
    { id: 'EMP-007', name: 'Ganga', department: 'Engineering', role: 'Senior Software Engineer', status: 'Active' },
    { id: 'EMP-008', name: 'Pavan Kumar', department: 'Engineering', role: 'Senior Software Engineer', status: 'Active' },
    { id: 'EMP-009', name: 'Sreenitha', department: 'Marketing', role: 'Senior Marketing Lead', status: 'Active' },
    { id: 'EMP-010', name: 'Mahesh', department: 'Engineering', role: 'Senior Software Engineer', status: 'Active' },
    { id: 'EMP-011', name: 'Sindhuja', department: 'Engineering', role: 'Senior Software Engineer', status: 'Active' },
    { id: 'EMP-012', name: 'Poojitha', department: 'Engineering', role: 'Associate Software Engineer', status: 'Active' },
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
};

export default EmployeesView;
