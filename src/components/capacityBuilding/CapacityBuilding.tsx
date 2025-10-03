import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@comman/Card";
import Table from "@comman/Table";
import Footer from "@comman/Footer";
import IconStaff from "@assets/Group 9.png";
import IconApplication from "@assets/Group 9 (1).png";
import IconProjects from "@assets/Group 9 (2).png";
import IconDepartments from "@assets/Group 9 (3).png";

// table row data
type TableRow = (string | React.ReactNode)[];

// table headers
type TableHeaders = string[];

// Type Card props
export interface CardProps {
  value: string;
  iconSrc: string;
  label: string;
  trend: string;
}

const CapacityBuilding: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  // Fetch initialize data
  useEffect(() => {
    const fetchData = (): void => {
      const data: TableRow[] = [
        [
          "01",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "3 days",
          "Physical",
          "In progress",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "02",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "2 weeks",
          "Online",
          "To-do",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "03",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "3 days",
          "Physical",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "04",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "3 days",
          "Physical",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "05",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Individual",
          "1 week",
          "Online",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "06",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "5 days",
          "Physical",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "07",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "3 days",
          "Physical",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "08",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "2 days",
          "Online",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "09",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "1 month",
          "Physical",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
        [
          "10",
          "Staff Health and Safety Training",
          "03/12/2022",
          "Team",
          "3 days",
          "Physical",
          "Completed",
          <Link to="#" className="no-border">
            View more
          </Link>,
        ],
      ];
      setTableData(data);
    };

    fetchData();
  }, []);

  const tableHeaders: TableHeaders = [
    "S/N",
    "Training Description",
    "Start Date",
    "Training Type",
    "Duration",
    "Training Mode",
    "Status",
    "Action",
  ];

  const cardsData: CardProps[] = [
    { value: "250", iconSrc: IconStaff, label: "Total number of staff", trend: "12 more than last quarter" },
    { value: "250", iconSrc: IconApplication, label: "Total application", trend: "12 more than last quarter" },
    { value: "250", iconSrc: IconProjects, label: "Total projects", trend: "12 more than last quarter" },
    { value: "10", iconSrc: IconDepartments, label: "Total departments", trend: "12 more than last quarter" },
  ];

  return (
    <div className="dashboard-main">
      <div className="flex flex-wrap gap-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            iconSrc={card.iconSrc}
            label={card.label}
            trend={card.trend}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mb-4 w-[1097px]">
        <h4 className="text-lg">Training Requests</h4>
        <Link className="button" to="/dashboard/capacity-building/building">
          Make Training Request
        </Link>
      </div>

      <div className="tables-row">
        <Table title="All Trainings" headers={tableHeaders} data={tableData} />
      </div>

      <Footer />
    </div>
  );
};

export default CapacityBuilding;
