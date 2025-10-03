import React from "react";

export type SalaryDataRow = (string | React.ReactNode)[];
export type TableDataRow = (string | React.ReactNode)[];
export type ChartDataPoint = {
  month: string;
  net: number;
  tax: number;
  loan: number;
};