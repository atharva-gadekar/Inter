import React from "react";
import image from "../assets/Group-5674.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function Login() {
  return (
   <>
   <Navbar/>
    <div className="block lg:flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white-400 overflow-y-hidden">
      <div className="block lg:flex flex-col mt-20 ">

        {/* headings and subheadings */}
        <div className="ml-0 lg:-ml-16 ">
          <h1 className="text-4xl text-center lg:text-left lg:text-[2.9rem] tracking-wide leading-snug text-[#4875f9]  italic font-[670] ">
            Welcome to our <br /> Community
          </h1>
          <h2 className="text-center lg:text-left lg:text-lg font-[500] text-gray-500 mt-2 mb-6 whitespace-pre-line">
            A whole new productive journey <br /> starts right here!
          </h2>
        </div>
        
        {/* image */}
        <div className="relative">
          <img className="w-[60%] lg:w-[80%] transform -rotate-[20deg] mt-10 mr-auto ml-auto lg:ml-32 lg:mt-[-4rem]" src={image} alt="Login Image"/>
        </div>
      </div>

      {/* form */}
      <div className="ml-auto lg:mt-0 mr-auto lg:w-[23%] flex justify-center lg:block lg:ml-[17.5rem] lg:mr-0">
        <form className="flex flex-col gap-4 mb-4 w-[340px] lg:w-[550px]">
          <div className="flex flex-col">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-[#dfe6f9] border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="items-center hidden lg:flex">
              <input type="checkbox" className="mr-2" />
              <label>Keep me logged in</label>
            </div>
            <a href="#" className="text-blue-500 font-medium">Forgot password?</a>
          </div>
          <Link to='/home'>
          <button
            type="submit"
            className="w-full mt-1 lg:mt-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg"
          >
           SIGN IN
        
          </button>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;

