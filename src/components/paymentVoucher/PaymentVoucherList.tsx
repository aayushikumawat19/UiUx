import React, { useState, useEffect } from 'react';
import Card from '@comman/Card';
import Table from '@comman/Table';
import Chart from '@comman/Chart';
import Footer from '@comman/Footer';
import IconStaff from '@assets/Group 9.png';
import IconApplication from '@assets/Group 9 (1).png';
import IconProjects from '@assets/Group 9 (2).png';
import IconDepartments from '@assets/Group 9 (3).png';
import ChartImage from '@assets/Group 23.png';

type CardData = {
  value: string;
  iconSrc: string;
  label: string;
  trend: string;
};

const PaymentVoucherList: React.FC = () => {
  const [cardData, setCardData] = useState<CardData[]>([
    {
      value: '0',
      iconSrc: IconStaff,
      label: 'Total number of staff',
      trend: 'Loading...',
    },
    {
      value: '0',
      iconSrc: IconApplication,
      label: 'Total application',
      trend: 'Loading...',
    },
    {
      value: '0',
      iconSrc: IconProjects,
      label: 'Total projects',
      trend: 'Loading...',
    },
    {
      value: '0',
      iconSrc: IconDepartments,
      label: 'Total departments',
      trend: 'Loading...',
    },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardData([
        {
          value: '250',
          iconSrc: IconStaff,
          label: 'Total number of staff',
          trend: '12 more than last quarter',
        },
        {
          value: '180',
          iconSrc: IconApplication,
          label: 'Total application',
          trend: '8 more than last quarter',
        },
        {
          value: '75',
          iconSrc: IconProjects,
          label: 'Total projects',
          trend: '5 more than last quarter',
        },
        {
          value: '10',
          iconSrc: IconDepartments,
          label: 'Total departments',
          trend: '2 more than last quarter',
        },
      ]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-50 min-h-screen">
      {/* Cards */}
      <div className="flex flex-wrap gap-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            iconSrc={card.iconSrc}
            label={card.label}
            trend={card.trend}
          />
        ))}
      </div>

      {/* Tables */}
      <div className="flex flex-wrap gap-5">
        <Table
          title="Memo"
          headers={['S/N', 'Memo Title', 'Sent From', 'Sent To', 'Status']}
          data={[
            ['01', 'Operations memo', 'Otor John', 'Ibrahim Sadiq', 'Pending'],
            ['02', 'Project memo', 'Fatima Faruk', 'Shola Abiola', 'Approved'],
            ['03', 'Project onboard notice', 'Otor John', 'James Emeka', 'Approved'],
            ['04', 'Operations memo', 'Ibrahim Musa', 'Otor John', 'Approved'],
          ]}
        />

        <Table
          title="Staff List"
          headers={['S/N', 'Staff Name', 'Staff Role', 'Designation']}
          data={[
            ['01', 'Abubakar Ismaila Goje', 'Admin', 'Human Resource Dept.'],
            ['02', 'Ifeanyi Obinna', 'Admin', 'Management'],
            ['03', 'Bankole Olanrewaju', 'HOD IT', 'Peoples and Operation'],
            ['04', 'Chidimma Ebere', 'HOD Account', 'Accounts'],
          ]}
        />
      </div>

      {/* Payment Vouchers and Chart */}
      <div className="flex flex-wrap gap-5">
        <Table
          title="Payment Vouchers"
          headers={['S/N', 'Subject', 'Date', 'Status']}
          data={[
            ['01', 'Request for FARS for October 2022', '25/01/2023', 'Pending'],
            ['02', 'Request for project proposal fee', '19/01/2023', 'Approved'],
            ['03', 'Request for FARS for October 2022', '10/01/2023', 'Approved'],
            ['04', 'Request for project proposal fee', '03/01/2023', 'Pending'],
          ]}
        />

        <Chart
          title="Staff Applications Card"
          totalApplications="500"
          legendItems={[
            { status: 'pending', text: '80 Pending' },
            { status: 'approved', text: '370 Approved' },
            { status: 'rejected', text: '50 Rejected' },
          ]}
          chartImage={ChartImage}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaymentVoucherList;
