import React, { useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import AddEmployeeForm from '../components/AddEmployeeForm';
import type { EmployeesViewProps } from '../types';

/**
 * EmployeesView Component
 * Renders the Employee Directory using state passed down from App.tsx.
 * Provides AddEmployeeForm modal, status toggle, and conditional empty rendering.
 */
const EmployeesView: React.FC<EmployeesViewProps> = ({
  employees,
  departments,
  onAddEmployee,
  onToggleStatus,
  onRemoveEmployee,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="employees-view">
      {/* Modal Dialog */}
      {showAddModal && (
        <AddEmployeeForm
          departments={departments}
          onAddEmployee={(newEmp) => {
            onAddEmployee(newEmp);
            setShowAddModal(false);
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Action Header */}
      <div className="view-action-header" style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Employee Management System</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Manage employee records, departments, and work status.
          </p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          + Add New Employee
        </button>
      </div>

      <EmployeeList
        employees={employees}
        title="Employee List"
        onOpenAddModal={() => setShowAddModal(true)}
        onToggleStatus={onToggleStatus}
        onRemoveEmployee={onRemoveEmployee}
      />
    </div>
  );
};

export default EmployeesView;
