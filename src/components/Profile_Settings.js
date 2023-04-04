import React from "react";
import imagee from "../assets/jr-korpa-wAXD_Its-48-unsplash.jpg";
import profile from "../assets/pexels-pixabay-220453.jpg";
import { FaEdit,FaUniversity } from "react-icons/fa";
import Navbarhome from "./Navbarhome";
import ProfileSidebar from "./Profile_Settings_Sidebar";

const Profile_Settings = () => {
  return (
    <>
    <Navbarhome/>
    <div className="container1 flex flex-row">
        <div className="ml-5 bg-white h-[42rem] w-[97.6%] rounded-2xl overflow-hidden">
          <img className="w-full h-64 object-cover" src={imagee} alt="Cover" />

          <div className="relative ml-11 ">
            <div className="-mt-11 ">
              <div className="flex mt-2 flex-col text-left">
                <div className="h-44 w-44 rounded-full overflow-hidden bg-white border-4 -mt-12">
                  <img className="h-full w-full object-cover" src={profile} alt="Profile" />
                  <div className="flex mx-auto">
                    <FaEdit className="text-black  text-xl cursor-pointer hover:text-gray-800" />
                  </div>
                </div>

                <div className="ml-5">
                  <div className="flex items-center justify-between">
                    <h1 className="mt-4 text-black text-2xl font-bold">Shanay Smith</h1>
                    <div className="flex items-center mr-4">
                      <FaUniversity className="text-gray-600 ml-3" />
                      <h2 className="text-gray-600 text-xl font-medium tracking-wide ml-1">
                        University of Toronto
                      </h2>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-gray-600 text-xl font-medium tracking-wide">
                      Operations Manager &amp; Executive Assistant
                    </h4>
                    <h5 className="text-gray-600 text-xl font-medium tracking-wide">
                      Toronto, Ontario, Canada • Contact info
                    </h5>
                    <h5 className="text-gray-600 text-xl font-medium tracking-wide">
                      <span className="text-black text-[1rem] font-medium mr-2">500+</span>
                      <span className="text-gray-600 text-[1rem] font-medium tracking-wide">
                        Connections
                      </span>
                    </h5>
                  </div>
                  <div className="mt-4 ">
                    <div className="flex flex-wrap">
                      <span className="mr-4 px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        Business Development
                      </span>
                      <span className="mr-4 px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        Project Management
                      </span>
                      <span className="mr-4  px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        Event Planning
                      </span>
                    </div>
                  </div>
                  <div className="buttons -ml-1 mt-6 flex flex-row">
                    <button className="ml-0 px-6 py-3 rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-400 ">
                      Connect
                    </button>
                  <button className="ml-4 px-9 py-3 rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-400  ">
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

      

      <div className="container2 mt-5 ml-5 mx-auto bg-white h-[42rem] w-[97.6%] py-6 px-8 rounded-2xl mb-5 ">
        
        <div className="ml-2 lg:text-left mt-3" >
          <h3 className="text-3xl font-bold text-black ">
            About
          </h3>
          <div className="mt-6 text-black text-[1.2rem]">
            <p>
              Aditya Sharma, unlike most others on Forbes India's 30 Under 30
              List, has earned his stripes by working as a professional. Less
              than seven years into his stint at global consultancy firm
              McKinsey & Company, he has already risen to become a partner—the
              only 20-something to do so in India.
              </p>
              <br/>
              <p> He leads multiple teams and helps several clients make big bets
                and build businesses, leveraging his command over data and
                analytics. Over the past 18 months, he has helmed a range of
                projects, including creating the digital and analytics strategy
                of a private sector bank and transforming the existing digital
                business capabilities of a state-run bank. "All of these
                projects ensured clients are better placed to make big bets," he
                says.</p>
               <br>
               </br>
               <p> He leads multiple teams and helps several clients make big bets
                and build businesses, leveraging his command over data and
                analytics. Over the past 18 months, he has helmed a range of
                projects, including creating the digital and analytics strategy
                of a private sector bank and transforming the existing digital
                business capabilities of a state-run bank. "All of these
                projects ensured clients are better placed to make big bets," he
                says.</p>
                <p> He leads multiple teams and helps several clients make big bets
                and build businesses, leveraging his command over data and
                analytics. Over the past 18 months, he has helmed a range of
                projects, including creating the digital and analytics strategy
                of a private sector bank and transforming the existing digital
                business capabilities of a state-run bank. "All of these
                projects ensured clients are better placed to make big bets," he
                says.</p>
               <br>
               </br>
               <p> He leads multiple teams and helps several clients make big bets
                and build businesses, leveraging his command over data and
                analytics. Over the past 18 months, he has helmed a range of
                projects, including creating the digital and analytics strategy
                of a private sector bank and transforming the existing digital
                business capabilities of a state-run bank. "All of these
                projects ensured clients are better placed to make big bets," he
                says.</p>
               
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_Settings;




