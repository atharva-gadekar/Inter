import React, { useContext, useEffect, useState } from "react";
import profile_bg from "../assets/bg_profile.png";
import profile from "../assets/Frame 6 1.png";
import axios from "axios";
import { UserContext } from "../utils/context/UserContext";


export default function ProfileSidebar() {
  const { user, setUser, token } = useContext(UserContext);
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem("userId");
          axios({
            method: "get",
            url: `https://inter-api-8q0x.onrender.com/user/${userId}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            setUser(response.data); 
            console.log("Data fetched : ", response.data);
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  useEffect(()=>{
    console.log(user);  
  },[user])

  return (
    <div>
      <div className="bg-white p-1 rounded-3xl mx-5 mt-6 mb-2 hidden lg:block">
        <img src={profile_bg} alt="" className="rounded-2xl mt-4 px-4" />
        {!user.user && (
          <img
            src={profile}
            className="-mt-12 mr-auto ml-auto rounded-2xl h-20 w-20"
          ></img>
        )}
        {user.user && (
          <img
            src={user.url}
            className="-mt-12 mr-auto ml-auto rounded-full h-20 w-20 object-cover"
          ></img>
        )}
        {user.user && (
          <h1 className="text-center font-bold text-2xl mt-4">
            {user.user.name}
          </h1>
        )}
        {user.user && (
          <>
          <p className="text-center text-slate-500 mt-3 mb-0 text-base px-12">
          {user.user && user.user.collegeName}
        </p>
        <p className="text-center text-slate-500 mt-0 mb-0 text-base px-12">
          {user.user && user.user.year} year
        </p>
        <p className="text-center text-slate-500 mt-0 mb-20 text-base px-12">
          {user.user && user.user.branch}
        </p>
        <div className="px-1 ">
          <div className="flex justify-between px-4 mb-3 text-sm">
            <p>Number of Connections</p>
            <p className="text-blue-600">{user.user.following.length}</p>
          </div>
          <div className="flex justify-between px-4 mb-8 text-sm">
            <p>Number of posts</p>
            <p className="text-blue-600">{user.user.posts.length}</p>
          </div>
        </div>
          </>)}
      </div>
    </div>
  );
}
