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
export default function Chat() {
    return (

    <div className="bg-white rounded-r-3xl border-l w-full">
      <div className="heading pt-4">
        <div className=" items-center pt-3 space-x-4 flex pb-3">
          <div>
            <img src={profile} className="rounded-2xl h-14 w-14 ml-8"></img>
          </div>
          <div className="flex-col space-y-1">
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
          <div class="w-full px-7 flex flex-col justify-between">
        <div class="flex flex-col mt-5">
          <div class="flex justify-end mb-4">
            <div
              class="mr-2 py-3 px-4 bg-blue-100 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-slate-600"
            >
              Welcome to group everyone !
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-slate-600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
          <div class="flex justify-end mb-4">
            <div>
              <div
                class="mr-2 py-3 px-4 bg-blue-100 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-slate-600"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, repudiandae.
              </div>

              <div
                class="mt-4 mr-2 py-3 px-4 bg-blue-100 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-slate-600"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, reiciendis!
              </div>
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-slate-600"
            >
              happy holiday guys!
            </div>
          </div>
              </div>
             
            </div>
            <div className=" mt-auto bottom-0 sticky">
            <hr className="mt-6"/>
            <div class="py-3">
              <label htmlFor="" className="relative text-slate-400 py-5 px-3 ml-4 w-[80%] mb-6">
              <input
               type="text"   
               placeholder="Write your message here..."
               className="text-slate-400 !outline-none bg-transparent pt-5 px-3 ml-4 mr-4 w-[80%]"
                  />
                  <FontAwesomeIcon
            icon={faPaperPlane}
            size="lg"
            className="text-slate-500 bg-transparent cursor-pointer h-4 w-4 pr-4 "
          />
                    </label>
            </div>
            </div>
          
               
            
       
    </div>
  );
}
