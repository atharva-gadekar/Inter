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

function Login({setLoggedIn}) {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				"https://inter-api-8q0x.onrender.com/auth/login",
				data
			);
			console.log(response);
			const token = response.data.jwt_token;
			const userId = response.data.id;
			if (token) {
				localStorage.setItem("token", token);
				localStorage.setItem("userId", userId);
        setLoggedIn(true);
				message.success("Login successful!");

				// navigate("/home");
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			console.error(error);
			message.error("Login failed. Please check your email and password!");
		}
	};

	return (
		<div className="bg-gradient-to-br from-blue-100 to-white-400">
			<Navbar />
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
						<div className="flex flex-col relative">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter password"
								className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
							/>
							<button
								type="button"
								className="absolute top-1/2 transform -translate-y-1/2 right-7"
								onClick={handleTogglePassword}
							>
								{showPassword ? (
									<FaEyeSlash className="text-gray-600" />
								) : (
									<FaEye className="text-gray-600" />
								)}
							</button>
						</div>

						<div className="flex justify-between items-center">
							<div className="items-center hidden lg:flex">
								<input type="checkbox" className="mr-2" />
								<label>Keep me logged in</label>
							</div>
							<Link to="/forgot">
								<a href="#" className="text-blue-500 font-medium">
									Forgot password?
								</a>
							</Link>
						</div>
						{/* <Link to='/home'> */}
						<button
							type="submit"
							className="w-full mt-1 lg:mt-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg"
						>
							SIGN IN
						</button>
						{!loading && <Spin className="opacity-0" />}
						{loading && <Spin />}
						{/* </Link> */}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
