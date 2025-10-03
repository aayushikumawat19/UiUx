import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@comman/Card';
import Table from '@comman/Table';
import Footer from '@comman/Footer';
import IconStaff from '@assets/Group 9.png';
import IconApplication from '@assets/Group 9 (1).png';
import IconProjects from '@assets/Group 9 (2).png';
import IconDepartments from '@assets/Group 9 (3).png';

type TableRow = (string | React.ReactNode)[];

const Procurements: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const data: TableRow[] = [
        [
          "01", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "02", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "03", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "04", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "05", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Approved",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "06", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "07", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "08", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "09", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Pending",
          <Link to="#" className="no-border">View more</Link>
        ],
        [
          "10", "Office chairs", "20", "360,000.00",
          "Otor John", "Faruk Hashim", "21/11/2022", "Approved",
          <Link to="#" className="no-border">View more</Link>
        ],
      ];
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-main">
      {/* Cards */}
      <div className="flex flex-wrap gap-5">
        <Card value="250" iconSrc={IconStaff} label="Total number of staff" trend="12 more than last quarter" />
        <Card value="250" iconSrc={IconApplication} label="Total application" trend="12 more than last quarter" />
        <Card value="250" iconSrc={IconProjects} label="Total projects" trend="12 more than last quarter" />
        <Card value="10" iconSrc={IconDepartments} label="Total departments" trend="12 more than last quarter" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 w-[1097px] m-auto">
        <h4 className="text-lg">Procurement Requests</h4>
        <Link className="button" to="/dashboard/procurements/procreate">
          Make Procurement Request
        </Link>
      </div>

      {/* Table */}
      <div className="tables-row">
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

export default Procurements;
