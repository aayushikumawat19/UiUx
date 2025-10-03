import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationSection from '@notifications/NotificationSection';
import Footer from '@comman/Footer';
import ellipseIcon from '@assets/Notifications/Ellipse 16.png';

type Notification = {
  id: number;
  iconSrc: string;
  message: string;
  time: string;
  isRead: boolean;
};

export default function Notifications() {
  const initialTodayNotifications: Notification[] = [
    {
      id: 1,
      iconSrc: ellipseIcon,
      message: 'Your payment invoice request has been approved by Admin',
      time: '3 min ago',
      isRead: false,
    },
    {
      id: 2,
      iconSrc: ellipseIcon,
      message: 'Your payment invoice request has been approved by Admin',
      time: '10 min ago',
      isRead: false,
    },
    {
      id: 3,
      iconSrc: ellipseIcon,
      message: 'Your payment invoice request has been approved by Admin',
      time: '1 hr ago',
      isRead: false,
    },
  ];

  const initialYesterdayNotifications: Notification[] = [
    {
      id: 4,
      iconSrc: ellipseIcon,
      message: 'Your payment invoice request has been approved by Admin',
      time: '1 day ago',
      isRead: true,
    },
    {
      id: 5,
      iconSrc: ellipseIcon,
      message: 'Your payment invoice request has been approved by Admin',
      time: '1 day ago',
      isRead: true,
    },
    {
      id: 6,
      iconSrc: ellipseIcon,
      message: 'Your payment invoice request has been approved by Admin',
      time: '1 day ago',
      isRead: true,
    },
  ];

  const [todayNotifications, setTodayNotifications] = useState<Notification[]>(initialTodayNotifications);
  const [yesterdayNotifications] = useState<Notification[]>(initialYesterdayNotifications);

  const unreadCount = todayNotifications.filter(n => !n.isRead).length;

  useEffect(() => {
    setTodayNotifications(prev =>
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  }, []);

  return (
    <div className="p-5 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">
          Notifications ({unreadCount} unread)
        </h4>
        <Link
          className="px-4 py-2 rounded bg-blue-600 text-white"
          to="/dashboard/notifications/back"
        >
          Mark All As Read
        </Link>
      </div>

      <div className="bg-white rounded-lg p-5">
        <NotificationSection date="Today" notifications={todayNotifications} />
        <NotificationSection date="Yesterday 18th November, 2022" notifications={yesterdayNotifications} />
      </div>

      <Footer />
    </div>
  );
}
