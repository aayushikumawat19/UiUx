import React from 'react';

interface VoucherProps {
  data: string[][];
}

const Voucher: React.FC<VoucherProps> = ({ data }) => {
  return (
    <div className="payment-voucher">
      <h3>Payment Voucher</h3>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Budget No.</th>
            <th>Budget Description</th>
            <th>Budget Amunt (₦)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: string[], index: number) => (
            <tr key={index}>
              {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Voucher;
