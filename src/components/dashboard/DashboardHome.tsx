import React, { useState, useEffect } from "react";
import Card from "@comman/Card";
import Table from "@comman/Table";
import Chart from "@comman/Chart";
import Footer from "@comman/Footer";
import type { CardData} from "@dashboard/state";
import {
  initialCardData,
  updatedCardData,
  tableDataList,
  chartLegend,
  chartImageSrc,
  
} from "./state";

const DashboardHome: React.FC = () => {
  const [cardData, setCardData] = useState<CardData[]>(initialCardData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardData(updatedCardData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col flex-wrap gap-5 bg-white">
      <div className="flex flex-wrap gap-5">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="flex gap-5 flex-wrap">
        {tableDataList.slice(0, 2).map((table, index) => (
          <Table key={index} title={table.title} headers={table.headers} data={table.data} />
        ))}
      </div>

      <div className="flex gap-5 flex-wrap">
        <Table {...tableDataList[2]} />
        <Chart title="Staff Applications Card" totalApplications="500" legendItems={chartLegend} chartImage={chartImageSrc} />
      </div>

      <Footer />
    </div>
  );
};

export default DashboardHome;
