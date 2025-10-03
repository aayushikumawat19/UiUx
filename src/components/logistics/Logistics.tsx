import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../comman/Card';
import Table from '../comman/Table';
import Footer from '../comman/Footer';

import IconStaff from '../../assets/Group 9.png';
import IconApplication from '../../assets/Group 9 (1).png';
import IconProjects from '../../assets/Group 9 (2).png';
import IconDepartments from '../../assets/Group 9 (3).png';

const Logistics: React.FC = () => {
  const [tableData, setTableData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    const fetchData = () => {
      const data = [
        ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["02", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["03", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["04", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["05", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Approved", actionLink()],
        ["06", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["07", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["08", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["09", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["10", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Approved", actionLink()],
      ];
      setTableData(data);
    };

    fetchData();
  }, []);

  const actionLink = () => (
    <Link to="#" className="text-blue-600 hover:underline">
      View more
    </Link>
  );

  return (
    <div className="dashboard-main">
      <div className="flex flex-wrap gap-5">
        <Card 
          value="300" 
          iconSrc={IconStaff} 
          label="Total number of staff" 
          trend="12 more than last quarter" 
        />
        <Card
          value="5,000,000" 
          iconSrc={IconApplication} 
          label="Total application" 
        />
        <Card
          value="70" 
          iconSrc={IconProjects} 
          label="Total projects" 
        />
        <Card
          value="280" 
          iconSrc={IconDepartments} 
          label="Total projects" 
          trend="12 more than last quarter" 
        />
      </div>

      <div className="flex justify-between items-center mb-4 w-[1097px] m-auto">
        <h4 className="text-lg">Logistics Request</h4>
        <Link className="button" to="/dashboard/logistics/request">
          Logistics Request
        </Link>
      </div>

      <Table
        headers={["S/N", "Title", "Level", "Basic Salary", "Allowance", "Gross Salary", "Deductions", "Net Salary", "Action"]}
        data={tableData}
      />

      <Footer />
    </div>
  );
};

export default Logistics;
