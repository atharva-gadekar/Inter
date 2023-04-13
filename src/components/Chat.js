import React from "react";
import {
  faCog,
  faMessagePlus,
  faMessage,
  faFilter,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/Rectangle 47.png";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Message from "./Message";
export default function Chat() {
  return (
    <div className="bg-white rounded-r-3xl border-l w-full  h-[42rem] overflow-y-scroll ">
      <div className="heading pt-4 sticky top-0 bg-white">
        <div className=" items-center pt-3 space-x-4 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-14 w-14 ml-8"></img>
          </div>
          <div className="flex-col space-y-1 ">
            <div className="flex flex-row space-x-3 items-center mr-4">
              <h1 className=" font-medium ">Saishree Kouda</h1>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className="text-slate-500 h-1 w-1 bg-transparent cursor-pointer"
              />{" "}
              <p className="text-xs font-normal text-slate-500  mr-4">
                55 min ago
              </p>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className="text-slate-500 h-1 w-1 bg-transparent cursor-pointer"
              />
              <p className="text-xs font-light text-slate-500  mr-4">Mobile</p>
            </div>
            <p className="text-sm text-slate-600 w-64">
              UI/UX designer - Phoenix Agency
            </p>
          </div>
        </div>
        <hr className="mt-4"></hr>
      </div>

      {/* message */}
      <div className="chatting mt-4 mb-4">
        <p className="text-center text-sm text-slate-500">Today</p>
      </div>
      <div className="w-full px-7 flex flex-col justify-between">
        <div className="flex flex-col mt-5">
          {/* <div className="flex justify-end mb-4">
            <div
              className="mr-2 py-3 px-4 bg-blue-100 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-slate-600"
            >
              Welcome to group everyone !
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            </div> */}
          <Message own={false} />

          <Message own={true} />

          <Message own={true} />
          <Message own={false} />

<Message own={true} />
<Message own={false} />

<Message own={true} />
<Message own={false} />

<Message own={true} />  <Message own={false} />

<Message own={true} />
<Message own={false} />

<Message own={true} />  <Message own={false} />

<Message own={true} />  <Message own={false} />

<Message own={true} />
        </div>
      </div>

      <div className="bottom-0 sticky bg-white rounded-b-3xl">
        <hr className="" />
        <label
          htmlFor=""
          className="relative text-slate-400 py-5 px-3 pl-4 w-[80%] mb-6 bg-white"
        >
          <input
            type="text"
            placeholder="Write your message here..."
            className="text-slate-400 !outline-none bg-transparent pt-5 px-3 mt-3 pl-4 mr-4 mb-6 w-[80%] bg-white"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="lg"
            className="text-slate-500 bg-transparent cursor-pointer h-6 w-6 "
          />
        </label>
      </div>
    </div>
  );
}
