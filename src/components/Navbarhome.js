import React, { useEffect, useState } from "react";
import logo from '../assets/Frame 6 1.png';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbarhome = () => {
  const [ismobileopen, setmobileopen] = useState(false);
  const [userName, setUserName] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');
          const response = await fetch(`https://inter-api-8q0x.onrender.com/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error("Error fetching user details");
          }

          const data = await response.json();
          console.log(data);
          setUserName(data.user.name);
        }
      } 
      
      catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  
  const toggle = () => {
    setmobileopen(!ismobileopen);
  };

  return (
    <>
      <nav className="lg:flex hidden items-center justify-between flex-wrap bg-white p-4 rounded-2xl my-4 mx-5">
        <div className="flex items-center flex-shrink-0 text-gray-800">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2 rounded-md" />
            <h1 className="font-semibold text-base tracking-tight">{userName}</h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow ">
          <div className="text-[#0a66c2]">
            <h1 className="font-bold ml-9 text-3xl tracking-tight">Connexa</h1>
          </div>
        </div>

        <div className="flex items-center w-64">
          <input className="bg-[#f5f5f5] rounded-xl w-full py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-gray-100" type="text" placeholder="Global search" />
        </div>
      </nav>


      <div>
        <div className="lg:hidden flex justify-left lg:block bg-gradient-to-br from-blue-100 to-white-400 p-4 ">
          <h1 className="font-bold text-xl text-blue-700 pl-6">Connexa</h1>
          <div className="flex items-center mt-1 ml-auto ">
            <FontAwesomeIcon icon={faCog} size="lg" className="text-blue-700 cursor-pointer lg:hidden " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarhome;
