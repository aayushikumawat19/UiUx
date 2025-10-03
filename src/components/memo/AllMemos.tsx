import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '../comman/Table';
import Footer from '../comman/Footer';
import FormField from '../comman/FormField';

const AllMemos = () => {
  const [circularsData, setCircularsData] = useState<(string | JSX.Element)[][]>([]);

  const [searchTerm, setSearchTerm] = useState('');

  const actionLink = () => (
    <Link to="#" className="no-border text-blue-600 hover:underline">
      View more
    </Link>
  );

  useEffect(() => {
    const data = [
      ["01", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["02", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["03", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["04", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["05", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["06", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["07", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["08", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["09", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["10", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["11", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["12", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["13", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["14", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
      ["15", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "Yes", "Received ⬇", actionLink()],
      ["16", "Operations circular", "Williams Achugbani", "Chief Operations Officer", "16/11/2022", "No", "Sent ↗", actionLink()],
    ];
    setCircularsData(data);
  }, []);

  return (
    <div className="p-5 text-gray-800">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-[250px]">
          <FormField
            label="Quick search a circular"
            id="requestTitle"
            placeholder="Enter item name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="p-4 rounded-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">{circularsData.length}</h2>
          <p className="text-sm text-gray-500">Total number of staff</p>
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-sm font-medium text-gray-600">Filter staff</label>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>All staff</option>
          </select>
        </div>
        <Link
          to="/dashboard/memo/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Create Memo
        </Link>
      </div>

      <div className="bg-white rounded-lg">
        <Table
          title="All Memos"
          headers={[
            "S/N",
            "Circular Title",
            "Sent From",
            "Sent To",
            "Date",
            "Attachment?",
            "Circular Type",
            "Action",
          ]}
          data={circularsData}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AllMemos;
