import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../comman/FormField';
import UploadPhoto from '../inventory/UploadPhoto';

const Newstaff = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    staffID: '',
    designation: '',
    officialEmail: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted Data:', formData);

    navigate('/dashboard/newstaff/new');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        className="text-blue-600 mb-4 hover:underline"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">New Staff</h2>
        <p className="text-gray-600">Create account for a new staff</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 space-y-6"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <UploadPhoto />

          <div className="flex-1 space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                label="First Name"
                id="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <FormField
                label="Last Name"
                id="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                label="Email Address"
                type="email"
                id="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              <FormField
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                label="Gender"
                type="select"
                id="gender"
                options={[
                  { value: '', label: 'Select gender' },
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                ]}
                value={formData.gender}
                onChange={handleChange}
              />
              <FormField
                label="Staff ID"
                id="staffID"
                placeholder="Staff ID"
                value={formData.staffID}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                label="Designation"
                type="select"
                id="designation"
                options={[
                  { value: '', label: 'Select designation' },
                  { value: 'developer', label: 'Developer' },
                  { value: 'designer', label: 'Designer' },
                  { value: 'analyst', label: 'Analyst' },
                ]}
                value={formData.designation}
                onChange={handleChange}
              />
              <FormField
                label="Official Email"
                type="email"
                id="officialEmail"
                placeholder="Official Email"
                value={formData.officialEmail}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full text-center py-2 mt-6 rounded-md text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90"
        >
          Add Staff
        </button>
      </form>
    </div>
  );
};

export default Newstaff;
