import React, { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import FormField from '@comman/FormField';
import Button from '@comman/Button';

interface FormData {
  [key: string]: string;
  basicSalary: string;
  housing: string;
  transport: string;
  utility: string;
  productivity: string;
  communication: string;
  inconvenience: string;
  tax: string;
  pension: string;
  gross: string;
  deduction: string;
  netSalary: string;
}

const CreateMemo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    basicSalary: '',
    housing: '',
    transport: '',
    utility: '',
    productivity: '',
    communication: '',
    inconvenience: '',
    tax: '',
    pension: '',
    gross: '',
    deduction: '',
    netSalary: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const newErrors: { [key: string]: string } = {};

    const requiredFields = [
      'basicSalary',
      'housing',
      'transport',
      'utility',
      'productivity',
      'communication',
      'inconvenience',
      'tax',
      'pension',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = 'This field is required';
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (!hasError) {
      console.log('Submitted Data:', formData);
    }
  };

  useEffect(() => {
    const toNumber = (val: string) => parseFloat(val) || 0;

    const gross =
      toNumber(formData.basicSalary) +
      toNumber(formData.housing) +
      toNumber(formData.transport) +
      toNumber(formData.utility) +
      toNumber(formData.productivity) +
      toNumber(formData.communication) +
      toNumber(formData.inconvenience);

    const deduction = toNumber(formData.tax) + toNumber(formData.pension);
    const net = gross - deduction;

    setFormData((prev) => ({
      ...prev,
      gross: gross.toFixed(2),
      deduction: deduction.toFixed(2),
      netSalary: net.toFixed(2),
    }));
  }, [
    formData.basicSalary,
    formData.housing,
    formData.transport,
    formData.utility,
    formData.productivity,
    formData.communication,
    formData.inconvenience,
    formData.tax,
    formData.pension,
  ]);

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6">
        <button className="text-blue-600 hover:underline mb-4">&larr; Back</button>
        <h2 className="text-2xl font-semibold mb-6">Create Payslip</h2>

        <form onSubmit={handleSubmit}>
          {/* Salary Structure */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Salary Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Basic salary', id: 'basicSalary' },
                { label: 'Housing allowance', id: 'housing' },
                { label: 'Transport allowance', id: 'transport' },
                { label: 'Utility allowance', id: 'utility' },
                { label: 'Productivity allowance', id: 'productivity' },
                { label: 'Communication allowance', id: 'communication' },
                { label: 'Inconvenience allowance', id: 'inconvenience' },
              ].map((field) => (
                <FormField
                  key={field.id}
                  label={field.label}
                  id={field.id}
                  type="text"
                  value={formData[field.id]}
                  placeholder="Enter amount"
                  onChange={handleChange}
                  error={errors[field.id]}
                />
              ))}
              <FormField
                label="Gross Salary"
                id="gross"
                type="text"
                value={formData.gross}
                readOnly
                onChange={() => {}}
              />
            </div>
          </div>

          {/* Deductions */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Deductions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'TAX/PAYE', id: 'tax' },
                { label: 'Employee pension', id: 'pension' },
              ].map((field) => (
                <FormField
                  key={field.id}
                  label={field.label}
                  id={field.id}
                  type="text"
                  value={formData[field.id]}
                  placeholder="Enter amount"
                  onChange={handleChange}
                  error={errors[field.id]}
                />
              ))}
              <FormField
                label="Total deduction"
                id="deduction"
                type="text"
                value={formData.deduction}
                readOnly
                onChange={() => {}}
              />
            </div>
          </div>

          {/* Net Salary */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Net Salary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                label="Net salary"
                id="netSalary"
                type="text"
                value={formData.netSalary}
                readOnly
                onChange={() => {}}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <Button
              text="Create Payslip"
              type="submit"
              onClick={() => {}}
              link={null}
              className="w-full md:w-60 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMemo;
