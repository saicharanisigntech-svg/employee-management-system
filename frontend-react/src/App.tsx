import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeDashboardView from './views/HomeDashboardView';
import EmployeesView from './views/EmployeesView';
import DepartmentsView from './views/DepartmentsView';
import AttendanceView from './views/AttendanceView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import type { NavigationTab } from './types';

import './App.css';

/**
 * Main App Component
 * Manages activeTab state and renders top integrated Header, current view, and Footer.
 */
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  // Render the current view based on activeTab
  const renderCurrentView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <HomeDashboardView setActiveTab={setActiveTab} />;
      case 'employees':
        return <EmployeesView />;
      case 'departments':
        return <DepartmentsView />;
      case 'attendance':
        return <AttendanceView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeDashboardView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Integrated Header with Logo & Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Area */}
      <main className="main-content">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
