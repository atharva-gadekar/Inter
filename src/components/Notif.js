import React, { useState, useEffect } from "react";
import profile from "../assets/Rectangle 47.png";
import {
  faCog,
  faMessagePlus,
  faMessage,
  faFilter,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";

export default function Notif() {
  const [notifications, setNotifications] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(
        `https://inter-api-8q0x.onrender.com/user/${userId}/getNotifications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setNotifications([...response.data.notifications]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleConnectClick = (connectionId) => {
    axios
      .patch(
        `https://inter-api-8q0x.onrender.com/user/${userId}/connect/${connectionId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white p-8 rounded-3xl">
      <h3 className="text-3xl mb-6 font-bold text-blue-600 ">Notifications</h3>
      {notifications &&
        notifications.map((notification) => (
          <div className="bg-white rounded-3xl">
            <div className="flex space-x-3 items-center">
              <img
                src={notification.sender.url}
                alt=""
                className="rounded-xl font-light h-10 w-10"
              />
              <h2 className="text-slate-500">
                <b className="text-black">{notification.sender.name}</b> sent
                you a request
              </h2>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className="text-slate-500 h-1 w-1 bg-transparent cursor-pointer"
              />
              <p className="text-sm font-normal text-slate-500  mr-4">
                {moment(notification.createdAt).format("MMMM DD, YYYY")}
              </p>
            </div>
            <div className="bg-white rounded-2xl mt-4 border text-base overflow-hidden">
              <p className="p-4 text-gray-500">{notification.message}</p>
              <p className="bg-[#e5e7eb] p-4"> </p>
            </div>
            <div className="flex justify-end items-center space-x-6 mt-4 pr-2">
              <button
                className="py-2 text-blue-600 font-normal "
                onClick={() => handleConnectClick(notification.sender._id)}
              >
                Connect
              </button>
              <button className="py-2 text-slate-500 font-normal">
                Ignore
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
