import { Outlet } from 'react-router-dom';
import Sidebar from '../comman/Sidebar';
import './DashboardLayout.css';
import DashboardHeader from '../comman/DashboardHeader';

const DashboardLayout = () => {
  return (
   <div className="max-w-[1440px] w-full mx-auto flex overflow-hidden relative">
  <Sidebar />
  <div className="w-full">
    <DashboardHeader />
    <div className="bg-white">
      <Outlet />
    </div>
  </div>
</div>
  );
};

export default DashboardLayout;