import React, { useState, useEffect, useContext } from "react";
import {
  faSearch,
  faCog,
  faPenToSquare,
  faMessage,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/Rectangle 47.png";
import Conversation from "./Conversation";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { set } from "react-hook-form";

export default function LeftChat() {
  const [conversations, setConversations] = useState([]);
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const getConversations = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');
          const response = await fetch(`https://inter-api-8q0x.onrender.com/conversations/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error("Error fetching user details");
          }

          const data = await response.json();
          console.log(data);
          
        }
        
      }
      catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);
  console.log(user);
  return (
    <div className="bg-white rounded-l-3xl h-full w-[40%] border-b-white border-b-2">
      <div className=" flex justify-between items-center sticky">
        <h1 className="px-8 font-bold py-8 text-xl">Messaging</h1>

        <FontAwesomeIcon
          icon={faPenToSquare}
          size="lg"
          className="text-slate-500 bg-transparent cursor-pointer pr-8 stroke-0"
        />
      </div>

      <div className="flex items-center justify-center ">
        <label className="relative bg-[#f5f5f5] rounded-2xl py-1 px-2  leading-tight ">
          <input
            className="bg-[#f5f5f5] rounded-2xl py-2 px-4  leading-tight focus:outline-none text-sm text-slate-500 focus:bg-gray-100"
            type="text"
            placeholder="Search Messaging"
          />
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className="text-slate-500 bg-transparent cursor-pointer h-4 w-4 pr-4"
          />
        </label>
      </div>

      {/* <hr className="mt-6"></hr> */}
      <div className="mt-6"></div>
      <div className="parent pb-2 h-[32rem] overflow-y-scroll ">
        {conversations.map((c) => (
          <Conversation conversation={c} />
        ))}
        
        <Conversation />
        <Conversation />
        
      </div>
    </div>
  );
}
