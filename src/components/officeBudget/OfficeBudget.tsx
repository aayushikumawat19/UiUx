import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../comman/Card';
import Table from '../comman/Table';
import Footer from '../comman/Footer';
import IconStaff from '../../assets/Group 9.png';
import IconApplication from '../../assets/Group 9 (1).png';
import IconProjects from '../../assets/Group 9 (2).png';
import IconDepartments from '../../assets/Group 9 (3).png';

const OfficeBudget: React.FC = () => {
  const [tableData, setTableData] = useState<string[][]>([]);

  useEffect(() => {
    const fetchBudgetData = () => {
      const data = [
        ["01", "00211235", "Purchase of 10 units, 2Hp Hisense Air Conditions", "1,400,000.00", "1,380,000.00", "20,000.00", "18/11/2022"],
        ["02", "36211235", "Purchase of office equipments", "400,000.00", "500,000.00", "-100,000.00", "20/09/2022"],
        ["03", "00211235", "Purchase of 10 units, 2Hp Hisense Air Conditions", "2,000,000.00", "1,800,000.00", "200,000.00", "01/09/2022"],
        ["04", "00214465", "Purchase of 10 units, 2Hp Hisense Air Conditions", "1,400,000.00", "1,380,000.00", "20,000.00", "11/05/2022"],
        ["05", "36211235", "Purchase of office equipments", "400,000.00", "500,000.00", "-100,000.00", "20/09/2022"],
        ["06", "00214465", "Purchase of 10 units, 2Hp Hisense Air Conditions", "1,400,000.00", "1,380,000.00", "20,000.00", "11/05/2022"],
        ["07", "00214465", "Purchase of 10 units, 2Hp Hisense Air Conditions", "1,400,000.00", "1,380,000.00", "20,000.00", "11/05/2022"],
      ];
      setTableData(data);
    };

    fetchBudgetData();
  }, []);

  return (
    <div className="dashboard-main">
      <div className="flex flex-wrap gap-5">
        <Card 
          value="₦23,000,000" 
          iconSrc={IconStaff} 
          label="Total number of staff" 
          trend="5% more than last quarter" 
        />
        <Card
          value="₦10,000,000" 
          iconSrc={IconApplication} 
          label="Total application" 
        />
        <Card
          value="₦13,000,000" 
          iconSrc={IconProjects} 
          label="Total projects" 
        />
        <Card
          value="48%" 
          iconSrc={IconDepartments} 
          label="Total projects" 
        />
      </div>

      <div className="flex justify-between items-center mb-4 w-[1097px] m-auto">
        <h4 className="text-lg font-semibold">Create a Budget</h4>
        <Link className="button" to="/dashboard/office-budget/budget">
          Create Budget
        </Link>
      </div>

      <div className="tables-row">
        <Table
          headers={[
            "S/N",
            "Budget No.",
            "Budget Description",
            "Budgeted Amount (₦)",
            "Actual Amount (₦)",
            "Variance (₦)",
            "Date",
          ]}
          data={tableData}
        />
      </div>

      <Footer />
    </div>
  );
};

export default OfficeBudget;
