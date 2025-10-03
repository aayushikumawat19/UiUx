import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import FormField from '../../components/comman/FormField';
import Button from '../../components/comman/Button';

const CreateMemo = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
    setErrors(prev => ({
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
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (!hasError) {
      console.log('Submitted Data:', formData);
      // navigate or process
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

    setFormData(prev => ({
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
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Salary Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                label="Basic salary"
                id="basicSalary"
                type="text"
                value={formData.basicSalary}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.basicSalary}
              />
              <FormField
                label="Housing allowance"
                id="housing"
                type="text"
                value={formData.housing}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.housing}
              />
              <FormField
                label="Transport allowance"
                id="transport"
                type="text"
                value={formData.transport}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.transport}
              />
              <FormField
                label="Utility allowance"
                id="utility"
                type="text"
                value={formData.utility}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.utility}
              />
              <FormField
                label="Productivity allowance"
                id="productivity"
                type="text"
                value={formData.productivity}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.productivity}
              />
              <FormField
                label="Communication allowance"
                id="communication"
                type="text"
                value={formData.communication}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.communication}
              />
              <FormField
                label="Inconvenience allowance"
                id="inconvenience"
                type="text"
                value={formData.inconvenience}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.inconvenience}
              />
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

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Deductions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                label="TAX/PAYE"
                id="tax"
                type="text"
                value={formData.tax}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.tax}
              />
              <FormField
                label="Employee pension"
                id="pension"
                type="text"
                value={formData.pension}
                placeholder="Enter amount"
                onChange={handleChange}
                errorMessage={errors.pension}
              />
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
