import { Routes, Route, Navigate } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import StaffList from './components/staff/StaffList';
import PaymentVoucherList from './components/paymentVoucher/PaymentVoucherList';
import Payroll from './components/payroll/Payroll';
import Circulars from './components/circulars/Circulars';
import Maintenance from './components/maintenance/Maintenance';
import Logistics from './components/logistics/Logistics';
import OfficeBudget from './components/officeBudget/OfficeBudget';
import Inventory from './components/inventory/Inventory';   
import Notifications from './components/notifications/Notifications';
import CapacityBuilding from './components/capacityBuilding/CapacityBuilding';
import Procurements from './components/procurements/Procurements';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardHome from './components/dashboard/DashboardHome';
import MemoPage from './components/memo/AllMemos';
import CreateMemo from './components/memo/CreateMemo';
import Back from './components/notifications/Back';
import Procreate from './components/procurements/Procreate';
import Request from './components/logistics/Request';
import Budget from './components/officeBudget/Budget';
import Screens from './components/circulars/Screens';
import Building from './components/capacityBuilding/Building';
import Build from './components/capacityBuilding/Build';
import Item from './components/inventory/Item';
import Main from './components/maintenance/Main';
import Mainn from './components/maintenance/Mainn';
import Newstaff from './components/staff/Newstaff';
import Staffnew from './components/staff/Staffnew';
import New from './components/staff/New';
import Memo from './components/staff/Memo';
import Createsalary from './components/payroll/Createsalary';
import Createsalaryy from './components/payroll/Createsalaryy';
import Payslip from './components/payroll/Payslip';
import EmailVerification from './components/EmailVerification';
import TwoFactorAuth from './components/TwoFactorAuth';
import LoginForm from './components/LoginForm';
import Signup from "./components/signup";
import ChangePassword from "./components/ChangePassword";
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/changepassword/:id" element={<ChangePassword />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/2fa" element={<TwoFactorAuth />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification/>} />
        <Route path="/password-reset" element={<PasswordReset />} />
        
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