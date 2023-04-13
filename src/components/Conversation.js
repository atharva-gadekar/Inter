import React from 'react'
import profile from "../assets/Rectangle 47.png";
export default function conversation(conversation) {
  return (
    <div className="message">
          <div className="hover:bg-blue-200 items-center pt-3  space-x-6 flex pb-3 ">
            <div>
              <img src={profile} className="rounded-2xl h-12 w-12 ml-8"></img>
            </div>
            <div className="block ">
              <div className="flex flex-row justify-between items-center mr-4 ">
                <h1 className="text-sm font-medium ">Nick Rybak</h1>
                <p className="text-xs font-medium text-slate-500  mr-4">
                  16 Jan
                </p>
              </div>
              <p className="text-xs text-slate-400 mr-4">
                Hello guys, this is my Connexa Messaging page
              </p>
            </div>
          </div>
          {/* <hr></hr> */}
        </div>
  )
}
