import IconStaff from "../../assets/Group 9.png";
import IconApplication from "../../assets/Group 9 (1).png";
import IconProjects from "../../assets/Group 9 (2).png";
import IconDepartments from "../../assets/Group 9 (3).png";
import ChartImage from "../../assets/Group 23.png";

export interface CardData {
  value: string;
  iconSrc: string;
  label: string;
  trend: string;
}

export interface TableData {
  title: string;
  headers: string[];
  data: (string | React.ReactNode)[][];
}

export interface ChartLegendItem {
  status: string;
  text: string;
}

export const initialCardData: CardData[] = [
  { value: "0", iconSrc: IconStaff, label: "Total number of staff", trend: "Loading..." },
  { value: "0", iconSrc: IconApplication, label: "Total application", trend: "Loading..." },
  { value: "0", iconSrc: IconProjects, label: "Total projects", trend: "Loading..." },
  { value: "0", iconSrc: IconDepartments, label: "Total departments", trend: "Loading..." },
];

export const updatedCardData: CardData[] = [
  { value: "250", iconSrc: IconStaff, label: "Total number of staff", trend: "12 more than last quarter" },
  { value: "180", iconSrc: IconApplication, label: "Total application", trend: "8 more than last quarter" },
  { value: "75", iconSrc: IconProjects, label: "Total projects", trend: "5 more than last quarter" },
  { value: "10", iconSrc: IconDepartments, label: "Total departments", trend: "2 more than last quarter" },
];

export const tableDataList: TableData[] = [
  {
    title: "Memo",
    headers: ["S/N", "Memo Title", "Sent From", "Sent To", "Status"],
    data: [
      ["01", "Operations memo", "Otor John", "Ibrahim Sadiq", "Pending"],
      ["02", "Project memo", "Fatima Faruk", "Shola Abiola", "Approved"],
      ["03", "Project onboard notice", "Otor John", "James Emeka", "Approved"],
      ["04", "Operations memo", "Ibrahim Musa", "Otor John", "Approved"],
    ],
  },
  {
    title: "Staff List",
    headers: ["S/N", "Staff Name", "Staff Role", "Designation"],
    data: [
      ["01", "Abubakar Ismaila Goje", "Admin", "Human Resource Dept."],
      ["02", "Ifeanyi Obinna", "Admin", "Management"],
      ["03", "Bankole Olanrewaju", "HOD IT", "Peoples and Operation"],
      ["04", "Chidimma Ebere", "HOD Account", "Accounts"],
    ],
  },
  {
    title: "Payment Vouchers",
    headers: ["S/N", "Subject", "Date", "Status"],
    data: [
      ["01", "Request for FARS for October 2022", "25/01/2023", "Pending"],
      ["02", "Request for project proposal fee", "19/01/2023", "Approved"],
      ["03", "Request for FARS for October 2022", "10/01/2023", "Approved"],
      ["04", "Request for project proposal fee", "03/01/2023", "Pending"],
    ],
  },
];

export const chartLegend: ChartLegendItem[] = [
  { status: "pending", text: "80 Pending" },
  { status: "approved", text: "370 Approved" },
  { status: "rejected", text: "50 Rejected" },
];

export const chartImageSrc = ChartImage;
