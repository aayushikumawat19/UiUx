import React, { useState, type ChangeEvent } from "react";
import Button from "@comman/Button";
import FormField from "@comman/FormField";
import PaymentVoucherTable from "@comman/PaymentVoucherTable";
import BeneficiaryDetails from "@procurements/BeneficiaryDetails";
import SignatureGroup from "@procurements/SignatureGroup";
import SuccessModal from "@comman/SuccessModal";
import type { ProcreateForm, TableRow } from "@procurements/types";
import { initialProcreateForm } from "@procurements/constants";

const Procreate: React.FC = () => {
  const [formValues, setFormValues] = useState<ProcreateForm>(initialProcreateForm);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, files } = e.target as HTMLInputElement;
    setFormValues(prev => ({
      ...prev,
      [id]: files ? files[0] : value
    }));
  };

  const handleSendLogisticsRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleContinue = () => setIsModalOpen(false);

  const paymentVoucherData: TableRow[] = [
    ["01", "Request for travel time", "Training course", "22/11/2022", "30/11/2022", "360,000.00"],
  ];

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md mb-8">
      <button className="bg-transparent border-none text-blue-500 text-base mb-4 cursor-pointer">Back</button>
      <header className="mb-5">
        <h2 className="text-2xl text-gray-800">Procurement Request</h2>
        <p>Kindly fill in the form below to create a procurement request</p>
      </header>

      <form className="flex flex-col gap-4 logistics-form" onSubmit={handleSendLogisticsRequest}>
        {/* First row */}
        <div className="flex justify-between gap-4">
          <FormField label="Item" id="requestTitle" placeholder="Enter item name" value={formValues.requestTitle} onChange={handleInputChange} />
          <FormField label="Quantity" id="quantity" placeholder="Enter quantity" value={formValues.quantity} onChange={handleInputChange} />
          <FormField label="Date From" id="dateFrom" type="date" value={formValues.dateFrom} onChange={handleInputChange} />
        </div>

        {/* Second row */}
        <div className="flex justify-between gap-4">
          <FormField label="Unit Price" id="unitPrice" placeholder="Enter amount" value={formValues.unitPrice} onChange={handleInputChange} />
          <FormField label="Total Price" id="totalPrice" placeholder="Enter amount" value={formValues.totalPrice} onChange={handleInputChange} />
          <FormField label="Requested By" id="requestedBy" value={formValues.requestedBy} readOnly onChange={() => {}} />
        </div>

        {/* Third row */}
        <div className="flex justify-between gap-4">
          <FormField
            label="Sent To"
            id="sentTo"
            type="select"
            options={[
              { value: "", label: "Select option" },
              { value: "manager", label: "Manager" },
              { value: "hr", label: "HR" },
              { value: "finance", label: "Finance" },
            ]}
            value={formValues.sentTo}
            onChange={handleInputChange}
          />
          <FormField label="Add Attachment" id="attachment" type="file" value={formValues.attachment ?? ""} onChange={handleInputChange} />
          <FormField
            label="Attachment Type"
            id="attachmentType"
            type="select"
            options={[
              { value: "", label: "Select option" },
              { value: "invoice", label: "Invoice" },
              { value: "contract", label: "Contract" },
              { value: "other", label: "Other" },
            ]}
            value={formValues.attachmentType}
            onChange={handleInputChange}
          />
        </div>

        <Button
          text="Attach Payment Voucher"
          onClick={() => {}}
          link={null}
          className="w-full py-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
          type="submit"
        />
      </form>

      <PaymentVoucherTable data={paymentVoucherData} />
      <BeneficiaryDetails />

      <div className="flex justify-between">
        <SignatureGroup label="Verifier Signature" />
        <SignatureGroup label="Authorizer Signature" />
      </div>

      <div className="flex gap-2 mt-4">
        <Button text="Save and Send for Approval" onClick={() => {}} link={null} className="w-1/2 py-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white" />
        <Button text="Save" className="w-1/3 py-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white" onClick={() => {}} link={null} />
      </div>

      {isModalOpen && <SuccessModal message="Your circular has been sent successfully!" onContinue={handleContinue} />}
    </div>
  );
};

export default Procreate;
