import React from 'react';

/**
 * AttendanceView Component
 * Renders the attendance tracker section.
 */
const AttendanceView: React.FC = () => {
  return (
    <div className="attendance-card">
      <h2>Today's Attendance Overview</h2>
      <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
        12 / 12 Employees Checked In
      </p>
    </div>
  );
};

export default AttendanceView;
