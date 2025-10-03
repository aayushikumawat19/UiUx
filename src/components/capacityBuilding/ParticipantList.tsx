import React from 'react';

interface ParticipantListProps {
  participants: string[];
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  return (
    <ul className="participant-list">
      {participants.map((participant: string, index: number) => (
        <li key={index}>{`${index + 1}. ${participant}`}</li>
      ))}
    </ul>
  );
};

export default ParticipantList;
