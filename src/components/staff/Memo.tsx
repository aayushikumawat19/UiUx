import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import Table from '../comman/Table';
import FormField from '../comman/FormField';

const Memo: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [tableData, setTableData] = useState<string[][]>([
    ["01", "Consultancy service", "FARS", "1", "1,000,000.00", "1,000,000.00", "7.50%", "75,000.00", "1,075,000.00", "2.5%", "25,000.00", "1,050,000.00"],
    ["02", "Consultancy service", "Tax Service", "1", "500,000.00", "500,000.00", "7.50%", "37,500.00", "537,500.00", "10%", "50,000.00", "487,500.00"]
  ]);

  const totalData = [
    ["Total", "1,500,000.00", "112,500.00", "75,000.00", "1,537,500.00"]
  ];

  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');

const handleSubjectChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setSubject(e.target.value);
};

  const handleAccountNameChange = (e: ChangeEvent<HTMLInputElement>) => setAccountName(e.target.value);
  const handleAccountNumberChange = (e: ChangeEvent<HTMLInputElement>) => setAccountNumber(e.target.value);
  const handleBankNameChange = (e: ChangeEvent<HTMLInputElement>) => setBankName(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      subject,
      tableData,
      accountName,
      accountNumber,
      bankName,
    });
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-10">Payment Voucher</h2>

      <form onSubmit={handleSubmit}>
        <header className="mb-5">
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <FormField
            id="subject"
            label="Subject"
            placeholder="Enter subject"
            value={subject}
            onChange={handleSubjectChange}
          />
        </header>

        <div className="mb-10">
          <Table
            title="Voucher Details"
            headers={[
              "S/N", "Class", "Description", "QTY", "Unit Price (₦)", "Amount (₦)", "VAT %",
              "VAT Amount (₦)", "Gross Amount (₦)", "WHT %", "WHT Amount (₦)", "Net Amount (₦)"
            ]}
            data={tableData}
          />

          <button
            type="button"
            className="py-2 px-4 bg-white text-blue-600 mt-2 border border-blue-600 rounded hover:bg-blue-50 transition"
          >
            + Add another row
          </button>

          <div className="mt-8">
            <Table
              title="Total Amount"
              headers={["Description", "Total Amount (₦)", "VAT Amount (₦)", "WHT Amount (₦)", "Net Amount (₦)"]}
              data={totalData}
            />
          </div>

          <div className="mt-6">
            <label className="block font-medium">Net amount in words:</label>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Beneficiary Payment Details</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="accountName" className="block text-sm font-medium mb-1">
                Account Name
              </label>
              <input
                type="text"
                id="accountName"
                placeholder="Enter name"
                value={accountName}
                onChange={handleAccountNameChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="accountNumber" className="block text-sm font-medium mb-1">
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                placeholder="Enter number"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="bankName" className="block text-sm font-medium mb-1">
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                placeholder="Enter bank name"
                value={bankName}
                onChange={handleBankNameChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Submit Payment Voucher
        </button>
      </form>
    </div>
  );
};

export default Memo;
