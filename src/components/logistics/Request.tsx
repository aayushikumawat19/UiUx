import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/comman/Button';
import FormField from '../comman/FormField';
import PaymentVoucherTable from '../comman/PaymentVoucherTable';
import BeneficiaryDetails from '../procurements/BeneficiaryDetails';
import SignatureGroup from '../procurements/SignatureGroup';
import SuccessModal from '../comman/SuccessModal';

const LogisticsRequest = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    requestTitle: '',
    quantity: '',
    dateFrom: '',
    unitPrice: '',
    totalPrice: '',
    requestedBy: 'Otor John Stephen',
    sentTo: '',
    attachment: null as File | null,
    attachmentType: '',
  });

  const [formErrors, setFormErrors] = useState({
    requestTitle: '',
    quantity: '',
    dateFrom: '',
    unitPrice: '',
    totalPrice: '',
    sentTo: '',
    attachmentType: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { id, value, type } = target;

    if (type === 'file' && target instanceof HTMLInputElement && target.files) {
      setFormData(prev => ({ ...prev, attachment: target.files![0] }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
      setFormErrors(prev => ({ ...prev, [id]: '' })); // clear error on change
    }
  };

  const validateForm = () => {
    const errors = {
      requestTitle: '',
      quantity: '',
      dateFrom: '',
      unitPrice: '',
      totalPrice: '',
      sentTo: '',
      attachmentType: '',
    };

    if (!formData.requestTitle.trim()) errors.requestTitle = 'Item is required';
    if (!formData.quantity.trim()) errors.quantity = 'Quantity is required';
    if (!formData.dateFrom.trim()) errors.dateFrom = 'Date From is required';
    if (!formData.unitPrice.trim()) errors.unitPrice = 'Unit Price is required';
    if (!formData.totalPrice.trim()) errors.totalPrice = 'Total Price is required';
    if (!formData.sentTo.trim()) errors.sentTo = 'Please select recipient';
    if (!formData.attachmentType.trim()) errors.attachmentType = 'Please select attachment type';

    setFormErrors(errors);

    return Object.values(errors).every(err => err === '');
  };

  const handleSendLogisticsRequest = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleContinue = () => {
    setIsModalOpen(false);
    navigate('/dashboard/logistics/requests'); // or your desired route after success
  };

  const paymentVoucherData = [
    ['01', 'Request for travel time', 'Training course', '22/11/2022', '30/11/2022', '360,000.00'],
  ];

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md mb-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-transparent border-none text-blue-500 text-base mb-4 cursor-pointer"
      >
        &larr; Back
      </button>

      <header className="mb-5">
        <h2 className="text-2xl text-gray-800">Procurement Request</h2>
        <p>Kindly fill in the form below to create a procurement request</p>
      </header>

      <form className="flex flex-col gap-4 logistics-form" onSubmit={handleSendLogisticsRequest}>
        <div className="flex justify-between gap-4">
          <FormField
            label="Item"
            id="requestTitle"
            placeholder="Enter item name"
            value={formData.requestTitle}
            errorMessage={formErrors.requestTitle}
            onChange={handleChange}
          />
          <FormField
            label="Quantity"
            id="quantity"
            placeholder="Enter quantity"
            value={formData.quantity}
            errorMessage={formErrors.quantity}
            onChange={handleChange}
          />
          <FormField
            label="Date From"
            id="dateFrom"
            type="date"
            value={formData.dateFrom}
            errorMessage={formErrors.dateFrom}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-4">
          <FormField
            label="Unit Price"
            id="unitPrice"
            placeholder="Enter amount"
            value={formData.unitPrice}
            errorMessage={formErrors.unitPrice}
            onChange={handleChange}
          />
          <FormField
            label="Total Price"
            id="totalPrice"
            placeholder="Enter amount"
            value={formData.totalPrice}
            errorMessage={formErrors.totalPrice}
            onChange={handleChange}
          />
          <FormField
            label="Requested By"
            id="requestedBy"
            value={formData.requestedBy}
            readOnly
            onChange={() => {}}
          />
        </div>
        <div className="flex justify-between gap-4">
          <FormField
            label="Sent To"
            id="sentTo"
            type="select"
            options={[
              { value: '', label: 'Select option' },
              { value: 'manager', label: 'Manager' },
              { value: 'hr', label: 'HR' },
              { value: 'finance', label: 'Finance' },
            ]}
            value={formData.sentTo}
            errorMessage={formErrors.sentTo}
            onChange={handleChange}
          />
          <FormField
            label="Add Attachment"
            id="attachment"
            type="file"
            onChange={handleChange}
          />
          <FormField
            label="Attachment Type"
            id="attachmentType"
            type="select"
            options={[
              { value: '', label: 'Select option' },
              { value: 'invoice', label: 'Invoice' },
              { value: 'contract', label: 'Contract' },
              { value: 'other', label: 'Other' },
            ]}
            value={formData.attachmentType}
            errorMessage={formErrors.attachmentType}
            onChange={handleChange}
          />
        </div>

        <Button
          text="Attach Payment Voucher"
          className="w-full py-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
          type="submit"
          onClick={() => {}}
          link={null}
        />
      </form>

      <PaymentVoucherTable data={paymentVoucherData} />
      <BeneficiaryDetails />

      <div className="flex justify-between mt-4">
        <SignatureGroup label="Verifier Signature" />
        <SignatureGroup label="Authorizer Signature" />
      </div>

      <div className="flex gap-2 mt-6">
        <Button
          text="Save and Send for Approval"
          className="w-1/2 py-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
          onClick={() => alert('Save and send clicked')}
          link={null}
        />
        <Button
          text="Save"
          className="w-1/3 py-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
          onClick={() => alert('Save clicked')}
          link={null}
        />
      </div>

      {isModalOpen && (
        <SuccessModal
          message="Your procurement request has been sent successfully!"
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default LogisticsRequest;