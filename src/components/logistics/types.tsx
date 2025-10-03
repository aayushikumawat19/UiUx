import React from "react";

export type TableRow = (string | React.ReactNode)[];

export interface TableData {
  headers: string[];
  data: TableRow[];
}

export interface CardInfo {
  value: string;
  iconSrc: string;
  label: string;
  trend?: string;
}
export interface LogisticsFormData {
  requestTitle: string;
  quantity: string;
  dateFrom: string;
  unitPrice: string;
  totalPrice: string;
  requestedBy: string;
  sentTo: string;
  attachment: File | null;
  attachmentType: string;
}

export interface LogisticsFormErrors {
  requestTitle: string;
  quantity: string;
  dateFrom: string;
  unitPrice: string;
  totalPrice: string;
  sentTo: string;
  attachmentType: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export type PaymentVoucherRow = string[];