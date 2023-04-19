import React from 'react'
import {
    faSearch,
    faPenToSquare,
    faCircle,
    faPaperPlane,
    faUser
  } from "@fortawesome/free-solid-svg-icons";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
export default function Friend(props) {
    console.log(props);

    // const handleClick = {
    
    //   };
    const handleClickFriend = () => {
        console.log(props);
        props.onClick(props.id);
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
      <button className="bg-blue-200 h-12 w-12 rounded-full">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  </div>
  )
}
