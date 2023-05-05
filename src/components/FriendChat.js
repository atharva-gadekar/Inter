import React, { useContext, useEffect } from 'react'
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
import { ChatContext } from '../utils/context/ChatContext';

export default function FriendChat({ url, name, title, friendid }) {
    const userId = localStorage.getItem("userId");
    const {conversations,setConversations ,currentChat,setCurrentChat, showMessageList, setShowMessageList} = useContext(ChatContext);
  
    // const friendid = props.friendid;
    const handleNewConversation = () =>
    {
        axios.post("http://localhost:3001/conversations", { senderId: userId, receiverId: friendid }).then((response) => {
            console.log("new conv", response.data);
            setCurrentChat(response.data.conversation)
            setShowMessageList(!showMessageList);


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
    <div className="flex pt-6 items-center space-x-4 justify-between cursor-pointer "
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

