import React from 'react';
interface SignatureGroupProps {
  label: string;
}

const SignatureGroup: React.FC<SignatureGroupProps> = ({ label }) => {
  return (
    <div className="signature-group">
      <hr />
      <label>{label}</label>
    </div>
  );
};

export default SignatureGroup;