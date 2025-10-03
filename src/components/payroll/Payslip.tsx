import React from 'react';
import { Link } from 'react-router-dom';

const Payslip = () => {
  return (
    <div className="p-6 font-sans">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 cursor-pointer">
        <Link to="" className="hover:underline">← Back</Link>
      </div>

      <div className="flex justify-between items-center p-5 bg-white shadow rounded mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Abubakar Alghazali</h2>
          <p className="text-sm text-gray-500 -mt-3">Managing Director | MD/CEO</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 text-sm rounded-xl">
          Edit payslip
        </button>
      </div>

      <div className="p-5 bg-white shadow rounded">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Salary Payslip</h2>

        <div className="flex gap-10 text-sm text-gray-500 mb-6">
          <p>Month: January</p>
          <p>Year: 2023</p>
        </div>

        <div className="flex flex-wrap gap-6">
          <table className="w-full max-w-md border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="p-3">Salary Structure</th>
                <th className="p-3">Amount (₦)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr><td className="p-3">Basic Salary</td><td className="p-3">445,331</td></tr>
              <tr><td className="p-3">Housing Allowance</td><td className="p-3">222,666</td></tr>
              <tr><td className="p-3">Transport Allowance</td><td className="p-3">89,066</td></tr>
              <tr><td className="p-3">Utility Allowance</td><td className="p-3">44,533</td></tr>
              <tr><td className="p-3">Productivity Allowance</td><td className="p-3">89,066</td></tr>
              <tr><td className="p-3">Communication Allowance</td><td className="p-3">66,800</td></tr>
              <tr><td className="p-3">Inconvenience Allowance</td><td className="p-3">66,800</td></tr>
              <tr className="font-semibold text-gray-900">
                <td className="p-3">Gross Salary</td><td className="p-3">1,024,261</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full max-w-md border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="p-3">Deductions</th>
                <th className="p-3">Amount (₦)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr><td className="p-3">Tax/PAYE</td><td className="p-3">163,696</td></tr>
              <tr><td className="p-3">Employee Pension</td><td className="p-3">60,565</td></tr>
              <tr className="font-semibold text-gray-900">
                <td className="p-3">Total Deduction</td><td className="p-3">224,261</td>
              </tr>
              <tr className="font-bold text-blue-600">
                <td className="p-3">Net Salary</td><td className="p-3">800,000</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-600 mt-4">
            Net Salary in Words: <strong className="text-gray-900">Eight Hundred Thousand Naira Only</strong>
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        © 2022 Relia Energy. All Rights Reserved
      </p>
    </div>
  );
};

export default Payslip;
