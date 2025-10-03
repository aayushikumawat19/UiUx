import type { BeneficiaryDetailsForm, MemoActivitiesForm, ProcreateForm } from "../procurements/types";

export const initialBeneficiaryDetails: BeneficiaryDetailsForm = {
  requestTitle: "",
  quantity: "",
  dateFrom: "",
};

export const initialMemoActivities: MemoActivitiesForm = {
  accountName: "",
  accountNumber: "",
  bankName: "",
};

export const initialProcreateForm: ProcreateForm = {
  requestTitle: "",
  quantity: "",
  dateFrom: "",
  unitPrice: "",
  totalPrice: "",
  requestedBy: "Otor John Stephen",
  sentTo: "",
  attachment: null,
  attachmentType: "",
};
