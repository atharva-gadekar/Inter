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

export default function FriendChat(props) {
    useEffect(() => {
        console.log(props);
        },[])
        // const handleClick = {
        
        //   };
        const handleClickFriend = () => {
            console.log(props);
            // props.onClick(props._id);
        };
  return (
    <div className="flex pt-6 items-center space-x-4 justify-between cursor-pointer "
      >
    <div className="flex items-center space-x-3">
      <img
        src={props.url}
        alt=""
        className="h-12 w-12 rounded-full"
      />
      <div className="block">
        <h1 className="font-bold text-sm">{props.name}</h1>
                  <p className="text-xs text-slate-400">{props.title}</p>
      </div>
    </div>

    <div>
        <button className="bg-blue-200 h-12 w-12 rounded-full" onClick={handleClickFriend}>
          {/* <Link to={`/profile/${props._id}`}> */}
          <FontAwesomeIcon icon={faUser} />
        {/* </Link> */}
        
      </button>
        
    </div>
  </div>
  )
}

