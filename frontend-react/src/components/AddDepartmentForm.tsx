import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import type { AddDepartmentFormProps, Department } from '../types';

/**
 * AddDepartmentForm Component
 * Controlled form using React useState hook and event handlers
 * to register new departments into application state.
 */
const AddDepartmentForm: React.FC<AddDepartmentFormProps> = ({ onAddDepartment, onClose }) => {
  const [title, setTitle] = useState('');
  const [lead, setLead] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !lead.trim()) {
      setError('Please fill in all required fields (Department Name and Department Lead).');
      return;
    }

    const generatedId = `DEPT-${Math.floor(100 + Math.random() * 900)}`;

    const newDepartment: Department = {
      id: generatedId,
      title: title.trim(),
      lead: lead.trim(),
    };

    onAddDepartment(newDepartment);

    setTitle('');
    setLead('');
    setError('');

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <h2>🏢 Add New Department</h2>
          {onClose && (
            <button className="btn-close" onClick={onClose}>
              ✕
            </button>
          )}
        </div>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="add-employee-form">
          <div className="form-group">
            <label htmlFor="title">Department Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="e.g. Quality Assurance"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lead">Department Lead / Manager *</label>
            <input
              type="text"
              id="lead"
              name="lead"
              required
              placeholder="e.g. Deepika Joshi"
              value={lead}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLead(e.target.value)}
            />
          </div>

          <div className="form-actions">
            {onClose && (
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
            )}
            <button type="submit" className="btn-primary">
              ✓ Save Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartmentForm;
