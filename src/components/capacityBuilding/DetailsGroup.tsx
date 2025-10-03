import React from 'react';

interface DetailsGroupProps {
  label: string;
  value: string;
}

const DetailsGroup: React.FC<DetailsGroupProps> = ({ label, value }) => {
  return (
    <div className="details-group">
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};

export default DetailsGroup;
