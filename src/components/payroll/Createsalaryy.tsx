import React from "react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Card from "@comman/Card";
import Table from "@comman/Table";
import Footer from "@comman/Footer";

import GrossSalaryIcon from "../../assets/Group 38.png";
import NetSalaryIcon from "../../assets/Group 9 (1).png";
import TaxIcon from "../../assets/Group 38 (1).png";
import LoanIcon from "../../assets/Group 38 (2).png";

import { grossSalary, netSalary, totalTax, totalLoan, salaryData, chartData } from "../payroll/constants";

const Createsalaryy: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-10 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Card value={grossSalary.toLocaleString()} label="Gross Salary" trend="2.1% less than last month" iconSrc={GrossSalaryIcon} />
          <Card value={netSalary.toLocaleString()} label="Net Salary" trend="1.5% less than last month" iconSrc={NetSalaryIcon} />
          <Card value={totalTax.toLocaleString()} label="Total Tax" trend="2.1% less than last month" iconSrc={TaxIcon} />
          <Card value={totalLoan.toLocaleString()} label="Total Loan" trend="1.5% less than last month" iconSrc={LoanIcon} />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h4 className="text-lg font-semibold mb-4">Annual Payroll Summary</h4>
          <BarChart width={587} height={300} data={chartData}>
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="1 1" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip formatter={(value: number) => [`${(value / 1000).toFixed(0)}k`]} />
            <Legend />
            <Bar name="Net salary" dataKey="net" fill="#4B97E8" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Salary Definition</h4>
            <Link className="bg-blue-500 text-white px-4 py-2 rounded" to="/dashboard/Createsalaryy/Payslip">
              Salary Definition
            </Link>
          </div>
          <Table title="Salary Tax Breakdown" headers={["S/N", "Tax Type", "Value", "Action"]} data={salaryData} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Createsalaryy;
