import React from 'react';
const Table = ({ title, headers, data }: { title?: string; headers: string[]; data: React.ReactNode[][] }) => {

  return (
    <div className="overflow-x-auto bg-white rounded-lg p-4 mb-5">
      {title && <h4 className="text-lg font-semibold mb-4">{title}</h4>}
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-sm text-gray-700">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-sm text-gray-800 hover:bg-gray-50">
              {row.map((cell, cellIndex) => {
                // For example: highlight the "Total Amount" column (7th index) if needed
                const isTotalAmount = cellIndex === 7; // Adjust based on your data
                const isStatus = cellIndex === row.length - 1;

                // Determine status classes based on your status strings
                const statusClass =
                  cell === "In stock"
                    ? "text-green-600 font-semibold"
                    : cell === "Out of Stock"
                    ? "text-red-600 font-semibold"
                    : cell === "Low in stock"
                    ? "text-yellow-600 font-semibold"
                    : "";

                return (
                  <td
                    key={cellIndex}
                    className={`py-2 px-3 ${
                      isTotalAmount ? 'text-[#B93B3F] font-bold' : ''
                    } ${isStatus ? statusClass : ''}`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
