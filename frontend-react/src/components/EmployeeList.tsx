import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import type { EmployeeListProps } from '../types';

/**
 * EmployeeList Component
 * Utilizes conditional rendering to display "No Employees Available" when workforce list is empty,
 * or search query match messages when filters produce 0 results.
 */
const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  title = 'Employee List',
  onViewDetails,
  onOpenAddModal,
  onToggleStatus,
  onRemoveEmployee,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  // Extract unique departments for filter dropdown
  const departments = ['All', ...Array.from(new Set(employees.map((e) => e.department)))];

  // Filter employees based on search query and selected department
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (emp.email && emp.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = selectedDept === 'All' || emp.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  // Conditional Rendering: Whole application state has 0 employees
  if (employees.length === 0) {
    return (
      <div className="employee-list-container">
        <div className="employee-list-header">
          <div>
            <h2>{title}</h2>
            <p className="subtitle">Total Workforce: 0 Members</p>
          </div>
        </div>

        <div className="empty-state-card">
          <div className="empty-icon">👥</div>
          <h3 className="empty-title">No Employees Available</h3>
          <p className="empty-subtitle">
            The employee directory is currently empty. Click the button below to add your first staff member.
          </p>
          {onOpenAddModal && (
            <button className="btn-primary" onClick={onOpenAddModal}>
              + Add First Employee
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="employee-list-container">
      <div className="employee-list-header">
        <div>
          <h2>{title}</h2>
          <p className="subtitle">Total Workforce: {filteredEmployees.length} Members</p>
        </div>

        {/* Filter & Search Bar */}
        <div className="filter-controls">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search name, role, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="dept-select"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept} Department
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Conditional Rendering: Search/Filter returned 0 results vs grid */}
      {filteredEmployees.length > 0 ? (
        <div className="employee-cards-grid">
          {filteredEmployees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              id={emp.id}
              name={emp.name}
              department={emp.department}
              designation={emp.designation || emp.role}
              email={emp.email}
              status={emp.status}
              onViewDetails={onViewDetails}
              onToggleStatus={onToggleStatus}
              onRemoveEmployee={onRemoveEmployee}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No employees found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
