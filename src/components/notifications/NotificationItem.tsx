import React from 'react';

interface NotificationItemProps {
  iconSrc: string;
  message: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ iconSrc, message, time }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src={iconSrc} className="w-12 h-12 rounded-full mr-3" alt="Notification Icon" />
        <div className="message-content">
          <p className="message-text">{message}</p>
          <span className="time text-xs text-gray-500">{time}</span>
        </div>
      </div>
      <div className="options cursor-pointer text-gray-600">⋮</div>
    </div>
  );
};

export default NotificationItem;
