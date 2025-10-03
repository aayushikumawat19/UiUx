import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import Button from "@components/comman/Button";
import FormField from '@comman/FormField'; 
import { Link } from 'react-router-dom';
import SuccessModal from '@comman/SuccessModal'; 

const Building = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Without value, you cannot track input values here
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Your logic here or omit if FormField handles internally
  };

  const handleSendMain = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="max-w-[1180px] mx-auto py-10 px-4 min-h-screen bg-[#f9fafe]">
      <Link
        to="/dashboard/building/build"
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
              id="sentTo"
              type="select"
              placeholder="Select option"
              options={[
                { value: '', label: 'Select option' },
                { value: 'office1', label: 'Office 1' },
                { value: 'office2', label: 'Office 2' },
              ]}
              onChange={handleChange}
              errorMessage={""}
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Sent To"
              id="sentTo"
              type="select"
              placeholder="Select option"
              options={[
                { value: '', label: 'Select option' },
                { value: 'office1', label: 'Office 1' },
                { value: 'office2', label: 'Office 2' },
              ]}
              onChange={handleChange}
              errorMessage={""}
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Sent To"
              id="sentTo"
              type="select"
              placeholder="Select option"
              options={[
                { value: '', label: 'Select option' },
                { value: 'office1', label: 'Office 1' },
                { value: 'office2', label: 'Office 2' },
              ]}
              onChange={handleChange}
              errorMessage={""}
            />
          </div>
        </div>

        <div className="flex gap-6 flex-wrap">
          <div className="flex-1 min-w-[250px]">
            <FormField
  label="Date"
  id="date"
  type="date"
  placeholder="Select date"
  options={[]}
  onChange={handleChange}
  errorMessage={""}
/>

          </div>
        </div>

        <div>
          <FormField
            label="Circular message"
            id="memoBody"
            type="textarea"
            placeholder="Enter message"
            onChange={handleChange}
            errorMessage={""}
              options={[]}
          />
        </div>

        <div className="button-group flex gap-4">
          <Button
            text="Save and Submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition"
            type="button"
            link="/dashboard/building/build"  // Required prop
            onClick={() => {}}
          />
          <Button
            text="Save"
            className="btnn"
            type="button"
            link=""  // Add empty string or appropriate link
            onClick={() => {}}
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

export default Building;
