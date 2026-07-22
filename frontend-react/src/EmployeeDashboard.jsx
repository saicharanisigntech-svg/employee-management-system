import React from 'react';

/**
 * EmployeeDashboard Component
 * Reusable dashboard component displaying system overview, statistics, and quick metrics.
 */
const EmployeeDashboard = () => {
  // Sample initial data for dashboard metrics
  const stats = [
    { label: 'Total Employees', value: '148', change: '+12% this month', icon: '👥', color: 'blue' },
    { label: 'Active Departments', value: '8', change: 'All Operational', icon: '🏢', color: 'purple' },
    { label: 'Present Today', value: '136', change: '92% Attendance', icon: '✅', color: 'green' },
    { label: 'Pending Requests', value: '5', change: 'Requires Action', icon: '⏳', color: 'amber' },
  ];

  const recentEmployees = [
    { id: 'EMP-101', name: 'Sarah Jenkins', role: 'Senior Frontend Developer', department: 'Engineering', status: 'Active' },
    { id: 'EMP-102', name: 'Alex Rivera', role: 'Product Designer', department: 'Design', status: 'Active' },
    { id: 'EMP-103', name: 'Michael Chen', role: 'Backend Lead', department: 'Engineering', status: 'On Leave' },
    { id: 'EMP-104', name: 'Emily Davis', role: 'HR Specialist', department: 'Human Resources', status: 'Active' },
  ];

  return (
    <div className="dashboard-container">
      {/* Top Banner Header */}
      <header className="dashboard-header">
        <div className="header-brand">
          <span className="brand-logo">⚡</span>
          <div>
            <h1 className="header-title">Employee Management System</h1>
            <p className="welcome-message">
              Welcome to the Employee Dashboard! Manage your workspace, view employee directory, and monitor real-time company statistics.
            </p>
          </div>
        </div>
        <div className="user-badge">
          <div className="avatar">AD</div>
          <div className="user-info">
            <span className="user-name">Admin Portal</span>
            <span className="user-status">● Online</span>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="dashboard-body">
        {/* Statistics Overview Cards */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card stat-${stat.color}`}>
              <div className="stat-card-header">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-change">{stat.change}</span>
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Action Panel & Employee Quick List */}
        <div className="content-grid">
          {/* Quick Actions Panel */}
          <section className="dashboard-card actions-card">
            <h2 className="card-title">Quick Operations</h2>
            <p className="card-subtitle">Perform common administrative tasks</p>
            <div className="action-buttons">
              <button className="btn btn-primary">+ Add New Employee</button>
              <button className="btn btn-secondary">📋 Mark Attendance</button>
              <button className="btn btn-secondary">📊 Generate Payroll</button>
              <button className="btn btn-secondary">⚙️ System Settings</button>
            </div>
          </section>

          {/* Recent Employees Table Overview */}
          <section className="dashboard-card table-card">
            <div className="card-header-flex">
              <div>
                <h2 className="card-title">Recent Employees</h2>
                <p className="card-subtitle">Overview of recently added staff members</p>
              </div>
              <button className="btn btn-link">View All →</button>
            </div>
            
            <div className="table-responsive">
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEmployees.map((emp) => (
                    <tr key={emp.id}>
                      <td className="emp-id">{emp.id}</td>
                      <td>
                        <div className="emp-profile">
                          <span className="emp-name">{emp.name}</span>
                          <span className="emp-role">{emp.role}</span>
                        </div>
                      </td>
                      <td>{emp.department}</td>
                      <td>
                        <span className={`status-badge ${emp.status.toLowerCase().replace(' ', '-')}`}>
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
