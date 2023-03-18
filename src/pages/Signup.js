import React from "react";
import image from "../assets/Group-5674.png";
import ImgUpload from "../components/ImgUpload";
import Navbar from "../components/Navbar";

function Signup() {
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
							className="lg:w-[80%] mt-10 mr-auto ml-auto lg:ml-32 lg:mt-[-4rem] transform -rotate-[20deg]"
							src={image}
							alt="Login Image"
						/>
					</div>
				</div>

				{/* form begins here */}
				{/* ml-auto mt-4 lg:mt-0 mr-auto lg:w-[23%] flex justify-center lg:block lg:ml-[17.5rem] lg:mr-0 */}
				<form className="flex flex-col gap-4 w-[340px] lg:w-[550px] mt-4 lg:mt-[7.25rem] ml-auto mr-auto lg:ml-0 justify-center mb-4 lg:mr-0">
					<div className="flex lg:w-[auto] gap-4 justify-between">
						<div className="flex flex-col w-full">
							<input
								type="text"
								placeholder="First Name"
								className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							/>
						</div>
						<div className="flex flex-col w-full">
							<input
								type="text"
								placeholder="Last Name"
								className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Location"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Occupation"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Location"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Upload your profile picture"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
						/>
						{/* <ImgUpload /> */}
					</div>
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Enter your email address"
							className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
						/>
					</div>
					<div className="flex flex-col">
						<input
							type="password"
							placeholder="Enter password"
							className="w-full px-4 py-3 bg-[#dfe6f9] border border-gray-300 rounded-lg"
						/>
					</div>
					<button
						type="submit"
						className="w-full mt-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg "
					>
						REGISTER
					</button>
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
