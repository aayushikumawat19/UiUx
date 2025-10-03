import { NavLink } from 'react-router-dom';
import DashboardIcon from '@assets/Sidebar/Dashboard (1).png';
import StaffIcon from '@assets/Sidebar/Staff.png';
import PayrollIcon from '@assets/Sidebar/Payroll.png';
import MemoIcon from '@assets/Sidebar/Memo.png';
import CircularsIcon from '@assets/Sidebar/Circulars.png';
import MaintenanceIcon from '@assets/Sidebar/Maintenance.png';
import LogisticsIcon from '@assets/Sidebar/Logistics.png';
import BudgetIcon from '@assets/Sidebar/Budget.png';
import StockIcon from '@assets/Sidebar/Stock.png';
import NotificationsIcon from '@assets/Sidebar/Notifications.png';
import CapacityIcon from '@assets/Sidebar/Capacity Building.png';
import ProcurementIcon from '@assets/Sidebar/Procurement.png';
import LogoIcon from '@assets/Group 13.png';

const Sidebar = () => {
  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
    { to: '/dashboard/staff', label: 'Staff', icon: StaffIcon },
    { to: '/dashboard/payment-voucher', label: 'Payment Voucher', icon: StaffIcon },
    { to: '/dashboard/payroll', label: 'Payroll', icon: PayrollIcon },
    { to: '/dashboard/memo', label: 'Memo', icon: MemoIcon },
    { to: '/dashboard/circulars', label: 'Circulars', icon: CircularsIcon },
    { to: '/dashboard/maintenance', label: 'Maintenance', icon: MaintenanceIcon },
    { to: '/dashboard/logistics', label: 'Logistics', icon: LogisticsIcon },
    { to: '/dashboard/office-budget', label: 'Office Budget', icon: BudgetIcon },
    { to: '/dashboard/inventory', label: 'Stocks and Inventory', icon: StockIcon },
    { to: '/dashboard/notifications', label: 'Notifications', icon: NotificationsIcon },
    { to: '/dashboard/capacity-building', label: 'Capacity Building', icon: CapacityIcon },
    { to: '/dashboard/procurements', label: 'Procurements', icon: ProcurementIcon },
  ];

  return (
    <aside className="max-w-[260px] w-full h-[1065px] bg-white border-r border-[#e0e0e0] flex flex-col pt-6 min-w-[260px]">
        <div className=" my-[7px]  gap-[4px] text-center font-bold text-[16px]">
        <img src={LogoIcon} alt="Logo" className="w-[35.5px] h-[35.5px] mb-[8px] " />

        <div className="">
          <p className="text-[12px] leading-[16px] font-bold">
            UiUxOtor <br />
            <span className="font-normal">ERP System</span>
          </p>
        </div>
      </div>

      <nav className="absolute top-[181px] w-[260px] h-[746px] flex flex-col gap-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/dashboard'}
            className={({ isActive }) =>
              `w-[260px] h-[50px] flex items-center relative text-[#333] transition-colors no-underline ${
                isActive ? 'bg-[#e6f0ff] font-bold' : 'hover:bg-[#f0f0f0]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-[6px] h-full bg-[#5584CE] rounded-tr-md rounded-br-md absolute left-0 top-0 ${
                    isActive ? 'block' : 'hidden'
                  }`}
                ></div>
                <div className="w-[160px] h-[24px] relative left-[30px] flex items-center gap-1">
                  <img src={link.icon} alt={link.label} className="w-6 h-6 object-contain" />
                  <span className="text-[14px] leading-[24px]">{link.label}</span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
