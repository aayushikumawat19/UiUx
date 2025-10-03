import React, { useState } from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import ProfileIcon from '@assets/Profile Icon.png';
import SettingsIcon from '@assets/Settings Icon.png';
import LogoutIcon from '@assets/Logout Icon.png';
import HappyEmoji from '@assets/Happy-Emoji-PNG 1.png';
import NotificationsIcon from '@assets/Sidebar/Notifications.png';
import AvatarImage from '@assets/Ellipse 1.png';

const DashboardHeader = () => {
  const [user, setUser] = useState({
    name: 'Otor John',
    role: 'HR Office',
    welcomeName: 'Mr. Otor John',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '2') {
      alert('Logging out...');
      setUser({ name: '', role: '', welcomeName: '' });
    }
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <span className="flex items-center">
          <img src={ProfileIcon} alt="Profile" className="w-5 h-5 mr-2" />
          Profile
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span className="flex items-center">
          <img src={SettingsIcon} alt="Settings" className="w-5 h-5 mr-2" />
          Settings
        </span>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <span className="flex items-center">
          <img src={LogoutIcon} alt="Logout" className="w-5 h-5 mr-2" />
          Logout
        </span>
      ),
      key: '2',
    },
  ];

  return (
    <header className="bg-white px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-bold flex items-center gap-2">
            Welcome, {user.welcomeName}
            <img src={HappyEmoji} className="w-6 h-6 object-contain" alt="Happy Emoji" />
          </h4>
          <p className="text-sm text-gray-600">Today is Saturday, 11th November 2022.</p>
        </div>

        <div className="flex items-center gap-5">
          <img src={NotificationsIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" />

          <div className="flex items-center gap-2">
            <img src={AvatarImage} className="w-10 h-10 rounded-full object-cover" alt="User Avatar" />
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-semibold text-black">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
            <Dropdown
              menu={{ items, onClick: handleMenuClick }}
              trigger={['click']}
              onOpenChange={(open) => setDropdownOpen(open)}
              open={dropdownOpen}
            >
              <a onClick={(e) => e.preventDefault()} className="ml-1">
                <DownOutlined className="text-black cursor-pointer" />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
