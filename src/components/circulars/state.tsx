import type { CircularFormData, CircularFormErrors, SelectOption } from "./types";

export const initialFormData: CircularFormData = {
  memoTitle: "",
  sentFrom: "Otor John",
  sentTo: "",
  date: "",
  memoBody: "",
};

export const initialFormErrors: CircularFormErrors = {
  memoTitle: "",
  sentTo: "",
  date: "",
  memoBody: "",
};

export const sentToOptions: SelectOption[] = [
  { value: "", label: "Select option" },
  { value: "office1", label: "Office 1" },
  { value: "office2", label: "Office 2" },
];
