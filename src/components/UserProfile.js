import React from "react";
import {
  faAdd,
  faCamera,
  faFileAlt,
  faHome,
  faInbox,
  faLink,
  faMessage,
  faPerson,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import profile_bg from "../assets/bg_profile.png";
import profile_bg from "../assets/Twitterspace_Aptod.png";
import profile from "../assets/Rectangle 47.png";

export default function UserProfile() {
  return (
    <div>
      <div className=" bg-white h-full rounded-3xl shadow-lg">
        <img
          src={profile_bg}
          alt=""
          className="rounded-3xl mt-4 overflow-hidden object-cover w-full"
        />
        <img
          src={profile}
          className="-mt-12 mr-auto ml-auto rounded-2xl h-20 w-20"
        ></img>
        <h1 className="text-center font-bold text-2xl mt-4 mb-6">Nick Rybak</h1>
        <p className="text-center text-slate-500 mt-3 text-lg px-6">
          UX/UI designer- Phoenix Agency
              </p>
              
              <p className="text-center text-slate-500 mt-3 text-base px-6">
          Indian Institute of Technology Delhi
              </p>
              
              <p className="text-center text-slate-500 mt-1 mb-6 text-base px-6 ">
          Computer Science
        </p>

        <div className="flex justify-center space-x-3 mb-6">
          <button className="bg-blue-100 py-2 px-3 text-blue-600 font-medium rounded-3xl text-sm">Design</button>
          <button className="bg-blue-100 py-2 px-3 text-blue-600 font-medium rounded-3xl text-sm">Cloud</button>
          <button className="bg-blue-100 py-2 px-3 text-blue-600 font-medium rounded-3xl text-sm">AI</button>
        </div>
        {/* <p className="text-center text-slate-500 mt-3 mb-12 text-sm px-12">
          <FontAwesomeIcon icon={faLink} className="mr-1 text-gray-400" /> Nick
          Rybak and 317 others
        </p> */}

        {/* <div className="px-1 mt-6">
          <div className="flex justify-between px-4 mb-3 text-sm">
            <p>Who viewed your profile</p>
            <p className="text-blue-600">205</p>
          </div>

          <div className="flex justify-between px-4 mb-8 text-sm">
            <p>Views of your post</p>
            <p className="text-blue-600">9767</p>
          </div>
        </div> */}
        {/* <div className=" flex justify-center items-center space-x-4 mb-4">
          <button className="px-4 py-2 border border-blue-500 rounded-xl text-white bg-blue-500 font-medium">
            Accept
          </button>
          <button className="px-4 py-2 text-blue-700 border-blue-500 rounded-xl border-2 font-medium">
            Reject
          </button>
        </div> */}
        <div className=" flex justify-center items-center space-x-3">
          <button className="px-4 py-2 text-blue-600 font-normal ">
            Accept
          </button>
          <button className="px-4 py-2 text-slate-500 font-normal">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
}
