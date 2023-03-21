import React from "react";
import profile from "../assets/Frame 6 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faHome,
  faUserFriends,
  faBriefcase,
  faEnvelope,
  faBell,
  faBuilding,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


const Connect = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-[117%] h-[36rem] -mx-16 ">
      <h1 className="font-bold text-sm">Friend List</h1>
      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="flex pt-6 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-3">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
          <div className="block">
            <h1 className="font-bold text-sm">Steve Ralph</h1>
            <p className="text-xs text-slate-400">Educator</p>
          </div>
        </div>
        

        <div>
          <button className="bg-blue-200 h-12 w-12 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connect;