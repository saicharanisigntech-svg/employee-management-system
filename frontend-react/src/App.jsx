import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomeDashboardView from './views/HomeDashboardView.jsx';
import EmployeesView from './views/EmployeesView.jsx';
import DepartmentsView from './views/DepartmentsView.jsx';
import AttendanceView from './views/AttendanceView.jsx';
import AboutView from './views/AboutView.jsx';
import ContactView from './views/ContactView.jsx';

import './App.css';

/**
 * Main App Component
 * Manages activeTab state and renders top integrated Header, current view, and Footer.
 */
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

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
}

export default App;
