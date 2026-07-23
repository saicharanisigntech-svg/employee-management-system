import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import type { AddEmployeeFormProps, Employee } from '../types';

/**
 * AddEmployeeForm Component
 * Controlled form using React useState hook and event handlers (onChange, onSubmit)
 * to register new employees into application state.
 */
const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({
  departments = [],
  onAddEmployee,
  onClose,
}) => {
  // Default department fallback if departments prop is empty
  const defaultDept = departments.length > 0 ? departments[0].title : 'Engineering';

  // Form input state using useState hook
  const [formData, setFormData] = useState({
    name: '',
    department: defaultDept,
    role: '',
    email: '',
    status: 'Active' as 'Active' | 'On Leave' | 'Inactive',
  });

  const [error, setError] = useState('');

  // Event handler for controlled input updates
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.role.trim()) {
      setError('Please fill in all required fields (Name and Role).');
      return;
    }

    const generatedId = `EMP-${Math.floor(100 + Math.random() * 900)}`;

    const newEmployee: Employee = {
      id: generatedId,
      name: formData.name.trim(),
      department: formData.department,
      role: formData.role.trim(),
      email: formData.email.trim() || `${formData.name.toLowerCase().replace(/\s+/g, '')}@isigntech.com`,
      status: formData.status,
    };

    onAddEmployee(newEmployee);

    setFormData({
      name: '',
      department: defaultDept,
      role: '',
      email: '',
      status: 'Active',
    });
    setError('');

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <h2>➕ Add New Employee</h2>
          {onClose && (
            <button className="btn-close" onClick={onClose}>
              ✕
            </button>
          )}
        </div>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="add-employee-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Alex Rivera"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role / Designation *</label>
            <input
              type="text"
              id="role"
              name="role"
              required
              placeholder="e.g. Senior Frontend Developer"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. alex.rivera@isigntech.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                {departments.length > 0 ? (
                  departments.map((dept) => (
                    <option key={dept.id || dept.title} value={dept.title}>
                      {dept.title}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Design">Design</option>
                    <option value="Sales">Sales</option>
                  </>
                )}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            {onClose && (
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
            )}
            <button type="submit" className="btn-primary">
              ✓ Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
