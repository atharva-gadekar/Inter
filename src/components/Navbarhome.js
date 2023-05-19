import React, { useEffect, useState } from "react";
import logo from '../assets/Frame 6 1.png';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket, faGear, faPen } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import Search from "./Search";

const Navbarhome = ({setLoggedIn}) => {
  const [ismobileopen, setmobileopen] = useState(false);
  const [userName, setUserName] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

    const handleLogout = () => {
			if (localStorage.getItem("userId")) {
				setLoggedIn(false);
				localStorage.removeItem("token");
				localStorage.removeItem("userId");
				localStorage.removeItem("tokenExpiration");
				navigate("/");
			}
		};
  
const[url,setUrl]=useState('');
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
          setUrl(data.url);
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
						<img src={url} alt="Logo" className="h-8 w-8 mr-2 rounded-md" />
						<h1 className="font-semibold text-base tracking-tight">
							{" "}
							<Link to={`/profile/${userId}`}>{userName}</Link>
						</h1>
					</div>
				</div>
				<div className="flex items-center justify-center flex-grow ">
					<div className="text-[#0a66c2]">
						<h1 className="font-bold ml-48 text-3xl tracking-tight">
							<Link to="/home">Connexa</Link>
						</h1>
					</div>
				</div>

				<Search />
				<FontAwesomeIcon
					icon={faArrowRightFromBracket}
					className="ml-2"
					onClick={handleLogout}
				/>
			</nav>

			<div>
				<div className="lg:hidden flex justify-left bg-gradient-to-br from-blue-100 to-white-400 p-4 ">
					<h1 className="font-bold text-xl text-blue-700 pl-6">Connexa</h1>
					<div className="flex items-center mt-1 ml-auto ">
						<FontAwesomeIcon
							icon={faCog}
							size="lg"
							className="text-blue-700 cursor-pointer lg:hidden "
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbarhome;
