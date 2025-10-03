import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DashboardLayout from "@layout/DashboardLayout";
import DashboardHome from "@dashboard/DashboardHome";
import StaffList from "@staff/StaffList";
import Newstaff from "@staff/Newstaff";
import Staffnew from "@staff/Staffnew";
import New from "@staff/New";
import Memo from "@staff/Memo";
import PaymentVoucherList from "@paymentVoucher/PaymentVoucherList";
import Payroll from "@payroll/Payroll";
import Createsalary from "@payroll/Createsalary";
import Createsalaryy from "@payroll/Createsalaryy";
import Payslip from "@payroll/Payslip";
import Circulars from "@circulars/Circulars";
import Screens from "@circulars/Screens";
import Maintenance from "@maintenance/Maintenance";
import Main from "@maintenance/Main";
import Mainn from "@maintenance/Mainn";
import Logistics from "@logistics/Logistics";
import Request from "@logistics/Request";
import OfficeBudget from "@officeBudget/OfficeBudget";
import Budget from "@officeBudget/Budget";
import Inventory from "@inventory/Inventory";
import Item from "@inventory/Item";
import Notifications from "@notifications/Notifications";
import Back from "@notifications/Back";
import CapacityBuilding from "@capacityBuilding/CapacityBuilding";
import Building from "@capacityBuilding/Building";
import Build from "@capacityBuilding/Build";
import Procurements from "@procurements/Procurements";
import Procreate from "@procurements/Procreate";
import MemoPage from "@memo/AllMemos";
import CreateMemo from "@memo/CreateMemo";
import LoginForm from "@components/LoginForm";
import Signup from "@components/signup";
import ChangePassword from "@components/ChangePassword";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/changepassword/:id" element={<ChangePassword />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="memo" element={<MemoPage />} />
          <Route path="memo/create" element={<CreateMemo />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="notifications/back" element={<Back />} />

          {/* Procurements Routes */}
          <Route path="procurements" element={<Procurements />} />
          <Route path="procurements/procreate" element={<Procreate />} />

          {/* Logistics Routes */}
          <Route path="logistics" element={<Logistics />} />
          <Route path="logistics/request" element={<Request />} />

          {/* Office Budget Routes */}
          <Route path="office-budget" element={<OfficeBudget />} />
          <Route path="office-budget/budget" element={<Budget />} />

          {/* Circulars Routes */}
          <Route path="circulars" element={<Circulars />} />
          <Route path="circulars/screens" element={<Screens />} />

          {/* Capacity Building Routes */}
          <Route path="capacity-building" element={<CapacityBuilding />} />
          <Route path="capacity-building/building" element={<Building />} />
          <Route path="building/build" element={<Build />} />

          {/* Inventory Routes */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/item" element={<Item />} />

          {/* Maintenance Routes */}
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="maintenance/main" element={<Main />} />
          <Route path="main/mainn" element={<Mainn/>} />

          {/* Staff Routes */}
          <Route path="staff" element={<StaffList />} />
          <Route path="staff/staffnew" element={<Staffnew />} />
          <Route path="staffnew/newstaff" element={<Newstaff />} />
          <Route path="newstaff/new" element={<New />} />
          <Route path="new/memo" element={<Memo />} />

          {/* Payroll Routes */}
          <Route path="payment-voucher" element={<PaymentVoucherList />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="payroll/createsalary" element={<Createsalary />} />
          <Route path="createsalary/createsalaryy" element={<Createsalaryy />} />
          <Route path="createsalaryy/payslip" element={<Payslip />} />
        </Route>
      </Routes>
  );
}

export default App;