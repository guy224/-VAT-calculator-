import React, { useState } from 'react';

const VATCalculator = () => {
  const [price, setPrice] = useState('');
  const [isBeforeVAT, setIsBeforeVAT] = useState(true);
  const VAT_RATE = 0.17;

  const calculateWithVAT = (price) => {
    return (price * (1 + VAT_RATE)).toFixed(2);
  };

  const calculateWithoutVAT = (price) => {
    return (price / (1 + VAT_RATE)).toFixed(2);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const resultPrice = isBeforeVAT
    ? price && calculateWithVAT(parseFloat(price))
    : price && calculateWithoutVAT(parseFloat(price));

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">מחשבון מע״מ</h1>
      
      <div className="mb-6">
        <div className="relative flex items-center justify-between bg-gray-200 rounded-full p-1 w-64 mx-auto">
          <button
            className={`py-2 px-4 rounded-full transition-all duration-300 ${
              isBeforeVAT ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsBeforeVAT(true)}
          >
            לפני מע"מ
          </button>
          <button
            className={`py-2 px-4 rounded-full transition-all duration-300 ${
              !isBeforeVAT ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsBeforeVAT(false)}
          >
            אחרי מע"מ
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="price">
          {isBeforeVAT ? 'הכנס מחיר לפני מע״מ:' : 'הכנס מחיר אחרי מע״מ:'}
        </label>
        <div className="relative">
          <input
            className="shadow-sm appearance-none border rounded-lg w-full py-3 pr-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            placeholder="הכנס מחיר"
          />
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
            ₪
          </span>
        </div>
      </div>
      
      {price && (
        <div className="mt-6 p-4 bg-white bg-opacity-70 rounded-lg shadow-inner transition-all duration-300">
          <p className="text-xl font-semibold text-gray-800">
            {isBeforeVAT ? 'מחיר כולל מע״מ:' : 'מחיר ללא מע״מ:'} 
            <span className="text-2xl font-bold text-blue-600 mr-2">₪{resultPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default VATCalculator;
