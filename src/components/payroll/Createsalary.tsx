import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import FormField from '@comman/FormField';
import { Link, useNavigate } from 'react-router-dom';

const Createsalary = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    sentTo: '',
    level: '',
    allowance: '',
    netSalary: '',
    grossSalary: '',
    deductions: '',
    basicSalary: '',
  });

  const [errors, setErrors] = useState({
    sentTo: '',
    level: '',
    allowance: '',
    netSalary: '',
    grossSalary: '',
    deductions: '',
    basicSalary: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let newErrors = { ...errors };
    let hasError = false;

    Object.entries(formValues).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key as keyof typeof errors] = 'This field is required';
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (!hasError) {
      console.log('Form Submitted:', formValues);
      navigate('/dashboard/Createsalary/Createsalaryy');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow-md">
      <Link to="" className="text-blue-600 hover:underline mb-4 inline-block text-sm">
        ← Back
      </Link>
      <h2 className="text-2xl font-semibold mb-6">Create Circular</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            label="Title"
            id="sentTo"
            type="select"
            options={[
              { value: '', label: 'Select option' },
              { value: 'office1', label: 'Office 1' },
              { value: 'office2', label: 'Office 2' },
            ]}
            value={formValues.sentTo}
            onChange={handleChange}
            error={errors.sentTo}
          />

          <FormField
            label="Level"
            id="level"
            type="select"
            options={[
              { value: '', label: 'Select option' },
              { value: 'level1', label: 'Level 1' },
              { value: 'level2', label: 'Level 2' },
            ]}
            value={formValues.level}
            onChange={handleChange}
            error={errors.level}
          />

          <FormField
            label="Basic Salary"
            id="basicSalary"
            type="text"
            placeholder="Enter Salary"
            value={formValues.basicSalary}
            onChange={handleChange}
            error={errors.basicSalary}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            label="Allowance"
            id="allowance"
            type="text"
            placeholder="Enter allowance"
            value={formValues.allowance}
            onChange={handleChange}
            error={errors.allowance}
          />

          <FormField
            label="Gross Salary"
            id="grossSalary"
            type="text"
            placeholder="Enter Gross Salary"
            value={formValues.grossSalary}
            onChange={handleChange}
            error={errors.grossSalary}
          />

          <FormField
            label="Deductions"
            id="deductions"
            type="text"
            placeholder="Enter Deductions"
            value={formValues.deductions}
            onChange={handleChange}
            error={errors.deductions}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            label="Net Salary"
            id="netSalary"
            type="text"
            placeholder="Enter net salary"
            value={formValues.netSalary}
            onChange={handleChange}
            error={errors.netSalary}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Create Salary Definition
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createsalary;
