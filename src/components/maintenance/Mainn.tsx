import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@components/comman/Button";
import ScheduledMaintenance from "@maintenance/ScheduledMaintenance";

type MaintenanceRow = string[];

const Mainn: React.FC = () => {
  const [scheduledData] = useState<MaintenanceRow[]>([
    ["01", "Request for travel time", "Training course", "22/11/2022", "30/11/2022", "360,000.00"],
  ]);

  return (
    <div className="py-10 px-4 min-h-screen">
      <Link to="/dashboard/main" className="text-blue-500 font-medium mb-4 inline-block">
        &larr; Back
      </Link>

      <ScheduledMaintenance data={scheduledData} />

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Maintenance Breakdown</h3>
        <p className="text-3xl font-bold mb-12 p-[140px] text-center">To Be Designed 😍✨</p>
        <Link to="/dashboard/main/mainn">
          <Button
            text="Submit"
            link={null}
            onClick={() => {}}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700"
          />
        </Link>
      </div>
    </div>
  );
};

export default Mainn;
