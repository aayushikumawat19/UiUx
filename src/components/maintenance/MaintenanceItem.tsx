import React from 'react';
import { Link } from 'react-router-dom';

interface MaintenanceItemProps {
  date: string;
  description: string;
  link: string;
}

const MaintenanceItem: React.FC<MaintenanceItemProps> = ({ date, description, link }) => {
  return (
    <div className="maintenance-item bg-white p-4 mb-4">
      <span className="maintenance-date block text-gray-600 font-medium">{date}</span>
      <p className="text-gray-800 my-2">{description}</p>
      <Link
        className="view-button inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        to={link}
      >
        View
      </Link>
    </div>
  );
};

export default MaintenanceItem;
