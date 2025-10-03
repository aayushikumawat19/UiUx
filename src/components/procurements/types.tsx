export interface BeneficiaryDetailsForm {
  requestTitle: string;
  quantity: string;
  dateFrom: string;
}

export interface MemoActivitiesForm {
  accountName: string;
  accountNumber: string;
  bankName: string;
}

export interface ProcreateForm {
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

export type TableRow = (string | React.ReactNode)[];
