import React from 'react';

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden ml-5 mr-5 h-[70%] ">
      <div className="p-4">
        <p className="text-gray-800 font-medium text-lg mb-3">Aditya Sharma</p>
        <p className="text-gray-600 text-sm mb-4">Maali randwe dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum enim a faucibus.</p>
        <div className="mb-5">
          <p className="text-gray-800 font-medium text-lg mb-3">College Name:</p>
          <p className="text-gray-600 text-sm">MNIT Allahabad</p>
        </div>
        <div className="mb-5">
          <p className="text-gray-800 font-medium text-lg mb-3">Information:</p>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum enim a faucibus.</p>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum enim a faucibus.</p>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum enim a faucibus.</p>
          
        </div>
        <div className="flex flex-wrap">
          <span className="bg-blue-200 text-blue-800 text-xs font-medium py-1 px-2 rounded-full mr-2 mb-2">#webd</span>
          <span className="bg-purple-200 text-purple-800 text-xs font-medium py-1 px-2 rounded-full mr-2 mb-2">#design</span>
          <span className="bg-green-200 text-green-800 text-xs font-medium py-1 px-2 rounded-full mr-2 mb-2">#appd</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
