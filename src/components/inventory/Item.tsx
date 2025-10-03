import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "@comman/Button";
import UploadPhoto from "@inventory/UploadPhoto";
import FormField from "@comman/FormField";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  staffID: string;
  designation: string;
  officialEmail: string;
}

type Errors = Record<keyof FormData, string>;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  staffID: "",
  designation: "",
  officialEmail: "",
};

const initialErrors: Errors = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  staffID: "",
  designation: "",
  officialEmail: "",
};

// ---------- Component ----------
const Item: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // handle image upload
  const handleImageChange = (file: File | null, preview: string | null) => {
  setUploadedImage(file);
  setImagePreview(preview);
};

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  // validation
  const validate = (): boolean => {
    const newErrors: Partial<Errors> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.staffID.trim()) newErrors.staffID = "Staff ID is required";
    if (!formData.designation) newErrors.designation = "Designation is required";

    if (!formData.officialEmail.trim()) {
      newErrors.officialEmail = "Official email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.officialEmail)) {
      newErrors.officialEmail = "Enter a valid official email";
    }

    setErrors({ ...initialErrors, ...newErrors });
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    console.log("Form submitted with data:", formData);
    console.log("Uploaded Image:", uploadedImage);
  };

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md mb-8">
      <Link
        to="/dashboard/inventory"
        className="bg-blue-600 text-white py-2 px-4 rounded mb-5 inline-block"
      >
        Back
      </Link>

      <header className="mb-5">
        <h2 className="text-2xl mb-5">Update Stock</h2>
      </header>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          {/* Upload Image */}
          <UploadPhoto onImageChange={handleImageChange} />

          {/* Form Fields */}
          <div className="bg-white rounded-lg space-y-6 flex-1 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 space-y-5">
                {/* Name */}
                <div className="flex gap-4">
                  <FormField
                    label="First Name"
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                  />
                  <FormField
                    label="Last Name"
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                  />
                </div>

                {/* Email & Phone */}
                <div className="flex gap-4">
                  <FormField
                    label="Email Address"
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                  <FormField
                    label="Phone Number"
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    error={errors.phoneNumber}
                  />
                </div>

                {/* Gender & Staff ID */}
                <div className="flex gap-4">
                  <FormField
                    label="Gender"
                    type="select"
                    id="gender"
                    options={[
                      { value: "", label: "Select gender" },
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Other" },
                    ]}
                    value={formData.gender}
                    onChange={handleInputChange}
                    error={errors.gender}
                  />
                  <FormField
                    label="Staff ID"
                    id="staffID"
                    placeholder="Staff ID"
                    value={formData.staffID}
                    onChange={handleInputChange}
                    error={errors.staffID}
                  />
                </div>

                {/* Designation & Official Email */}
                <div className="flex gap-4">
                  <FormField
                    label="Designation"
                    type="select"
                    id="designation"
                    options={[
                      { value: "", label: "Select designation" },
                      { value: "developer", label: "Developer" },
                      { value: "designer", label: "Designer" },
                      { value: "analyst", label: "Analyst" },
                    ]}
                    value={formData.designation}
                    onChange={handleInputChange}
                    error={errors.designation}
                  />
                  <FormField
                    label="Official Email"
                    type="email"
                    id="officialEmail"
                    placeholder="Official Email"
                    value={formData.officialEmail}
                    onChange={handleInputChange}
                    error={errors.officialEmail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          text="Add Item"
          className="mt-5 bg-blue-600 text-white py-2 px-4 rounded w-full"
          type="submit"
          onClick={() => {}}
          link={null}
        />
      </form>
    </div>
  );
};

export default Item;
