import React from "react";

// Card Data Type
export interface CardData {
  value: string;
  iconSrc: string;
  label: string;
  trend: string;
}

// Table Row Type
export type TableRow = (string | React.ReactNode)[];

// Table Data Type
export interface TableData {
  title: string;
  headers: string[];
  data: TableRow[];
}

// Chart Legend Item
export interface ChartLegendItem {
  status: string;
  text: string;
}
