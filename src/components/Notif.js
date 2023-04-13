import React from "react";
import profile from "../assets/Rectangle 47.png";
import {
  faCog,
  faMessagePlus,
  faMessage,
  faFilter,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Notif() {
  return (
    <div className="bg-white p-8 rounded-3xl">
      <h3 className="text-3xl mb-6 font-bold text-blue-600 ">Notifications</h3>
      <div className="bg-white rounded-3xl ">
        <div className="flex space-x-3 items-center">
          <img
            src={profile}
            alt=""
            className="rounded-xl font-light h-10 w-10"
          />
          <h2 className="text-slate-500">
            <b className="text-black">Jane Cooper</b> sent you a request
          </h2>
          <FontAwesomeIcon
            icon={faCircle}
            size="lg"
            className="text-slate-500 h-1 w-1 bg-transparent cursor-pointer"
          />
          <p className="text-sm font-normal text-slate-500  mr-4">55 min ago</p>
        </div>
        <div className="bg-white rounded-2xl mt-4 border text-base overflow-hidden">
          <p className="p-4 text-gray-500">
            Hello! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magni quibusdam assumenda vero sunt non voluptatum numquam quae
            recusandae ea corrupti ullam, cumque aperiam consequatur cum ipsum
            animi repellendus suscipit iusto.
          </p>
          <p className="bg-[#e5e7eb] p-4"> Title/Subject of message</p>
        </div>
        <div className="flex justify-end items-center space-x-6 mt-4 pr-2">
          <button className="py-2 text-blue-600 font-normal ">Connect</button>
          <button className="py-2 text-slate-500 font-normal">Ignore</button>
        </div>
      </div>
    </div>
  );
}
