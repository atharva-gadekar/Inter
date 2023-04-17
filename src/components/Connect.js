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
import axios from "axios";
import { Link } from "react-router-dom";

const Connect = () => {
  const userId = localStorage.getItem("userId");

  const [connections, setconnections] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem("userId");

          axios({
<<<<<<< HEAD
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userId}/following`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
					if(response.data)setFollowing(response.data.following);
          console.log(response.data);
					});

          
=======
            method: "get",
            url: `https://inter-api-8q0x.onrender.com/user/${userId}/connections`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            setconnections(response.data.connections);
            console.log(response.data.connections);
          });
>>>>>>> f62a3ec8968e942b5a761ba08d9b2e0d0f49e1dd
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
<<<<<<< HEAD
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
=======

      {connections &&
        connections.map((connections) => (
          <div className="flex pt-6 items-center space-x-4 justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={connections.url}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div className="block">
                <h1 className="font-bold text-sm">{connections.name}</h1>
                <p className="text-xs text-slate-400">india</p>
              </div>
>>>>>>> f62a3ec8968e942b5a761ba08d9b2e0d0f49e1dd
            </div>

            <div>
              <Link to={`/profile/${userId}`}>
                <button className="bg-blue-200 h-12 w-12 rounded-full">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Connect;
