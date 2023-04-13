import React, { useEffect, useState } from 'react';
import profile_bg from "../assets/bg_profile.png";
import profile from "../assets/Frame 6 1.png";
import axios from 'axios';

export default function ProfileSidebar() {
  const [user, setUser] = useState({
		user: {
			_id: "",
			name: "",
			email: "@gmail.com",
			password: "",
			picture: "",
			collegeName: "",
			year: 2,
			branch: "",
			interests: [],
			following: [],
			followers: [],
			posts: [],
			createdAt: "",
			__v: 2,
		},
		url: "",
	});

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');

          axios({
            method: "get",
            url: `https://inter-api-8q0x.onrender.com/user/${userId}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            setUser(response.data);
          });

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div>
      <div className="bg-white p-1 rounded-3xl mx-5 mt-6 mb-2 hidden lg:block">
        <img src={profile_bg} alt="" className="rounded-2xl mt-4 px-4" />
        {!user.user && (
          <img
            src={profile}
            className="-mt-12 mr-auto ml-auto rounded-2xl h-20 w-20"
          />
        )}
        {user.user && (
          <img
            src={user.url}
            className="-mt-12 mr-auto ml-auto rounded-full h-20 w-20 object-cover"
          />
        )}
        {user.user && (
          <h1 className="text-center font-bold text-2xl mt-4">
            {user.user.name}
          </h1>
        )}
        <p className="text-center text-slate-500 mt-3 mb-0 text-base px-12">
          {user.user && user.user.collegeName}
        </p>
		<p className="text-center text-slate-500  mb-0 text-base px-12">
          {user.user && user.user.year} year
        </p>
        <p className="text-center text-slate-500 mt-0 mb-20 text-base px-12">
          {user.user && user.user.branch}
        </p>
        {user.user && (
        
            <p className="text-center text-slate-500 font-medium -mt-2 mb-3">
              {user.user.title}
            </p>
           
          
        )}
      </div>
    </div>
  );
}
