import React, { useState } from 'react';

const Chart = ({ title, totalApplications, legendItems, chartImage }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="w-[562px] bg-white rounded-[16px] p-6 flex flex-col gap-4 shadow">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <div className="flex justify-between items-center">
        <div className="space-y-4">
          <h6 className="text-base font-semibold text-gray-900">
            {totalApplications} Total applications
          </h6>
          <div className="space-y-2">
            {legendItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex items-center gap-2 cursor-pointer ${
                  selectedIndex === index ? 'bg-gray-200 rounded-md p-1' : ''
                }`}
              >
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    item.status.toLowerCase() === 'pending'
                      ? 'bg-[#F7931E]'
                      : item.status.toLowerCase() === 'approved'
                      ? 'bg-[#10A142]'
                      : item.status.toLowerCase() === 'rejected'
                      ? 'bg-[#ED4C5C]'
                      : ''
                  }`}
                ></span>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src={chartImage}
          alt="Applications Chart"
          className="w-[150px] h-[150px] object-contain"
        />
      </div>
    </div>
  );
};

export default Chart;
