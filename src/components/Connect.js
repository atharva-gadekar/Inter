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
  const [following, setFollowing] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');

          axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userId}/following`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
					if(response.data)setFollowing(response.data.following);
          console.log(response.data);
					});

          
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 w-[117%] h-full hidden lg:block">
      <h1 className="font-bold text-sm">Friend List</h1>
      {/* console.log('hello') */}
      {following && following.map((following) => (
        <div className="flex pt-6 items-center space-x-4 justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={following.url}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="block">
              <h1 className="font-bold text-sm">{following.name}</h1>
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