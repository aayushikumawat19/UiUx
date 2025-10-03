import React, { useState } from "react";
import Button from "@components/comman/Button";
import { Link } from "react-router-dom";
import DetailsGroup from "@capacityBuilding/DetailsGroup";
import ParticipantList from "@capacityBuilding/ParticipantList";

type Participant = string;

const Build: React.FC = () => {
  const participants: Participant[] = [
    "Fatima Mohammed",
    "Ibrahim Bankole",
    "Otor John Stephen",
    "Abubakar Alghazali",
    "Ranky Akab",
    "Sadiq Lukman"
  ];

  const [status, setStatus] = useState<string>("");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setStatus(e.target.value);
  };

  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      <Link to="/dashboard/capacity-building/building" className="inline-block mb-5 text-blue-600 text-lg">
        Back
      </Link>

      <h2 className="text-2xl mb-2">Staff Health and Safety Training</h2>

      <div className="mb-5">
        <div className="flex justify-between mb-5">
          <DetailsGroup label="Training type" value="Team training" />
          <DetailsGroup label="Training duration" value="3 weeks" />
          <DetailsGroup label="Training mode" value="Physical" />
          <DetailsGroup label="Training status" value="In Progress" />
        </div>

        <h3 className="text-xl mb-2">Training Participants</h3>
        <ParticipantList participants={participants} />

        <div className="flex items-center">
          <label htmlFor="statusUpdate" className="mr-2">Update status</label>
          <select
            id="statusUpdate"
            className="border border-gray-300 rounded-lg p-2 w-1/2 max-w-xs"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Select option</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <Button
            text="Update"
            className="ml-2 bg-blue-600 text-white rounded px-4 py-2"
            onClick={() => alert(`Status updated to: ${status}`)}
            link={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Build;
