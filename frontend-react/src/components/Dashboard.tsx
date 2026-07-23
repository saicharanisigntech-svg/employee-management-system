import React, { useState } from 'react';
import StatCards from './StatCards';
import QuickActions from './QuickActions';
import EmployeeCard from './EmployeeCard';
import AddEmployeeForm from './AddEmployeeForm';
import type { DashboardProps } from '../types';

/**
 * Dashboard Component
 * Displays real-time workforce metrics and conditionally renders recent staff preview or "No Employees Available".
 */
const Dashboard: React.FC<DashboardProps> = ({
  employees,
  departments = [],
  setActiveTab,
  onAddEmployee,
  onToggleStatus,
  onRemoveEmployee,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);

  // Dynamic calculations from state
  const totalEmployees = employees.length;
  const activeDepartments = departments.length > 0
    ? departments.length
    : Array.from(new Set(employees.map((e) => e.department))).length;

  const activePresent = employees.filter((e) => e.status === 'Active').length;

  // Last 3 recently added staff members
  const recentEmployees = employees.slice(-3).reverse();

  return (
    <div className="dashboard-wrapper">
      {/* Add Employee Modal Dialog */}
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

      {/* Top Banner */}
      <div className="dashboard-welcome-banner">
        <div>
          <h2>👥 Employee Dashboard</h2>
          <p>Employee records and status management.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          + Add New Employee
        </button>
      </div>

      {/* KPI Metric Cards */}
      <StatCards
        totalEmployees={totalEmployees}
        totalDepartments={activeDepartments}
        presentToday={activePresent}
        pendingRequests={0}
      />

      {/* Grid Layout: Quick Operations & Recent Employees */}
      <div className="dashboard-grid-layout">
        {/* Quick Operations Sidebar Box */}
        <QuickActions
          setActiveTab={setActiveTab}
          onOpenAddModal={() => setShowAddModal(true)}
        />

        {/* Recent Employees Preview / Conditional Empty State */}
        <div className="section-box recent-employees-box">
          <div className="section-header-flex">
            <h2>Recent Staff Members</h2>
            <button className="btn-link" onClick={() => setActiveTab('employees')}>
              View Directory →
            </button>
          </div>

          {recentEmployees.length > 0 ? (
            <div className="recent-cards-container">
              {recentEmployees.map((emp) => (
                <EmployeeCard
                  key={emp.id}
                  id={emp.id}
                  name={emp.name}
                  department={emp.department}
                  designation={emp.role}
                  email={emp.email}
                  status={emp.status}
                  onViewDetails={() => setActiveTab('employees')}
                  onToggleStatus={onToggleStatus}
                  onRemoveEmployee={onRemoveEmployee}
                />
              ))}
            </div>
          ) : (
            /* Conditional Rendering for Empty List */
            <div className="empty-dashboard-preview">
              <span className="empty-icon">👥</span>
              <h4>No Employees Available</h4>
              <p>Register new workforce personnel to populate statistics.</p>
              <button
                className="btn-primary"
                style={{ marginTop: '0.75rem' }}
                onClick={() => setShowAddModal(true)}
              >
                + Add First Employee
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
