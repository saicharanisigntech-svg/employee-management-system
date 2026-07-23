import React, { useState } from 'react';
import type { EmployeeCardProps } from '../types';

/**
 * EmployeeCard Component
 * Displays individual employee details with status toggle and remove employee capabilities.
 */
const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
  department,
  designation,
  role,
  email,
  status,
  employee,
  onViewDetails,
  onToggleStatus,
  onRemoveEmployee,
}) => {
  // Resolve values from direct props or fallback to employee object prop
  const empId = id || employee?.id || 'EMP-000';
  const empName = name || employee?.name || 'Unknown Employee';
  const empDept = department || employee?.department || 'General';
  const empDesignation = designation || role || employee?.designation || employee?.role || 'Staff Member';
  const empEmail = email || employee?.email || `${empName.toLowerCase().replace(/\s+/g, '')}@isigntech.com`;
  const initialStatus = status || employee?.status || 'Active';

  // Fallback internal state using useState hook
  const [internalStatus, setInternalStatus] = useState<'Active' | 'On Leave' | 'Inactive'>(initialStatus);

  // Sync internal state if prop status changes
  const currentStatus = status || employee?.status || internalStatus;

  // Toggle handler
  const handleToggle = () => {
    if (onToggleStatus) {
      onToggleStatus(empId);
    } else {
      setInternalStatus((prev) => (prev === 'Active' ? 'Inactive' : 'Active'));
    }
  };

  // Remove handler
  const handleRemove = () => {
    if (onRemoveEmployee) {
      onRemoveEmployee(empId);
    }
  };

  // Helper to generate avatar initials
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  // Status color badge class
  const getStatusClass = (st: string) => {
    switch (st.toLowerCase()) {
      case 'active':
        return 'badge-active';
      case 'on leave':
        return 'badge-leave';
      case 'inactive':
        return 'badge-inactive';
      default:
        return 'badge-active';
    }
  };

  return (
    <div className={`employee-card ${currentStatus === 'Inactive' ? 'card-inactive' : ''}`}>
      <div className="employee-card-header">
        <div className="avatar-circle">{getInitials(empName)}</div>
        <div className="header-actions">
          <span className={`status-badge ${getStatusClass(currentStatus)}`}>
            ● {currentStatus}
          </span>
          {onRemoveEmployee && (
            <button
              className="btn-remove-employee"
              onClick={handleRemove}
              title={`Remove ${empName} from system`}
            >
              🗑️
            </button>
          )}
        </div>
      </div>

      <div className="employee-card-body">
        <h3 className="employee-name">{empName}</h3>
        <p className="employee-role">{empDesignation}</p>
        <p className="employee-email">✉️ {empEmail}</p>
        <span className="employee-dept-tag">🏢 {empDept}</span>
      </div>

      <div className="employee-card-footer">
        <button
          className={`btn-toggle-status ${currentStatus === 'Active' ? 'btn-toggle-active' : 'btn-toggle-inactive'}`}
          onClick={handleToggle}
          title={`Click to set status to ${currentStatus === 'Active' ? 'Inactive' : 'Active'}`}
        >
          🔄 {currentStatus === 'Active' ? 'Set Inactive' : 'Set Active'}
        </button>

        {onViewDetails && (
          <button
            className="btn-view-details"
            onClick={() => onViewDetails(empId)}
          >
            Details →
          </button>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
