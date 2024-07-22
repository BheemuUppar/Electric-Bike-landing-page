import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { bike } from '../assets/config'; // Adjust the path as needed

const ProductDetails = ( {bike}) => {
  const [selectedColor, setSelectedColor] = useState(bike.images[0].color);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const selectedImage = bike.images.find((image) => image.color === selectedColor).path;

  return (
    <div className="bg-black-300 text-white-400 p-6 md:p-12">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">{bike.name}</h1>
        <div className="flex justify-center mb-6">
          <motion.img
            src={selectedImage}
            alt={selectedColor}
            className=" rounded-lg "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{height:'400px' , width:"600px"}}
          />
        </div>
        <div className="flex justify-center mb-6 space-x-4">
          {bike.images.map((image, index) => (
            <motion.button
              key={index}
              className={`py-2 px-4 rounded-lg `}
              style={{background:image.color}}
              onClick={() => handleColorChange(image.color)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {image.color}
            </motion.button>
          ))}
        </div>
        <p className="text-lg mb-6">{bike.description}</p>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <ul className="space-y-2">
            {Object.entries(bike.specifications).map(([key, value], index) => {
              if (Array.isArray(value)) {
                return (
                  <li key={index} className='' style={{"margin-top": '30px'}}>
                    <span className="font-semibold">{key}:</span>
                    <ul className="list-disc pl-5">
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="grid grid-cols-4 gap-4">
                    <span className="font-semibold ">{key}:</span>
                    <span>{value}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails; 
