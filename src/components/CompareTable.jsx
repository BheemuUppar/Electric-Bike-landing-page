import React from 'react';

const ComparisonTable = ({ products }) => {
  return (
    <div className="bg-black-300  text-white-300 p-6 md:p-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Product Comparison</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left font-bold">Specification</th>
                {products.map((product, index) => (
                  <th key={index} className="px-4 py-2 text-left font-bold">{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(products[0].specifications).map((specKey, index) => (
                <tr key={index} className="">
                  <td className="px-4 py-2 ">{specKey}</td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-4 py-2">{product.specifications[specKey]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
