import React from "react";
import postimg from "../assets/post.png";
import profile from "../assets/profile.png";
import {
  faHome,
  faUserFriends,
  faBriefcase,
  faEnvelope,
  faBell,
  faBuilding,
  faFire,
  faFireAlt,
  faHeart,
  faCommentAlt,
  faCommenting,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default function Post() {
  return (
    <>
      <div className="p-12 w-[92%] scale-90 rounded-2xl bg-white mr-auto ml-auto lg:mx-8 shadow-md pb-2 -mt-3">
        <img
          src={postimg}
          className=" mr-auto ml-auto outline outline-white -outline-offset-4"
        ></img>
        <h1 className="text-center font-bold pt-4 text-xl text-slate-800">
          The meaning of health has evolved over time
        </h1>
        <div className="subheading flex justify-center items-center space-x-5 text-xs pt-2 mb-4 text-slate-500">
          <p>July 26, 2019</p>
          <div className="flex justify-center items-center space-x-2">
            <p className="text-lg text-pink-900">-</p>
            <p>1 min read</p>
          </div>

          <div className="flex justify-center items-center space-x-2">
           
            <FontAwesomeIcon icon={faCommenting} className="text-pink-700" />
            <p>0</p>
          </div>

          <div className="flex justify-center items-center space-x-2">
       
            <FontAwesomeIcon icon={faHeart} className="text-pink-700" />
            <p>504</p>
          </div>
        </div>

        <p className="text-left mr-auto ml-auto text-slate-500 text-base">
          In keeping with the biomedical perspective, early definitions of
          health focused on the theme of the body's ability to function; health
          was seen as a state of normal function that could be disrupted from
          time to time by disease. An..
        </p>

        <div className="footer mr-auto ml-auto flex justify-between items-center text-sm text-slate-800 mt-8">
          <div className="flex justify-center items-left space-x-3">
            <div className="tag bg-white shadow-md p-2 flex space-x-0">
              {" "}
              <p className="text-yellow-600">#</p>Health
            </div>
            <div className="tag bg-white shadow-md p-2 flex space-x-0">
              {" "}
              <p className="text-purple-500">#</p>Travel
            </div>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <img src={profile} alt="" className="rounded-full h-8 w-8"></img>
            <h3>Jonathan Doe</h3>
          </div>
        </div>
        <div className=" mr-auto ml-auto text-center mt-8 ">
        <button className="bg-slate-700 text-white p-2 pl-4 pr-4 text-sm font-medium">
          Continue Reading
        </button>
      </div>
      </div>
     
    </>
  );
}
