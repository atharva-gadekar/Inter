import React from "react";
// import post from "../assets/post.png"
import post from "../assets/post.png";
import blank from "../assets/blank_profile.jpeg"
import profile from "../assets/profile.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";

export default function BlogPage() {
  return (
    
   
    <div className=" lg:w-[70%] mr-auto ml-auto mt-20">
      <img src={post} className="lg:w-[100%] ml-auto mr-auto w-[80%]"></img>
      <div className="flex items-center space-x-4 mt-4 lg:mt-12 lg:mb-6 mb-4 px-24">
        <img src={blank} alt="" className="h-8 w-8 rounded-full" />
        <p className="text-xs lg:text-sm text-slate-600">
          By Saishree Kouda, Scarlet Magazine
        </p>
      </div>
      <div className="lg:flex space-x-12 lg:place-items-start ">
        <div className="flex lg:flex-col lg:space-y-3 pb-4 lg:pt-2 lg:pb-2 justify-center">
          <FontAwesomeIcon icon={faFacebook} className="mr-5 text-blue-600" />
          <FontAwesomeIcon icon={faTwitter} className="mr-5 text-blue-600" />
          <FontAwesomeIcon icon={faInstagram} className="mr-5 text-blue-600" />
          <FontAwesomeIcon icon={faLinkedin} className="mr-5 text-blue-600" />
        </div>
        <div className="justify-center ml-auto mr-auto">
          <h2 className="font-extrabold text-2xl lg:text-5xl text-slate-800 lg:leading-[1.25] ">
            Which Podcasts Should Web Developers And Designers Be Listening To?
          </h2>
          <p className="text-slate-600 mt-4 mr-12 lg:mr-auto">
            What podcasts Scarlet community listened to, aiming to complete a
            shortlist of current podcasts for web designers ond developers. We
            had what can be coded to a very strong response both in number and
            in passion.
          </p>
          <img src={post} alt="" className="pt-12 pb-12 w-[80%] lg:w-auto" />
          <h2 className="font-extrabold text-slate-800 text-xl mr-12 lg:mr-auto lg:text-2xl">
            First, We Winnowed Out The Podcasts
          </h2>
          <ul className="p-4 marker:text-blue-600 list-disc text-slate-600 space-y-2">
            <li> On a broader theme (Eg: Hey, Hi, Hello)</li>
            <li>On a broader theme (Eg: Hey, Hi, Hello)</li>
            <li>On a broader theme (Eg: Hey, Hi, Hello)</li>
          </ul>
          <p className="text-slate-600 mt-4 mr-12 lg:mr-auto">
            When we filtered out those that had produced no new content in the
            last three months or more (although then we did have to make some
            exceptions, as you'll see), and ordered the rest according to how
            many times they were nominated, we had a graded shortiist of 55
          </p>
          <p className="text-slate-600 mt-4">
            {" "}
            Agreed, that's not a very short shortlist.
          </p>
          <img src={post} alt="" className="pt-12 pb-12 w-[80%] lg:w-auto" />
          <h2 className="font-extrabold text-slate-800 text-xl lg:text-2xl pr-12 lg:pr-auto">
            So, We Broke It Down Into Five More Reasonably Sized Shortlists:
          </h2>
          <ul className="p-4 marker:text-blue-600 list-disc text-slate-600 space-y-2 pr-12 lg:pr-auto mb-4">
            <li>Podcasts for web designers</li>
            <li>Podcasts for web developers</li>
            <li>Podcasts on the web, the Internet and technology</li>
            <li>Business podcasts for web professionals</li>
            <li>
              Podcasts that don't have recent episodes (but do have great
              archives)
            </li>
                  </ul>
                  {/* comment section */}
                  <hr className="mr-12 lg:mr-auto"></hr> 
                  <div className="flex p-1  pt-5 space-x-12 mb-20">
                      <img src={blank} alt="" className="rounded-full h-8 w-8" />
          
            <input
               type="text"   
               placeholder="Write a comment..."
               className="text-slate-400 text-sm !outline-none bg-transparent "
             />
                  </div>
                  <hr className="mr-12 lg:mr-auto"></hr>

                  <div className="flex p-1  pt-5 space-x-12 mr-12 lg:mr-auto">
                      <img src={blank} alt="" className="rounded-full h-8 w-8" />
                     
                      <div>
                          <h1 className="text-slate-800 font-bold text-sm"> Joana Rafael</h1>
                          <p className="text-slate-400 text-xs -mt-0 mb-6">2 hours ago</p>
                          <p className="text-slate-400 text-sm mb-14">It's difficult, scary and at the same time exciting. </p>

                      </div>

                  </div>
                 
                  {/* <hr className="mb-12"></hr> */}
                    
        </div>
      </div>
      </div>
      
  );
}
