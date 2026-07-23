import React from 'react';
import companyLogo from '../assets/logo.png';
import type { HeaderProps, NavigationTab } from '../types';

/**
 * Header Component
 * Displays the iSignTech company logo on the left and header navigation menu on the right.
 */
const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'employees', label: 'Employees' },
    { id: 'departments', label: 'Departments' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="main-header">
      {/* Left Brand Area (Logo only) */}
      <div className="header-brand">
        <img src={companyLogo} alt="iSignTech Logo" className="header-company-logo" />
      </div>

      {/* Right Navigation Menu */}
      <nav className="header-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeTab === item.id ? 'nav-link active' : 'nav-link'}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
