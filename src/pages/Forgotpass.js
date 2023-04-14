import React, { useState } from "react";
import image from "../assets/Group-5674.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { Spin } from "antd";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Forgot() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,
    };

    try {
      const response = await axios.put(
        `https://inter-api-8q0x.onrender.com/auth/forgot-password`,
        data
      );

      console.log(response);
      message.success("Email sent successfully!");
      setLoading(false);
    } 

    catch (error) {
      setLoading(false);
      console.error(error);
      message.error("Failed to send email. Please try again!");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-400">
      <Navbar className="mt-3" />
      <div className="block lg:flex items-center justify-center min-h-[90vh] overflow-y-hidden">
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
            <img
              className="w-[60%] lg:w-[80%] transform -rotate-[20deg] mt-10 mr-auto ml-auto lg:ml-32 lg:mt-[-4rem]"
              src={image}
              alt="Login Image"
            />
          </div>
        </div>

        {/* form */}
        <div className="ml-auto lg:mt-0 mr-auto lg:w-[23%] flex justify-center lg:block lg:ml-[17.5rem] lg:mr-0">
          <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-1 lg:mt-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg"
            >
              SEND EMAIL
            </button>
            {!loading && <Spin className="opacity-0" />}
            {loading && <Spin />}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
