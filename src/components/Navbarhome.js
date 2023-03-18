import React from 'react';
import logo from '../assets/Frame 6 1.png';

const Navbarhome = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-4 rounded-2xl my-4 mx-5">
      <div className="flex items-center flex-shrink-0 text-gray-800">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2 rounded-md" />
          <h1 className="font-semibold text-base tracking-tight">Nick Ryback</h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow ">
        <div className="text-[#0a66c2]">
          <h1 className="font-bold ml-9 text-3xl tracking-tight">Linkedin</h1>
        </div>
      </div>
     
        <div className="flex items-center w-64">
          <input className="bg-[#f5f5f5] rounded-xl w-full py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-gray-100" type="text" placeholder="Global search"/>
        </div>
    
    </nav>
  );
};

export default Navbarhome;
