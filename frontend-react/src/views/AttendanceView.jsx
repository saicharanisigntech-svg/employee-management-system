import React from 'react';

/**
 * AttendanceView Component
 * Renders the attendance tracker section.
 */
function AttendanceView() {
  return (
    <div className="attendance-card">
      <h2>Today's Attendance Overview</h2>
      <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
        235 / 250 Employees Checked In
      </p>
    </div>
  );
}

export default AttendanceView;
