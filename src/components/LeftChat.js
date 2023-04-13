import React from "react";
import {
  faSearch,
  faCog,
  faPenToSquare,
  faMessage,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/Rectangle 47.png";
export default function LeftChat() {
  return (
    <div className="bg-white rounded-l-3xl h-full w-[40%] border-b-white border-b-2">
      <div className=" flex justify-between items-center sticky">
        <h1 className="px-8 font-bold py-8 text-xl">Messaging</h1>

        <FontAwesomeIcon
          icon={faPenToSquare}
          size="lg"
          className="text-slate-500 bg-transparent cursor-pointer pr-8 stroke-0"
        />
      </div>

      <div className="flex items-center justify-center ">
        <label className="relative bg-[#f5f5f5] rounded-2xl py-1 px-2  leading-tight ">
          <input
            className="bg-[#f5f5f5] rounded-2xl py-2 px-4  leading-tight focus:outline-none text-sm text-slate-500 focus:bg-gray-100"
            type="text"
            placeholder="Search Messaging"
          />
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className="text-slate-500 bg-transparent cursor-pointer h-4 w-4 pr-4"
          />
        </label>
          </div>
          
          {/* <hr className="mt-6"></hr> */}
      <div className="mt-6"></div>
      <div className="parent pb-2 h-[32rem] overflow-y-scroll ">
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3  space-x-6 flex pb-3 ">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4 ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
          <div className="message">
        <div className="hover:bg-blue-200 items-center pt-3 space-x-6 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
          </div>
          <div className="block ">
            <div className="flex flex-row justify-between items-center mr-4  ">
              <h1 className="text-sm font-medium ">Nick Rybak</h1>
              <p className="text-xs font-medium text-slate-500  mr-4">16 Jan</p>
            </div>
            <p className="text-xs text-slate-400 mr-4 ">
              Hello guys, this is my Connexa Messaging page
            </p>
          </div>
        </div>
        {/* <hr></hr> */}
          </div>
      </div>
      
      </div>
      
  );
}
