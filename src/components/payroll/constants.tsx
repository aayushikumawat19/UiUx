import React from "react";
import type { SalaryDataRow, TableDataRow, ChartDataPoint } from "./types";
import { Link } from "react-router-dom";

// Card Values
export const grossSalary = 250;
export const netSalary = 550;
export const totalTax = 350;
export const totalLoan = 503;

export const salaryData: SalaryDataRow[] = [
  ["01", "NHIS", "2%", <Link to="#" className="no-border">Edit</Link>, <Link to="#" className="no-border">Delete</Link>],
  ["1", "WHT", "2.5%", <Link to="#" className="no-border">Edit</Link>, <Link to="#" className="no-border">Delete</Link>],
  ["01", "NHIS", "5%", <Link to="#" className="no-border">Edit</Link>, <Link to="#" className="no-border">Delete</Link>],
  ["01", "WHT", "2%", <Link to="#" className="no-border">Edit</Link>, <Link to="#" className="no-border">Delete</Link>],
  ["01", "NHIS", "2.5%", <Link to="#" className="no-border">Edit</Link>, <Link to="#" className="no-border">Delete</Link>],
  ["01", "WHT", "5%", <Link to="#" className="no-border">Edit</Link>, <Link to="#" className="no-border">Delete</Link>],
];

// Payroll Table Data
export const payrollTableData: TableDataRow[] = [
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

// Chart Data
export const chartData: ChartDataPoint[] = [
  { month: "Jan", net: 450000, tax: 300000, loan: 200000 },
  { month: "Feb", net: 500000, tax: 350000, loan: 250000 },
  { month: "Mar", net: 480000, tax: 320000, loan: 220000 },
  { month: "Apr", net: 510000, tax: 330000, loan: 230000 },
  { month: "May", net: 530000, tax: 340000, loan: 240000 },
  { month: "Jun", net: 540000, tax: 360000, loan: 250000 },
  { month: "Jul", net: 550000, tax: 370000, loan: 260000 },
  { month: "Aug", net: 560000, tax: 380000, loan: 270000 },
  { month: "Sep", net: 570000, tax: 390000, loan: 280000 },
  { month: "Oct", net: 580000, tax: 400000, loan: 290000 },
  { month: "Nov", net: 590000, tax: 410000, loan: 300000 },
  { month: "Dec", net: 600000, tax: 420000, loan: 310000 },
];
