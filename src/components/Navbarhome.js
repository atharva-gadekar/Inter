
import React, { useState } from "react";
import logo from '../assets/Frame 6 1.png';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbarhome = () => {
  const [ismobileopen, setmobileopen] = useState(false);
  const toggle = () => {
    setmobileopen(!ismobileopen);
  };
  return (
    <>
    <nav className="lg:flex hidden items-center justify-between flex-wrap bg-white p-4 rounded-2xl my-4 mx-5">
      <div className="flex items-center flex-shrink-0 text-gray-800">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2 rounded-md" />
          <h1 className="font-semibold text-base tracking-tight">Aditya Sharma</h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow ">
        <div className="text-[#0a66c2]">
          <h1 className="font-bold ml-9 text-3xl tracking-tight">Connexa</h1>
        </div>
      </div>
     
        <div className="flex items-center w-64">
          <input className="bg-[#f5f5f5] rounded-xl w-full py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-gray-100" type="text" placeholder="Global search"/>
        </div>

        
    
    </nav>
      
    
      <div>
      <div className="lg:hidden flex justify-left lg:block bg-gradient-to-br from-blue-100 to-white-400 p-4 ">
        {/* <button
          type="button"
          className="mt-4 ml-4 inline-flex lg:hidden items-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
          aria-controls="mobile-menu"
          aria-expanded={ismobileopen}
          onClick={toggle}
        > */}
          {/* <span className="sr-only flex">Open main menu</span> */}

          {/* <svg
            className={`block h-6 w-6 ${ismobileopen ? "hidden" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg> */}
          
          <h1 className="font-bold text-xl text-blue-700 pl-6">Connexa</h1>
          {/* <svg
            className={`h-6 w-6 ${ismobileopen ? "" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
        {/* </button> */}
        {/* <div className={`sm:hidden ${ismobileopen ? "" : "hidden"}`} id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div> */}
        <div className="flex items-center mt-1 ml-auto ">
          <FontAwesomeIcon icon={faCog} size="lg" className="text-blue-700 cursor-pointer lg:hidden " />
        </div>
        </div>
        </div>
    </>
    
  );
};

export default Navbarhome;
