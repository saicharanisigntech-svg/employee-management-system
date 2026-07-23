import React from 'react';
import type { SidebarProps, NavigationTab } from '../types';

/**
 * Sidebar Component
 * Reusable vertical navigation bar with active tab indicators and icons.
 */
const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems: { id: NavigationTab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'employees', label: 'Employees', icon: '👥' },
    { id: 'departments', label: 'Departments', icon: '🏢' },
    { id: 'attendance', label: 'Attendance', icon: '📋' },
    { id: 'about', label: 'About System', icon: 'ℹ️' },
    { id: 'contact', label: 'Support & Contact', icon: '💬' },
  ];

  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">👥</span>
        <span className="sidebar-brand-name">Employee Dashboard</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="link-icon">{item.icon}</span>
                <span className="link-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="system-status">
          <span className="status-dot"></span>
          <span>System Online</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
