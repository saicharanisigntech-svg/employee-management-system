import React from 'react';
import StatCards from '../components/StatCards';
import QuickActions from '../components/QuickActions';
import type { HomeDashboardViewProps } from '../types';

/**
 * HomeDashboardView Component
 * Renders the main Dashboard landing layout with Employee Management System header on the left.
 */
const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({ setActiveTab }) => {
  return (
    <div className="home-dashboard-view">
      {/* Dashboard Top Title Section */}
      <div className="dashboard-top-header">
        <h1 className="dashboard-title">Employee Management System</h1>
        <p className="dashboard-subtitle">
          Welcome to the Admin Dashboard. Manage workforce records, departments, and attendance.
        </p>
      </div>

      {/* Top Stat Cards */}
      <StatCards />

      {/* Main Content Layout */}
      <div className="layout-content">
        {/* System Activity Overview Box */}
        <div className="section-box">
          <h2>System Activity Overview</h2>
          <p>
            Welcome to the Employee Management Dashboard. All systems are running smoothly.
          </p>
        </div>

        {/* Quick Actions Sidebar */}
        <QuickActions setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default HomeDashboardView;
