import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@comman/Table";
import Footer from "@comman/Footer";

type TableRow = (string | JSX.Element)[];

const New: React.FC = () => {
  const [filter, setFilter] = useState<string>("All staff");

  const tableData: TableRow[] = [
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

  const filteredData = filter === "All staff"
    ? tableData
    : tableData.filter(row => row[7] === filter);

  return (
    <div className="p-5 text-gray-800">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="p-4 rounded-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">250</h2>
          <p className="text-sm text-gray-500">Total number of staff</p>
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 text-sm font-medium text-gray-600">Filter staff</label>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All staff">All staff</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
          </select>
        </div>

        <Link
          to="/dashboard/new/memo"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Add New Staff
        </Link>
      </div>

      <div className="bg-white rounded-lg">
        <Table
          title="Procurement Request"
          headers={["S/N", "Item", "Qty", "Amount", "Requested By", "Sent To", "Date", "Status", "Action"]}
          data={filteredData}
        />
      </div>

      <Footer />
    </div>
  );
};

export default New;
