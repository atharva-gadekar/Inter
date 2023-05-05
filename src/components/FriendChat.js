import React, { useEffect } from 'react'
import {
    faSearch,
    faPenToSquare,
    faCircle,
    faPaperPlane,
    faUser
  } from "@fortawesome/free-solid-svg-icons";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function FriendChat({ url, name, title, friendid }) {
    const userId = localStorage.getItem("userId");
    // const friendid = props.friendid;
    const handleNewConversation = () =>
    {
      
        axios.post("https://inter-api-8q0x.onrender.com/conversations", { senderId: userId, receiverId: friendid }).then((response) => {
            console.log("new conv", response.data);
        })
            .catch((error) => {
                console.error("failed to create conv", error);
            });
    };
    useEffect(() => {
        // console.log(props);
        },[])
        // const handleClick = {
        
        //   };
        const handleClickFriend = () => {
            // console.log(props.friendid);
            // props.onClick(props._id);
        };
  return (
    <div className="flex pt-6 items-center space-x-4 justify-between cursor-pointer  h-[42rem]"
      >
    <div className="flex items-center space-x-3">
      <img
        src={url}
        alt=""
        className="h-12 w-12 rounded-full"
      />
      <div className="block">
        <h1 className="font-bold text-sm">{name}</h1>
                  <p className="text-xs text-slate-400">{title}</p>
      </div>
    </div>

    <div>
        <button className="bg-blue-200 h-12 w-12 rounded-full" onClick={handleNewConversation}>
          {/* <Link to={`/profile/${props._id}`}> */}
          <FontAwesomeIcon icon={faUser} />
        {/* </Link> */}
        
      </button>
        
    </div>
  </div>
  )
}

