import React from 'react';

/**
 * QuickActions Component
 * Renders quick navigation buttons on the Dashboard sidebar.
 */
function QuickActions({ setActiveTab }) {
  const actions = [
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
}

export default QuickActions;
