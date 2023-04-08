import React, { useEffect, useState } from "react";
import profile from "../assets/Frame 6 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faHome,
  faUserFriends,
  faBriefcase,
  faEnvelope,
  faBell,
  faBuilding,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Connect = () => {
  const [followers, setFollowers] = useState([]);

  // useEffect(() => {
  //   const fetchFollowers = async () => {
  //     const response = await fetch("https://inter-api-8q0x.onrender.com/user/6417816aa37e2da21e5b7b86/followers");
  //     const data = await response.json();
  //     setFollowers(data.followers);
  //     console.log(data.followers);
      
  //   };
  //   fetchFollowers();
  // }, []);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');

          axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userId}/followers`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
					setFollowers(response.data.followers);
           console.log(response.data.followers);
					});

          
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 w-[117%] h-[36rem] -mx-16 hidden lg:block">
      <h1 className="font-bold text-sm">Friend List</h1>
      {followers.map((follower) => (
        <div className="flex pt-6 items-center space-x-4 justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={follower.profilePic}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="block">
              <h1 className="font-bold text-sm">{follower.name}</h1>
              <p className="text-xs text-slate-400">india</p>
            </div>
          </div>

          <div>
            <button className="bg-blue-200 h-12 w-12 rounded-full">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connect;