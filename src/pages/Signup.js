import React from "react";
import image from "../assets/Group-5674.png";
import ImgUpload from "../components/ImgUpload";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	faGoogle
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const schema=yup.object().shape({
	name:yup.string().required(),
	collegeName:yup.string().required(),
	year:yup.number().positive().integer().required(),
branch:yup.string().required(),
email:yup.string().email().required(),
interests:yup.string().required(),
password:yup.string().min(4).max(15).required()
})



function Signup() {
const{register,handleSubmit}=useForm({
	resolver:yupResolver(schema),
});

const submitForm = async (data) => {
	try {
	  const formData = new FormData();
	  for (let key in data) {
			formData.append(key, data[key]);
		  
	  }
	  const response = await fetch("https://inter-api-8q0x.onrender.com/auth/register", {
		method: "POST",
		body: formData
	  });
	  const result = await response.json();
	  console.log(result);
	} 
	catch (error) {
	  console.error(error);
	}
  };
  
  
  return (
	
		<>
			<Navbar />
			<div className="block lg:flex items-center justify-center min-h-screen lg:justify-evenly bg-gradient-to-br from-blue-100 to-white-400 overflow-y-hidden">
				<div className="block lg:flex flex-col mt-20  ">
					{/* headings and subheadings */}
					<div className="ml-0 lg:-ml-16">
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
							className="w-[60%] lg:w-[80%] mt-10 mr-auto ml-auto lg:ml-32 lg:mt-[-4rem] transform -rotate-[20deg]"
							src={image}
							alt="Login Image"
						/>
					</div>
				</div>

				{/* form begins here */}
				{/* ml-auto mt-4 lg:mt-0 mr-auto lg:w-[23%] flex justify-center lg:block lg:ml-[17.5rem] lg:mr-0 */}
				<form onSubmit={handleSubmit(submitForm)} className="flex lg:h-20 scale-95 flex-col gap-4 w-[340px] lg:w-[550px] lg:mt-[7.25rem] ml-auto mr-auto lg:ml-0 justify-center mb-4 lg:mr-0">
					<div className="flex lg:w-[auto] gap-4 justify-between">
						<div className="flex flex-col w-full">
							<input
							id ="name"
							name="name"
								type="text"
								placeholder="Name"
								className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
								{...register('name', { required: true })}
							/>
						</div>

					</div>
					<div className="flex flex-col">
						<input
							type="text"
							id="collegeName"
							name="collegeName"
							placeholder="College Name"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							{...register('collegeName', { required: true })}
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="number"
							id="year"
name="year"
							placeholder="Year"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							{...register('year', { required: true })}
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							id="branch"
							name="branch"
							placeholder="Branch"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							{...register('branch', { required: true })}
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="file"
							id="picture"
							name="picture"
							placeholder="Upload your profile picture"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							{...register('picture', { required: true })}
						/>
						{/* <ImgUpload /> */}
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Enter your email address"
							name="email"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							{...register('email', { required: true })}
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							id="interests"
							name="interests"
							placeholder="Enter your interests"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							{...register('interests', { required: true })}
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="password"
							placeholder="Set a password"
							name="password"
							className="w-full px-4 py-3 bg-[#dfe6f9] border border-gray-300 rounded-lg"
							{...register('password', { required: true })}
						/>
					</div>
					{/* <Link to='/login'> */}
					<button
						type="submit"
						className="w-full mt-2 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg"
					>
						Create Account
					  </button>
					  
					  {/* <button
						type="submit"
						className="w-full px-4 py-3 text-blue-500 border border-gray-300 bg-[#dfe6f9] font-semibold rounded-lg mb-2"
					  >
						  <FontAwesomeIcon icon={faGoogle} className="mr-5" />
						Sign Up with Google
					</button> */}
					{/* </Link> */}
					<p className="text-left -mt-1 text-gray-500">
						Already have an account?{" "}
						<a href="#" className="text-blue-500">
							Sign in
						</a>
					</p>
				</form>
			</div>
		</>
	);
}

export default Signup;
