import React from 'react'
import post from "../assets/post.png"
import profile from "../assets/profile.png"
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Message({message, own, userid, receiverid }) {
  const [user, setUser] = useState({
		user: {
			_id: "",
			name: "",
			
		},
		url: "",});

    const [recuser, setrecuser] = useState({
      user: {
        _id: "",
        name: "",
        
        createdAt: "",
        __v: 2,
      },
      url: "",});

    const token = localStorage.getItem("token");


    useEffect(() => {
      const fetchrec = async () => {
        try {
          if (token) {
            
            axios({
              method: "get",
              url: `https://inter-api-8q0x.onrender.com/user/${receiverid}`,
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
  
      fetchrec();
    }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          
          axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userid}`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
						setrecuser(response.data);
           
					});

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);
  // console.log(user.url)
  return (
      <div className={own?"flex justify-end mb-4 space-x-2":"flex justify-start mb-4 space-x-"}>
            <div
              className={own?"mr-2 py-3 px-4 bg-blue-100 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-slate-600 order-1":"ml-2 py-3 px-4 bg-gray-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-slate-600 order-2"}
            >
              {message.text || message.lastMessage}
            </div>
            <img
              // src={own?recuser.url:user.url}
             
              className={own?"object-cover h-8 w-8 rounded-full order-2":"object-cover h-8 w-8 rounded-full order-1"}
              alt=""
            />
          </div>
  ) 
}

