import React, { useState } from 'react';
import Button from '../../components/comman/Button';
import FormField from '../comman/FormField';
import { Link } from 'react-router-dom';
import SuccessModal from '../comman/SuccessModal';

const Main = () => {
  const [formData, setFormData] = useState({
    memoTitle: '',
    sentFrom: 'Otor John',
    sentTo: '',
    date: '',
    memoBody: '',
  });

  const [formErrors, setFormErrors] = useState({
    memoTitle: '',
    sentTo: '',
    date: '',
    memoBody: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setFormErrors(prev => ({ ...prev, [id]: '' })); // Clear error on change
  };

  const validateForm = () => {
    const errors = {
      memoTitle: '',
      sentTo: '',
      date: '',
      memoBody: '',
    };

    if (!formData.memoTitle.trim()) errors.memoTitle = 'Title is required';
    if (!formData.sentTo.trim()) errors.sentTo = 'Please select a recipient';
    if (!formData.date.trim()) errors.date = 'Date is required';
    if (!formData.memoBody.trim()) errors.memoBody = 'Message is required';

    setFormErrors(errors);
    return Object.values(errors).every(err => err === '');
  };

  const handleSendMain = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleContinue = () => {
    setIsModalOpen(false);
    // optionally reset form here
  };

  return (
    <div className="max-w-[1180px] mx-auto py-10 px-4 min-h-screen bg-[#f9fafe]">
      <Link
        to="/dashboard/main/mainn"
        className="text-blue-500 font-medium inline-block mb-4"
      >
        &larr; Back
      </Link>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Circular</h2>

      <form
        className="bg-white rounded-xl shadow-md p-6 space-y-6"
        onSubmit={handleSendMain}
      >
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Circular title"
              id="memoTitle"
              placeholder="Enter title"
              value={formData.memoTitle}
              errorMessage={formErrors.memoTitle}
              onChange={handleChange}
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Sent From"
              id="sentFrom"
              value={formData.sentFrom}
              readOnly
              onChange={() => {}}
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Sent To"
              id="sentTo"
              type="select"
              placeholder="Select option"
              value={formData.sentTo}
              options={[
                { value: '', label: 'Select option' },
                { value: 'office1', label: 'Office 1' },
                { value: 'office2', label: 'Office 2' },
              ]}
              errorMessage={formErrors.sentTo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex gap-6 flex-wrap">
          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Date"
              id="date"
              type="date"
              value={formData.date}
              errorMessage={formErrors.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <FormField
            label="Circular message"
            id="memoBody"
            type="textarea"
            placeholder="Enter message"
            value={formData.memoBody}
            errorMessage={formErrors.memoBody}
            onChange={handleChange}
          />
        </div>

        <div className="button-group flex gap-4 mt-6">
          <Button
            text="Save and Submit"
            type="submit"
            link={null}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition"
            onClick={() => {}}
          />
          <Button
            text="Save"
            className="btnn"
            onClick={() => {}}
            link={null}
          />
        </div>
      </form>

      {isModalOpen && (
        <SuccessModal
          message="Your circular has been sent successfully!"
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default Main;
