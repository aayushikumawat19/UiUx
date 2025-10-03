import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '@comman/Card';
import Table from '@comman/Table';
import Footer from '@comman/Footer';
import GrossSalaryIcon from '@assets/Group 38.png';
import NetSalaryIcon from '@assets/Group 9 (1).png';
import TaxIcon from '@assets/Group 38 (1).png';
import LoanIcon from '@assets/Group 38 (2).png';

const Payroll = () => {
  const grossSalary = 250;
  const netSalary = 550;
  const totalTax = 350;
  const totalLoan = 503;
  const tableData = [
     ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["03", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["04", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["05", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Approved", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["06", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["07", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["08", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["09", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
     ["10", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Approved", <Link to="#" className="text-blue-600 hover:underline">View more</Link>],
   ];

  const chartData = [
    { month: 'Jan', net: 450000, tax: 300000, loan: 200000 },
    { month: 'Feb', net: 500000, tax: 350000, loan: 250000 },
    { month: 'Mar', net: 480000, tax: 320000, loan: 220000 },
    { month: 'Apr', net: 510000, tax: 330000, loan: 230000 },
    { month: 'May', net: 530000, tax: 340000, loan: 240000 },
    { month: 'Jun', net: 540000, tax: 360000, loan: 250000 },
    { month: 'Jul', net: 550000, tax: 370000, loan: 260000 },
    { month: 'Aug', net: 560000, tax: 380000, loan: 270000 },
    { month: 'Sep', net: 570000, tax: 390000, loan: 280000 },
    { month: 'Oct', net: 580000, tax: 400000, loan: 290000 },
    { month: 'Nov', net: 590000, tax: 410000, loan: 300000 },
    { month: 'Dec', net: 600000, tax: 420000, loan: 310000 },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-10">
        <div className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-[564px]">
          <Card
            value={grossSalary.toLocaleString()}
            label="Total tax this month"
            trend="2.1% less than last month"
            iconSrc={GrossSalaryIcon}
          />
          <Card
            value={netSalary.toLocaleString()}
            label="Net salary this month"
            trend="1.5% less than last month"
            iconSrc={NetSalaryIcon}
          />
          <Card
            value={totalTax.toLocaleString()}
            label="Total tax this month"
            trend="2.1% less than last month"
            iconSrc={TaxIcon}
          />
          <Card
            value={totalLoan.toLocaleString()}
            label="Total loan this month"
            trend="1.5% less than last month"
            iconSrc={LoanIcon}
          />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h4 className="text-lg font-semibold mb-4">Annual Payroll Summary</h4>
          <BarChart
            width={587}
            height={300}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid horizontal stroke="#e0e0e0" strokeDasharray="1 1" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              ticks={[0, 200000, 300000, 400000, 500000, 600000]}
              tickFormatter={(value) => `${value / 1000}k`}
              domain={[0, 600000]}
            />
            <Tooltip formatter={(value: number) => [`${(value / 1000).toFixed(0)}k`]} />
            <Legend iconType="circle" iconSize={10} wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
            <Bar name="Net salary" dataKey="net" fill="#4B97E8" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4 w-[1097px]">
            <h4 className="text-lg font-semibold">Salary Definition</h4>
            <Link
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              to="/dashboard/payroll/Createsalary"
            >
              Salary Definition
            </Link>
          </div>
          
          <Table
            headers={["S/N", "Title", "Level", "Basic Salary", "Allowance", "Gross Salary", "Deductions", "Net Salary", "Action"]}
            data={tableData}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payroll;