import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../comman/Card';
import Footer from '../comman/Footer';
import Table from '../comman/Table';
import ImgPen from '../../assets/Inventory/Rectangle 39.png';
import ImgA4Paper from '../../assets/Inventory/Rectangle 39 (1).png';
import ImgLiquidWash from '../../assets/Inventory/Rectangle 39 (2).png';
import ImgPaperClips from '../../assets/Inventory/Rectangle 39 (3).png';
import ImgNotepads from '../../assets/Inventory/Rectangle 39 (4).png';
import ImgAirFreshner from '../../assets/Inventory/Rectangle 39 (5).png';

import IconStaff from '../../assets/Group 9.png';
import IconApplication from '../../assets/Group 9 (1).png';
import IconProjects from '../../assets/Group 9 (2).png';
import IconDepartments from '../../assets/Group 9 (3).png';

const Inventory: React.FC = () => {
  const [tableData, setTableData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    const fetchData = () => {
      const data: React.ReactNode[][] = [
        [
          "01",
          <img src={ImgPen} alt="Pen" className="product-image" />,
          "Pen",
          "45656787",
          "Stationaries",
          "50 pcs",
          "₦100.00",
          "₦5,000.00",
          "40 pcs",
          "Big Ben’s Store",
          "In stock"
        ],
        [
          "02",
          <img src={ImgA4Paper} alt="A4 Paper" className="product-image" />,
          "A4 Paper",
          "69956787",
          "Stationaries",
          "20 pcs",
          "₦3,000.00",
          "₦60,000.00",
          "0 pcs",
          "Big Ben’s Store",
          "Out of Stock"
        ],
        [
          "03",
          <img src={ImgLiquidWash} alt="Liquid Wash" className="product-image" />,
          "Liquid Wash",
          "36426787",
          "Detergent",
          "35 pcs",
          "₦5,000.00",
          "₦175,000.00",
          "10 pcs",
          "Quality wash",
          "Low in stock"
        ],
        [
          "04",
          <img src={ImgPaperClips} alt="Paper Clips" className="product-image" />,
          "Paper Clips",
          "45656787",
          "Stationaries",
          "45 pcs",
          "₦200.00",
          "₦9,000.00",
          "10 pcs",
          "Big Ben’s Store",
          "Low in Stock"
        ],
        [
          "05",
          <img src={ImgNotepads} alt="Notepads" className="product-image" />,
          "Notepads",
          "36426787",
          "Stationaries",
          "100 pcs",
          "₦2,000.00",
          "₦200,000.00",
          "45 pcs",
          "Big Ben’s Store",
          "In Stock"
        ],
        [
          "06",
          <img src={ImgAirFreshner} alt="Air Freshner" className="product-image" />,
          "Air Freshner",
          "36420021",
          "Detergent",
          "10 pcs",
          "₦1,000.00",
          "₦10,000.00",
          "0 pcs",
          "Quality wash",
          "Out of Stock"
        ],
      ];
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-main">
      <div className="flex flex-wrap gap-5 mb-6">
        <Card 
          value="250" 
          iconSrc={IconStaff} 
          label="Total number of staff" 
          trend="12 more than last quarter" 
        />
        <Card
          value="250" 
          iconSrc={IconApplication} 
          label="Total application" 
          trend="12 more than last quarter" 
        />
        <Card
          value="250" 
          iconSrc={IconProjects} 
          label="Total projects" 
          trend="12 more than last quarter" 
        />
        <Card
          value="10" 
          iconSrc={IconDepartments} 
          label="Total departments" 
          trend="12 more than last quarter" 
        />
      </div>

      <div className="flex justify-between items-center mb-4 w-[1097px] mx-auto">
        <h4 className="text-lg font-semibold">Update Stock List</h4>
        <Link className="button bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" to="/dashboard/inventory/item">
          Update Stock
        </Link>
      </div>

      <div className="max-w-[1097px] mx-auto bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <Table
          headers={[
            "S/N",
            "Image",
            "Product Name",
            "Product ID",
            "Category",
            "QTY Purchased",
            "Unit Price",
            "Total Amount",
            "In-Stock",
            "Supplier",
            "Status"
          ]}
          data={tableData}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Inventory;