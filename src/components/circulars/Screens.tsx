import React, { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@comman/Button";
import FormField from "@comman/FormField";
import { Link } from "react-router-dom";
import SuccessModal from "@comman/SuccessModal";
import type { CircularFormData, CircularFormErrors, OnChangeFunction } from "@circulars/types";
import { initialFormData, initialFormErrors, sentToOptions } from "@circulars/state";

const Screens: React.FC = () => {
  const [formData, setFormData] = useState<CircularFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<CircularFormErrors>(initialFormErrors);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange: OnChangeFunction = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const errors: CircularFormErrors = { ...initialFormErrors };

    if (!formData.memoTitle.trim()) errors.memoTitle = "Title is required";
    if (!formData.sentTo) errors.sentTo = "Select recipient";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.memoBody.trim()) errors.memoBody = "Message is required";

    setFormErrors(errors);
    return Object.values(errors).every((err) => err === "");
  };

  const handleSendCircular = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleContinue = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1180px] mx-auto py-10 px-4 min-h-screen bg-[#f9fafe]">
      <Link to="/dashboard/circulars" className="text-blue-500 font-medium inline-block mb-4">
        &larr; Back
      </Link>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Circular</h2>

      <form className="bg-white rounded-xl shadow-md p-6 space-y-6" onSubmit={handleSendCircular}>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <FormField
              label="Circular title"
              id="memoTitle"
              type="text"
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
              type="text"
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
              value={formData.sentTo}
              placeholder="Select option"
              options={sentToOptions}
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
              placeholder=""
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
            value={formData.memoBody}
            placeholder="Enter message"
            errorMessage={formErrors.memoBody}
            onChange={handleChange}
          />
        </div>

        <div className="pt-2">
          <Button
            text="Send Circular"
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition"
            onClick={() => {}}
            link=""
          />
        </div>
      </form>

      {isModalOpen && <SuccessModal message="Your circular has been sent successfully!" onContinue={handleContinue} />}
    </div>
  );
};

export default Screens;
