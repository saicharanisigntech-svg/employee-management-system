import React from 'react';
import type { StatCardsProps, StatCardItem } from '../types';

/**
 * StatCards Component
 * Displays summary statistic cards on the Dashboard reflecting live state.
 */
const StatCards: React.FC<StatCardsProps> = ({
  totalEmployees = 12,
  totalDepartments = 2,
  presentToday = totalEmployees,
  pendingRequests = 0,
}) => {
  const stats: StatCardItem[] = [
    { title: 'Total Employees', value: totalEmployees.toString() },
    { title: 'Active Departments', value: totalDepartments.toString() },
    { title: "Today's Attendance", value: `${presentToday} Present` },
    { title: 'Pending Requests', value: pendingRequests.toString() },
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
};

export default StatCards;
