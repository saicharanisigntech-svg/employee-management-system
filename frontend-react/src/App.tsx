import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeDashboardView from './views/HomeDashboardView';
import EmployeesView from './views/EmployeesView';
import DepartmentsView from './views/DepartmentsView';
import AttendanceView from './views/AttendanceView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import { initialEmployees } from './data/initialEmployees';
import { initialDepartments } from './data/initialDepartments';
import type { NavigationTab, Employee, Department } from './types';

import './App.css';

/**
 * Main App Component
 * Stores employee and department records using the useState hook initialized with sample datasets.
 * Handles adding, deleting, and status toggling across central state.
 */
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  // Employee state initialized with sample dataset
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  // Department state initialized with sample dataset
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);

  // State handler to append a new employee record
  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees((prevEmployees) => [newEmployee, ...prevEmployees]);
  };

  // State handler to toggle an employee's status between 'Active' and 'Inactive'
  const handleToggleStatus = (id: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) => {
        if (emp.id === id) {
          const nextStatus = emp.status === 'Active' ? 'Inactive' : 'Active';
          return { ...emp, status: nextStatus };
        }
        return emp;
      })
    );
  };

  // State handler to remove an employee record from the list
  const handleRemoveEmployee = (id: string) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
  };

  // State handler to add a new department
  const handleAddDepartment = (newDepartment: Department) => {
    setDepartments((prevDepartments) => [newDepartment, ...prevDepartments]);
  };

  // State handler to delete a department
  const handleDeleteDepartment = (id: string) => {
    setDepartments((prevDepartments) => prevDepartments.filter((dept) => dept.id !== id && dept.title !== id));
  };

  // Render current view based on activeTab state
  const renderCurrentView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <HomeDashboardView
            employees={employees}
            departments={departments}
            setActiveTab={setActiveTab}
            onAddEmployee={handleAddEmployee}
            onToggleStatus={handleToggleStatus}
            onRemoveEmployee={handleRemoveEmployee}
          />
        );
      case 'employees':
        return (
          <EmployeesView
            employees={employees}
            departments={departments}
            onAddEmployee={handleAddEmployee}
            onToggleStatus={handleToggleStatus}
            onRemoveEmployee={handleRemoveEmployee}
          />
        );
      case 'departments':
        return (
          <DepartmentsView
            employees={employees}
            departments={departments}
            onAddDepartment={handleAddDepartment}
            onDeleteDepartment={handleDeleteDepartment}
          />
        );
      case 'attendance':
        return <AttendanceView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeDashboardView
            employees={employees}
            departments={departments}
            setActiveTab={setActiveTab}
            onAddEmployee={handleAddEmployee}
            onToggleStatus={handleToggleStatus}
            onRemoveEmployee={handleRemoveEmployee}
          />
        );
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
