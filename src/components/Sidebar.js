import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faBriefcase,
  faEnvelope,
  faBell,
  faCog,
  faBuilding,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [activeField, setActiveField] = useState("home");

  const handleClick = (fieldName) => {
    setActiveField(fieldName);
  };

  return (
    <div className="bg-white rounded-2xl w-[112%] h-[18rem] lg:flex justify-center items-center mx-5 mt-[0.9rem] hidden ">
      <ul className="text-[#a0a0a0] -ml-[6rem] mt-7">
        <li
          className={`flex items-center mb-6 ${
            activeField === "home" ? "text-blue-500" : ""
          }`}
          onClick={() => handleClick("home")}
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          <span className="font-medium ml-3">
            <Link to="/home">Home</Link>
          </span>
        </li>
        <li
          className={`flex items-center mb-6 ${
            activeField === "network" ? "text-blue-500" : ""
          }`}
          onClick={() => handleClick("network")}
        >
          <Badge
            count={1}
            className="mr-2"
            style={{ backgroundColor: "#1890ff" }}
            size="small"
          >
            <FontAwesomeIcon icon={faUserFriends} />
          </Badge>
          <span className="font-medium ml-3">
            <Link to="/connections">Network</Link>
          </span>
        </li>
        <li
          className={`flex items-center mb-6 ${
            activeField === "messaging" ? "text-blue-500" : ""
          }`}
          onClick={() => handleClick("messaging")}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span className="font-medium ml-3">
            <Link to="/chat">Messaging</Link>
          </span>
        </li>
        <li
          className={`flex items-center mb-6 ${
            activeField === "notifications" ? "text-blue-500" : ""
          }`}
          onClick={() => handleClick("notifications")}
        >
          <Badge
            count={5}
            className="mr-2"
            style={{ backgroundColor: "#1890ff" }}
            size="small"
          >
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <span className="font-medium ml-4">Notifications</span>
        </li>
        <li
          className={`flex items-center mb-6 ${
            activeField === "settings" ? "text-blue-500" : ""
          }`}
          onClick={() => handleClick("settings")}
        >
          <FontAwesomeIcon icon={faUser} />
          <span className="font-medium ml-5">
            <Link to="/profile">Settings</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
