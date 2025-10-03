import React, { useState, type ChangeEvent } from "react";
import FormField from "@comman/FormField";
import "@comman/PaymentVoucherTable.css";
import type { MemoActivitiesForm } from "@procurements/types";
import { initialMemoActivities } from "@procurements/constants";

const MemoActivities: React.FC = () => {
  const [formValues, setFormValues] = useState<MemoActivitiesForm>(initialMemoActivities);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="payment-voucher">
      <h4>Memo Activities</h4>
      <div className="form-row mt-[20px]">
        <FormField label="Account Name" id="accountName" placeholder="Enter name" value={formValues.accountName} onChange={handleChange} />
        <FormField label="Account Number" id="accountNumber" placeholder="Enter number" value={formValues.accountNumber} onChange={handleChange} />
        <FormField label="Bank Name" id="bankName" placeholder="Enter bank name" value={formValues.bankName} onChange={handleChange} />
      </div>
    </div>
  );
};

export default MemoActivities;
