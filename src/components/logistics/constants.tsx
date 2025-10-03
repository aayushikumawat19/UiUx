import type { SelectOption, PaymentVoucherRow } from "./types";
import IconStaff from "@assets/Group 9.png";
import IconApplication from "@assets/Group 9 (1).png";
import IconProjects from "@assets/Group 9 (2).png";
import IconDepartments from "@assets/Group 9 (3).png";

export const CARD_DATA = [
  {
    value: "300",
    iconSrc: IconStaff,
    label: "Total number of staff",
    trend: "12 more than last quarter",
  },
  {
    value: "5,000,000",
    iconSrc: IconApplication,
    label: "Total application",
  },
  {
    value: "70",
    iconSrc: IconProjects,
    label: "Total projects",
  },
  {
    value: "280",
    iconSrc: IconDepartments,
    label: "Total projects",
    trend: "12 more than last quarter",
  },
];

export const TABLE_HEADERS = [
  "S/N",
  "Title",
  "Level",
  "Basic Salary",
  "Allowance",
  "Gross Salary",
  "Deductions",
  "Net Salary",
  "Action",
];

export const SENT_TO_OPTIONS: SelectOption[] = [
  { value: "", label: "Select option" },
  { value: "manager", label: "Manager" },
  { value: "hr", label: "HR" },
  { value: "finance", label: "Finance" },
];

export const ATTACHMENT_TYPE_OPTIONS: SelectOption[] = [
  { value: "", label: "Select option" },
  { value: "invoice", label: "Invoice" },
  { value: "contract", label: "Contract" },
  { value: "other", label: "Other" },
];

export const PAYMENT_VOUCHER_DATA: PaymentVoucherRow[] = [
  ["01", "Request for travel time", "Training course", "22/11/2022", "30/11/2022", "360,000.00"],
];
