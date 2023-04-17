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
import Friend from "./Friend";

// const handleKeypress = (e) => {
//     //it triggers by pressing the enter key
//     if (e.key === "Enter" || e.key === "Return") {
//       console.log("Button click");
//       handleSubmit();
//     }
//   };


const MessageList=()=> {
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
					setFollowing(response.data.following);
          console.log(response.data.following);
					});

          
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);
    console.log(following);
  return (
    <div>
      <div className="bg-white rounded-2xl p-6  h-full hidden lg:block ">
      <h1 className="font-bold text-sm">Friend List</h1>
              {following && following.map((following) => (
         
                  <Friend url={following.url} name={following.name} title={following.title} />
          
      ))}
    </div>
    </div>
  )
}
export default MessageList;