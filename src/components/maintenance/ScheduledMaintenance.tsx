import React from "react";

interface ScheduledMaintenanceProps {
  data: string[][];
}

const ScheduledMaintenance: React.FC<ScheduledMaintenanceProps> = ({ data }) => {
  return (
    <div className="payment-voucher bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Scheduled Maintenance</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">SN</th>
            <th className="p-3 border">Request Title</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Date From</th>
            <th className="p-3 border">Date To</th>
            <th className="p-3 border">Amount (#)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-3 border text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduledMaintenance;
