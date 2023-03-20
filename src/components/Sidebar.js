import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBriefcase, faEnvelope, faBell, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'antd';

const Sidebar = () => {
  return (
    <div className="bg-white rounded-2xl w-[112%] h-[15rem] flex justify-center items-center mx-5  ">
      <ul className="text-[#a0a0a0] ml-[-66px] mt-5">
        <li className="flex items-center mb-6">
          <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-500" />
          <span className="font-medium text-blue-500  ml-3">Home</span>
        </li>
        <li className="flex items-center mb-6">
          <Badge count={1} className="mr-2" style={{ backgroundColor: '#1890ff' }} size="small">
            <FontAwesomeIcon icon={faUserFriends} />
          </Badge>
          <span className="font-medium ml-3">Network</span>
        </li>
        <li className="flex items-center mb-6">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span className="font-medium  ml-3">Messaging</span>
        </li>
        <li className="flex items-center mb-6">
          <Badge count={5} className="mr-2" style={{ backgroundColor: '#1890ff' }} size="small">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
          <span className="font-medium  ml-3">Notifications</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
