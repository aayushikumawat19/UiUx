import React from 'react';
import NotificationItem from '@notifications/NotificationItem';

interface Notification {
  iconSrc: string;
  message: string;
  time: string;
  isRead?: boolean; 
}

interface NotificationSectionProps {
  date: string;
  notifications: Notification[];
}

const NotificationSection: React.FC<NotificationSectionProps> = ({ date, notifications }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4 p-2 rounded-lg">
        <h5 className="text-md font-semibold">{date}</h5>
        <div className="flex items-center">
          <input type="checkbox" className="select-checkbox w-5 h-5 mr-2 cursor-pointer" />
          <button className="see-all px-3 py-1 rounded border border-gray-300 text-black transition duration-300 hover:bg-blue-100">
            Select all
          </button>
        </div>
      </div>
      {notifications.map((notification: Notification, index: number) => (
        <NotificationItem
          key={index}
          iconSrc={notification.iconSrc}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </div>
  );
};

export default NotificationSection;
