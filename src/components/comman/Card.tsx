import React from 'react';
import ArrowUpIcon from '../../assets/Small Arrow Up.png';

interface CardProps {
  value: string;
  iconSrc: string;
  label: string;
  trend?: string;
}

const Card: React.FC<CardProps> = ({ value, iconSrc, label, trend }) => {
  return (
    <div className="bg-white rounded-[12px] p-5 w-[271px] h-[150px] flex flex-col justify-center text-center">
      <div className="flex items-center justify-between">
        <h3 className="text-[28px] font-bold text-black">{value}</h3>
        <img src={iconSrc} alt={label} className="w-[50px] h-[50px]" />
      </div>

      <p className="text-black text-[14px] mt-[-3px] text-left font-normal">{label}</p>
      {trend && (
        <div className="flex items-center text-green-600 text-[12px] mt-2 gap-1 w-[162px]">
          <img
            src={ArrowUpIcon}
            alt="Increase"
            className="w-[16px] h-[16px]"
          />
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
