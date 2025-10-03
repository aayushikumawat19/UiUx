import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@comman/Button";
import FormField from "@comman/FormField";
import SuccessModal from "@comman/SuccessModal";

interface FormData {
  memoTitle: string;
  sentFrom: string;
  sentTo: string;
  date: string;
  memoBody: string;
}

interface FormErrors {
  memoTitle: string;
  sentTo: string;
  date: string;
  memoBody: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: string;
  link?: string | null;
  className?: string;
}

const Main: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    memoTitle: "",
    sentFrom: "Otor John",
    sentTo: "",
    date: "",
    memoBody: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    memoTitle: "",
    sentTo: "",
    date: "",
    memoBody: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setFormErrors(prev => ({ ...prev, [id]: "" }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      memoTitle: "",
      sentTo: "",
      date: "",
      memoBody: "",
    };

    if (!formData.memoTitle.trim()) errors.memoTitle = "Title is required";
    if (!formData.sentTo.trim()) errors.sentTo = "Please select a recipient";
    if (!formData.date.trim()) errors.date = "Date is required";
    if (!formData.memoBody.trim()) errors.memoBody = "Message is required";

    setFormErrors(errors);

    return Object.values(errors).every(error => error === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleContinue = () => {
    setIsModalOpen(false);
    setFormData({
      memoTitle: "",
      sentFrom: "Otor John",
      sentTo: "",
      date: "",
      memoBody: "",
    });
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

      <form className="bg-white rounded-xl shadow-md p-6 space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-6">
          <FormField
            label="Circular Title"
            id="memoTitle"
            placeholder="Enter title"
            value={formData.memoTitle}
            error={formErrors.memoTitle}
            onChange={handleChange}
            className="flex-1 min-w-[250px]"
          />
          <FormField
            label="Sent From"
            id="sentFrom"
            value={formData.sentFrom}
            readOnly
            onChange={() => {}}
            className="flex-1 min-w-[250px]"
          />
          <FormField
            label="Sent To"
            id="sentTo"
            type="select"
            placeholder="Select option"
            value={formData.sentTo}
            options={[
              { value: "", label: "Select option" },
              { value: "office1", label: "Office 1" },
              { value: "office2", label: "Office 2" },
            ]}
            error={formErrors.sentTo}
            onChange={handleChange}
            className="flex-1 min-w-[250px]"
          />
        </div>

        <div className="flex gap-6 flex-wrap">
          <FormField
            label="Date"
            id="date"
            type="date"
            value={formData.date}
            error={formErrors.date}
            onChange={handleChange}
            className="flex-1 min-w-[250px]"
          />
        </div>

        <FormField
          label="Circular Message"
          id="memoBody"
          type="textarea"
          placeholder="Enter message"
          value={formData.memoBody}
          error={formErrors.memoBody}
          onChange={handleChange}
        />

        <div className="flex gap-4 mt-6">
        <Button
          text="Save and Submit"
          type="submit"
          link={null}
          onClick={() => {}}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600"
        />
          <Button text="Save" link={null} onClick={() => {}} className="btnn" />
        </div>
      </form>

      {isModalOpen && (
        <SuccessModal message="Your circular has been sent successfully!" onContinue={handleContinue} />
      )}
    </div>
  );
};

export default Main;
