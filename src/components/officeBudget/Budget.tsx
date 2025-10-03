import React, { useState, type ChangeEvent } from 'react';
import FormField from '@comman/FormField';
import Button from '@comman/Button';
import PaymentVoucherTable from '@comman/PaymentVoucherTable';

type FormValues = {
  basicSalary: string;
  housing: string;
  transport: string;
  utility: string;
  productivity: string;
};

const Budget: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    basicSalary: '',
    housing: '',
    transport: '',
    utility: '',
    productivity: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormValues(prev => ({ ...prev, [id]: value }));
  };

  const paymentVoucherData: string[][] = [
    ["01", "Request for travel time", "Training course", "22/11/2022", "30/11/2022", "360,000.00"],
  ];

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6">
        <button className="text-blue-600 hover:underline mb-4">&larr; Back</button>
        <h2 className="text-2xl font-semibold mb-6">Create Payslip</h2>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Salary Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              label="Basic salary"
              id="basicSalary"
              placeholder="Enter amount"
              onChange={handleChange}
              value={formValues.basicSalary}
            />
            <FormField
              label="Housing allowance"
              id="housing"
              placeholder="Enter amount"
              onChange={handleChange}
              value={formValues.housing}
            />
            <FormField
              label="Transport allowance"
              id="transport"
              placeholder="Enter amount"
              onChange={handleChange}
              value={formValues.transport}
            />
            <FormField
              label="Utility allowance"
              id="utility"
              placeholder="Enter amount"
              onChange={handleChange}
              value={formValues.utility}
            />
            <FormField
              label="Productivity allowance"
              id="productivity"
              placeholder="Enter amount"
              onChange={handleChange}
              value={formValues.productivity}
            />
          </div>

          <div className="mt-8">
            <PaymentVoucherTable data={paymentVoucherData} />
          </div>
        </div>

        <div className="mt-10">
          <Button
            text="Create Payslip"
            className="w-full md:w-60 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-md"
            onClick={() => console.log("Payslip Created", formValues)}
            link={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;
