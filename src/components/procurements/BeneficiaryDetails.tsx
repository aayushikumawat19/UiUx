import React, { useState, type ChangeEvent } from 'react';
import FormField from '../comman/FormField';

const BeneficiaryDetails = () => {
  const [formValues, setFormValues] = useState({
    requestTitle: '',
    quantity: '',
    dateFrom: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="payment-voucher">
      <h4>Beneficiary Payment Details</h4>

      <div className="flex justify-between gap-4">
        <FormField
          label="Item"
          id="requestTitle"
          placeholder="Enter item name"
          value={formValues.requestTitle}
          onChange={handleChange}
        />
        <FormField
          label="Quantity"
          id="quantity"
          placeholder="Enter quantity"
          value={formValues.quantity}
          onChange={handleChange}
        />
        <FormField
          label="Date From"
          id="dateFrom"
          type="date"
          value={formValues.dateFrom}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default BeneficiaryDetails;
