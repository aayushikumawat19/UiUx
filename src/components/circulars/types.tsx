// types.ts
import React from "react";

// Form data type
export interface CircularFormData {
  memoTitle: string;
  sentFrom: string;
  sentTo: string;
  date: string;
  memoBody: string;
}

// Form errors type
export interface CircularFormErrors {
  memoTitle: string;
  sentTo: string;
  date: string;
  memoBody: string;
}

// Option type select fields
export interface SelectOption {
  value: string;
  label: string;
}

// OnChange function type
export type OnChangeFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => void;
