import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Notification {
  date: string;
  time: string;
  message: ReactNode;
}

const initialNotifications: Notification[] = [
  {
    date: "Friday, Nov 11",
    time: "10:00am",
    message: (
      <>
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.<br /><br />
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.
      </>
    ),
  },
  {
    date: "Saturday, Nov 12",
    time: "01:20pm",
    message: (
      <>
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices tellus enim proin id. nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.<br /><br />
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.
      </>
    ),
  },
  {
    date: "Sunday, Nov 13",
    time: "09:20am",
    message: (
      <>
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.<br /><br />
      </>
    ),
  },
];

const Back: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  useEffect(() => {
    console.log('Back component mounted');
  }, []);

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <Link to="/dashboard/notifications" className="inline-block mt-5 px-4 py-2 bg-blue-600 text-white rounded">
        &larr; Back
      </Link>

      <div className="flex justify-between items-center my-4">
        <h4 className="text-lg font-semibold">Notifications from HR</h4>
        <button
          onClick={handleDeleteAll}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete All
        </button>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications available.</p>
        ) : (
          notifications.map((notification, index) => (
            <div className="bg-white rounded-lg shadow p-4" key={index}>
              <div className="message-content">
                <p className="font-bold mb-2">{notification.date} - {notification.time}</p>
                <p className="text-gray-600">{notification.message}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Back;
