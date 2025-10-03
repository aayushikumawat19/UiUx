import React from 'react';

const SuccessModal = ({ message, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(199,191,191,0.5)] flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 text-center shadow-lg w-[300px]">
        <img
          src={require('../../assets/Group (1).png')}
          alt="Success"
          className="mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">Congratulations</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={onContinue}
          className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300"
        >
          Back To Login
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
