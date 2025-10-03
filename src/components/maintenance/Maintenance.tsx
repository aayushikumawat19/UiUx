import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../comman/Card';
import MaintenanceItem from './MaintenanceItem';
import Footer from '../comman/Footer';

import ScheduledIcon from '../../assets/Group 63.png';
import CompletedIcon from '../../assets/Group 63 (1).png';
import PendingIcon from '../../assets/Group 63 (2).png';
import OverdueIcon from '../../assets/Group 63 (3).png';

const OfficeBudget = () => {
  const [maintenanceItems] = useState([
    { date: "18th November, 2022", description: "1. Scheduled maintenance for service of 3 units of AC", link: "/view-maintenance/1" },
    { date: "18th November, 2022", description: "2. Scheduled maintenance for service of 3 units of AC", link: "/view-maintenance/2" },
  ]);

  const [selectedDay, setSelectedDay] = useState(18);

  const daysArray = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3];

  return (
    <div className="dashboard-main p-6">
      <div className="flex flex-wrap">
        <Card 
          value="25" 
          iconSrc={ScheduledIcon} 
          label="Total number of staff" 
          trend="12 more than last quarter" 
        />
        <Card
          value="25" 
          iconSrc={CompletedIcon} 
          label="Total application" 
          trend="12 more than last quarter" 
        />
        <Card
          value="25" 
          iconSrc={PendingIcon} 
          label="Total projects" 
          trend="12 more than last quarter" 
        />
        <Card
          value="25" 
          iconSrc={OverdueIcon} 
          label="Total projects" 
          trend="12 more than last quarter" 
        />
      </div>

      <div className="flex justify-between items-center mb-4 w-[1097px]">
        <h4 className="text-lg font-semibold">Schedule a Maintenance</h4>
        <Link className="button bg-blue-500 text-white py-2 px-4 rounded" to="/dashboard/maintenance/main">
          Schedule Maintenance
        </Link>
      </div>

      <div className="scheduled-maintenance-container mt-6">
        <h4 className="text-lg font-semibold">Scheduled Maintenance</h4>
        <div className="maintenance-content flex bg-white rounded-lg p-6 shadow-md">
          <div className="calendar flex-1 bg-blue-50 rounded-lg p-5 mr-6">
            <div className="calendar-header flex justify-between mb-4">
              <button className="calendar-button text-lg">{"<"}</button>
              <span><strong>November 2022</strong></span>
              <button className="calendar-button text-lg">{">"}</button>
            </div>
            <div className="calendar-grid grid grid-cols-7 gap-2 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="calendar-day-label font-bold">{day}</div>
              ))}

              {daysArray.map((day, index) => (
                <div
                  key={index}
                  className={`calendar-day rounded-full p-2 cursor-pointer ${day === selectedDay ? 'bg-blue-600 text-white' : 'bg-transparent text-black'}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="border-l border-gray-300 mx-4" />

          <div className="maintenance-list flex-2">
            {maintenanceItems.map((item, index) => (
              <MaintenanceItem
                key={index}
                date={item.date}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfficeBudget;
