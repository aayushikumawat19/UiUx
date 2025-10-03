import React from 'react';

const PaymentVoucherTable = ({ data }) => {
  return (
    <div className="my-16">
      <h4 className="text-left text-xl font-semibold">Payment Voucher</h4>
      <table className="w-full border-collapse mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">SN</th>
            <th className="p-2 text-left">Request Title</th>
            <th className="p-2 text-left">Purpose</th>
            <th className="p-2 text-left">Date From</th>
            <th className="p-2 text-left">Date To</th>
            <th className="p-2 text-left">Amount (#)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 text-left">
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

export default PaymentVoucherTable;
