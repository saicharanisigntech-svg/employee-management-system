import React from 'react';
import Dashboard from '../components/Dashboard';
import type { HomeDashboardViewProps } from '../types';

/**
 * HomeDashboardView Component
 * View wrapper forwarding employees and departments state handlers to Dashboard.
 */
const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({
  employees,
  departments,
  setActiveTab,
  onAddEmployee,
  onToggleStatus,
  onRemoveEmployee,
}) => {
  return (
    <div className="home-dashboard-view">
      <Dashboard
        employees={employees}
        departments={departments}
        setActiveTab={setActiveTab}
        onAddEmployee={onAddEmployee}
        onToggleStatus={onToggleStatus}
        onRemoveEmployee={onRemoveEmployee}
      />
    </div>
  );
};

export default HomeDashboardView;
