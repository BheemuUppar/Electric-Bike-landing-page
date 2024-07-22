import React from 'react';

const ProductCard = ({ image, title, details }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="mt-2">{details}</p>
      <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">Buy Now</button>
    </div>
  );
};

export default ProductCard;
