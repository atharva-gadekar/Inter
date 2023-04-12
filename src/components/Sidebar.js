import React from "react";
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
  const isActiveLink = (link) => {
    return window.location.pathname === link ? "text-blue-500" : "";
  };

  return (
    <div className="bg-white rounded-2xl w-[112%] h-[18rem] lg:flex justify-center items-center mx-5 mt-[0.9rem] hidden ">
      <ul className="text-[#a0a0a0]  mt-7">
        <li className={`flex items-center mb-6 ${isActiveLink("/home")}`}>
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          <span className={`font-medium ml-3 ${isActiveLink("/home")}`}>
            <Link to="/home">Home</Link>
          </span>
        </li>
        <li
          className={`flex items-center mb-6 ${isActiveLink("/connections")}`}
        >
          <Badge
            count={1}
            className="mr-2"
            style={{ backgroundColor: "#1890ff" }}
            size="small"
          >
            <FontAwesomeIcon icon={faUserFriends} />
          </Badge>
          <span className={`font-medium ml-3 ${isActiveLink("/connections")}`}>
            <Link to="/connections">Network</Link>
          </span>
        </li>
        <li className={`flex items-center mb-6 ${isActiveLink("/chat")}`}>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span className={`font-medium ml-3 ${isActiveLink("/chat")}`}>
            <Link to="/chat">Messaging</Link>
          </span>
        </li>
        <li
          className={`flex items-center mb-6 ${isActiveLink("/notifications")}`}
        >
          <Badge
            count={5}
            className="mr-2"
            style={{ backgroundColor: "#1890ff" }}
            size="small"
          >
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <span
            className={`font-medium ml-4 ${isActiveLink("/notifications")}`}
          >
            <Link to="/notifications">Notifications</Link>
          </span>
        </li>
        <li className={`flex items-center mb-6 ${isActiveLink("/profile")}`}>
          <FontAwesomeIcon icon={faUser} />
          <span className={`font-medium ml-5 ${isActiveLink("/profile")}`}>
            <Link to="/profile">Settings</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
