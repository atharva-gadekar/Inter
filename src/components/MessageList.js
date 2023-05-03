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
import FriendChat from "./FriendChat";

// const handleKeypress = (e) => {
//     //it triggers by pressing the enter key
//     if (e.key === "Enter" || e.key === "Return") {
//       console.log("Button click");
//       handleSubmit();
//     }
//   };


const MessageList=()=> {
    const [connections, setconnections] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');

          axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userId}/connections`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
					setconnections(response.data.connections);
          console.log(response.data.connections);
					});

          
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);
  console.log(connections);
  
  const handleFriendChatClick = async (url) => {
    try {
      const conversation = await axios.post(
        "https://inter-api-8q0x.onrender.com/conversations",
        {
          participants: [url],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(conversation);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="bg-white rounded-2xl p-6  h-full hidden lg:block ">
      <h1 className="font-bold text-sm">Friend List</h1>
              {connections && connections.map((connections) => (
         
                <FriendChat url={connections.url} name={connections.name} title={connections.title} friendid={connections._id}/>
          
      ))}
    </div>
    </div>
  )
}
export default MessageList;