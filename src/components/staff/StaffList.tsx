import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Table from '../comman/Table';
import Footer from '../comman/Footer';
import FormField from '../comman/FormField';

type TableRow = (string | ReactElement)[];
const StaffList = () => {
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const data: TableRow[] = [
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
      ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
    ];
    setTableData(data);
  }, []);

  const actionLink = () => (
    <Link to="#" className="text-blue-600 hover:underline">
      View more
    </Link>
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-5 text-gray-800">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-[250px]">
          <FormField
            label="Quick search a circular"
            id="requestTitle"
            placeholder="Enter item name"
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </div>

        <div className="p-4 rounded-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">{tableData.length}</h2>
          <p className="text-sm text-gray-500">Total number of staff</p>
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 text-sm font-medium text-gray-600">Filter staff</label>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>All staff</option>
          </select>
        </div>

        <Link
          to="/dashboard/staff/staffnew"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Add New Staff
        </Link>
      </div>

      <div className="bg-white rounded-lg">
        <Table
          title="Procurement Request"
          headers={["S/N", "Item", "Qty", "Amount", "Requested By", "Sent To", "Date", "Status", "Action"]}
          data={tableData}
        />
      </div>

      <Footer />
    </div>
  );
};

export default StaffList;