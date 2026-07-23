import React from 'react';
import type { QuickActionsProps, NavigationTab } from '../types';

/**
 * QuickActions Component
 * Renders quick navigation buttons on the Dashboard sidebar.
 */
const QuickActions: React.FC<QuickActionsProps> = ({ setActiveTab }) => {
  const actions: { label: string; targetTab: NavigationTab }[] = [
    { label: '+ Add New Employee', targetTab: 'employees' },
    { label: 'View Attendance Report', targetTab: 'attendance' },
    { label: 'Manage Departments', targetTab: 'departments' },
    { label: 'Contact Support', targetTab: 'contact' },
  ];

  return (
    <div className="section-box">
      <h2>Quick Actions</h2>
      <ul className="action-list">
        {actions.map((action, index) => (
          <li key={index}>
            <a
              href={`#${action.targetTab}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(action.targetTab);
              }}
            >
              {action.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickActions;
