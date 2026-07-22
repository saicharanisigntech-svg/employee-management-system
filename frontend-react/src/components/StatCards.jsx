import React from 'react';

/**
 * StatCards Component
 * Displays summary statistic cards on the Dashboard.
 */
function StatCards() {
  const stats = [
    { title: 'Total Employees', value: '250' },
    { title: 'Departments', value: '8' },
    { title: "Today's Attendance", value: '235 Present' },
    { title: 'Pending Requests', value: '12' },
  ];

  return (
    <div className="dashboard-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.title}</h3>
          <div className="value">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
