import React from 'react';

const CompareTable = ({ data }) => {
  return (
    <table className="w-full bg-gray-100 text-left">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className="p-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompareTable;
