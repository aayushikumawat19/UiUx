import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@comman/Card";
import Table from "@comman/Table";
import Footer from "@comman/Footer";
import { CARD_DATA, TABLE_HEADERS } from "@logistics/constants";
import type { TableRow } from "@logistics/types";

const Logistics: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  const actionLink = () => (
    <Link to="#" className="text-blue-600 hover:underline">
      View more
    </Link>
  );

  useEffect(() => {
    const fetchData = () => {
      const data: TableRow[] = [
        ["01", "Office chairs", "20", "360,000.00", "Otor John", "Faruk Hashim", "21/11/2022", "Pending", actionLink()],
        ["02", "Office tables", "10", "180,000.00", "Otor John", "Faruk Hashim", "22/11/2022", "Approved", actionLink()],
        ["03", "Projector", "2", "120,000.00", "Otor John", "Faruk Hashim", "23/11/2022", "Pending", actionLink()],
        ["04", "Laptops", "5", "500,000.00", "Otor John", "Faruk Hashim", "24/11/2022", "Approved", actionLink()],
        ["05", "Stationery", "50", "30,000.00", "Otor John", "Faruk Hashim", "25/11/2022", "Pending", actionLink()],
      ];
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-main">
      {/* Cards */}
      <div className="flex flex-wrap gap-5">
        {CARD_DATA.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            iconSrc={card.iconSrc}
            label={card.label}
            trend={card.trend}
          />
        ))}
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center mb-4 w-[1097px] m-auto">
        <h4 className="text-lg">Logistics Request</h4>
        <Link className="button" to="/dashboard/logistics/request">
          Logistics Request
        </Link>
      </div>

      {/* Table */}
      <Table headers={TABLE_HEADERS} data={tableData} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Logistics;
