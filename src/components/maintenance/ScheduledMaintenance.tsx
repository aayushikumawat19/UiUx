const ScheduledMaintenance = ({ data }) => {
  return (
    <div className="payment-voucher">
       <h3 className="text-2xl font-semibold mb-4">Scheduled Maintenance</h3>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Request Title</th>
            <th>Purpose</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Amount (#)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduledMaintenance;