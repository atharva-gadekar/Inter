import React from "react";
import imagee from "../assets/jr-korpa-wAXD_Its-48-unsplash.jpg";
import profile from "../assets/pexels-pixabay-220453.jpg";
import { FaEdit } from "react-icons/fa";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPen} from '@fortawesome/free-solid-svg-icons';
import Navbarhome from "./Navbarhome";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Profile_Settings = () => {
  const [user, setUser] = useState({
		user: {
			_id: "",
			name: "",add .
			email: "@gmail.com",
			password: "",
			picture: "",
			collegeName: "",
			year: 2,
			branch: "",
			interests: [],
			following: [],
			followers: [],
			posts: [],
			createdAt: "",
			__v: 2,
		},
		url: "",});

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem('userId');

          axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userId}`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
						setUser(response.data);
           
					});

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  


  return (
    <>
      {/* <Navbarhome /> */}
      <div className="flex flex-row">
        <div className="  ml-3 mr-3 lg:mx-auto bg-white lg:h-[42rem] lg:w-[97.6%] rounded-2xl overflow-hidden ">
          <img className="w-full h-48 lg:h-64 object-cover" src={imagee} alt="Cover" />

          <div className="relative ml-11 ">
            <div className="-mt-11 ">
              <div className="flex mt-2 flex-col text-left">
                <div className="flex justify-between items-end pr-8">
                <div className="h-36 w-36 lg:h-44 lg:w-44 rounded-full overflow-hidden bg-white border-4 -mt-12 ">
                  
                  <img
                    className="h-full w-full object-cover"
                    src={profile}
                    alt="Profile"
                    />
                   
                  
                  <div className="flex justify-center">
                    <FaEdit className="text-black  text-xl cursor-pointer hover:text-gray-800" />
                  </div>
                  </div>
                  <div className="flex space-x-4">
                  <FontAwesomeIcon icon={faPen} className="mr-5 h-6 w-6 text-blue-600 text-lg lg:text-base" />
                  <Link to="/"> <FontAwesomeIcon icon={faGear} className="mr-5 h-6 w-6 text-blue-600 text-lg lg:text-base" /></Link>
                 
                  </div>
                  
                </div>
                
                <div className="lg:flex justify-between">
                  <div className="flex">
                    <div>
                      <h1 className="mt-4 text-black text-2xl font-bold  ">
                      {user.user.name}
                      </h1>
                      <h2 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
                       {user.user.branch}
                      </h2>
                      <h3 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
                      {user.user.title}
                      </h3>
                      <h3 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
                        <span className="text-black text-[1rem] font-medium mr-2">
                          500+
                        </span>
                        <span className="text-gray-600 text-[1rem] font-medium tracking-wide">
                          Connections
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div>
                  <h1 className="mt-4 text-black text-2xl font-bold  ">
                        Education
                      </h1>
                      <h2 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
                      {user.user.collegeName}
                      </h2>
                     
                   <div className="mt-6 flex flex-row flex-wrap mr-11">
  {user.user.interests.map((interest, index) => (
    <span
      key={index}
      className="bg-gray-200 text-gray-700 px-3 py-3 rounded-xl text-sm mr-2 mb-2"
    >
      #{interest}
    </span>
  ))}
</div>
                  </div>
                </div>
              </div>
              <div className="buttons -ml-1 mt-6 flex flex-row mb-8">
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

      <div className=" mt-5 ml-3 mr-3 lg:mx-auto bg-white lg:w-[97.6%] py-6 px-8 rounded-2xl mb-5 ">
        <div className="ml-2 lg:text-left mt-3 mb-6">
          <div className="flex justify-between"><h3 className="text-3xl font-bold text-black ">About</h3>
          <FontAwesomeIcon icon={faPen} className="mr-5 h-6 w-6 text-blue-600 text-lg lg:text-base" />
          </div>
          
          <div className="mt-6 text-black text-[1.2rem]">
            <p>
              Aditya Sharma, unlike most others on Forbes India's 30 Under 30
              List, has earned his stripes by working as a professional. Less
              than seven years into his stint at global consultancy firm
              McKinsey & Company, he has already risen to become a partner—the
              only 20-something to do so in India.
            </p>
            <br />
            <p className="">
              {" "}
              He leads multiple teams and helps several clients make big bets
              and build businesses, leveraging his command over data and
              analytics. Over the past 18 months, he has helmed a range of
              projects, including creating the digital and analytics strategy of
              a private sector bank and transforming the existing digital
              business capabilities of a state-run bank. "All of these projects
              ensured clients are better placed to make big bets," he says.
            </p>
            <br />
            <p>
              The seeds to success, for Sharma—an IIT-Kharagpur chemical
              engineer, who also completed an MBA-equivalent from
              IIM-Ahmedabad—were sown early. He spent his childhood in six
              cities in India, thanks to his banker father's transferable job.
              "Being constantly on the move made me ready to face change," he
              says. Sharma began by working across financial services, real
              estate, infrastructure and education until over time, he saw
              greater scope to specialise in banking and data and analytics.
            </p>

            <br />
            <p>
              "He [Sharma] has shown enormously high levels of maturity and is
              keen to take on responsibility," says Renny Thomas, who heads
              McKinsey's financial services practice in India. At a time of
              exponential growth of new data, Sharma says he hopes to continue
              to build McKinsey's regional capabilities in this space. That is
              true data talk.
            </p>
            <br />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_Settings;