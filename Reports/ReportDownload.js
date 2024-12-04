import React from 'react';

function ReportDownload() {
  const handleDownload = (type) => {
    const url = `http://localhost:3001/api/reports/${type}`;
    window.location.href = url;
  };

  return (
    <div className="container">
      <h2>Download Reports</h2>
      <button onClick={() => handleDownload('pdf')} className="btn btn-primary">Download PDF Report</button>
      <button onClick={() => handleDownload('csv')} className="btn btn-secondary">Download CSV Report</button>
      <button onClick={() => handleDownload('word')} className="btn btn-success">Download Word Report</button>
      <button onClick={() => handleDownload('excel')} className="btn btn-info">Download Excel Report</button>
    </div>
  );
}

export default ReportDownload;
