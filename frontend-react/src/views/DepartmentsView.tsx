import React, { useState } from 'react';
import AddDepartmentForm from '../components/AddDepartmentForm';
import type { DepartmentsViewProps } from '../types';

/**
 * DepartmentsView Component
 * Calculates employee member headcount per department dynamically from employees state.
 * Allows adding new departments and deleting existing departments in real-time.
 */
const DepartmentsView: React.FC<DepartmentsViewProps> = ({
  employees,
  departments,
  onAddDepartment,
  onDeleteDepartment,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="departments-view">
      {/* Modal Dialog */}
      {showAddModal && (
        <AddDepartmentForm
          onAddDepartment={(newDept) => {
            onAddDepartment(newDept);
            setShowAddModal(false);
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Action Header */}
      <div className="view-action-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Organization Departments</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Manage company operational divisions, team leads, and live staff allocation.
          </p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          + Add New Department
        </button>
      </div>

      {/* Grid of Department Cards */}
      {departments.length > 0 ? (
        <div className="dept-grid">
          {departments.map((dept) => {
            // Live calculation of employee member count per department
            const liveMemberCount = employees.filter(
              (emp) => emp.department.toLowerCase() === dept.title.toLowerCase()
            ).length;

            return (
              <div key={dept.id || dept.title} className="dept-card">
                <div className="dept-card-header">
                  <span className="dept-icon">🏢</span>
                  <button
                    className="btn-delete-dept"
                    onClick={() => onDeleteDepartment(dept.id)}
                    title={`Delete ${dept.title} department`}
                  >
                    🗑️
                  </button>
                </div>

                <div className="dept-card-body">
                  <h3 className="dept-title">{dept.title}</h3>
                  <p className="dept-lead">👤 Lead: {dept.lead}</p>
                </div>

                <div className="dept-card-footer">
                  <span className="dept-members-count">
                    👥 {liveMemberCount} {liveMemberCount === 1 ? 'Employee' : 'Employees'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Conditional Empty State */
        <div className="empty-state-card">
          <div className="empty-icon">🏢</div>
          <h3 className="empty-title">No Departments Available</h3>
          <p className="empty-subtitle">
            There are no active departments in the organization. Click below to create your first department.
          </p>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}>
            + Add First Department
          </button>
        </div>
      )}
    </div>
  );
};

export default DepartmentsView;
