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

export default function BlogPage() {
  return (
    <div className=" w-[70%] mr-auto ml-auto ">
      <img src={post} className="w-[100%]"></img>
      <div className="flex items-center space-x-4 mt-12 mb-6 px-24">
        <img src={blank} alt="" className="h-8 w-8 rounded-full" />
        <p className="text-sm text-slate-600">
          By Saishree Kouda, Scarlet Magazine
        </p>
      </div>
      <div className="flex space-x-12 place-items-start">
        <div className="flex flex-col space-y-3 p-2">
          <FontAwesomeIcon icon={faFacebook} className="mr-5 text-blue-600" />
          <FontAwesomeIcon icon={faTwitter} className="mr-5 text-blue-600" />
          <FontAwesomeIcon icon={faInstagram} className="mr-5 text-blue-600" />
          <FontAwesomeIcon icon={faLinkedin} className="mr-5 text-blue-600" />
        </div>
        <div className="pr-48">
          <h1 className="font-extrabold text-5xl text-slate-800 leading-[1.25]">
            Which Podcasts Should Web Developers And Designers Be Listening To?
          </h1>
          <p className="text-slate-600 mt-4">
            What podcasts Scarlet community listened to, aiming to complete a
            shortlist of current podcasts for web designers ond developers. We
            had what can be coded to a very strong response both in number and
            in passion.
          </p>
          <img src={post} alt="" className="pt-12 pb-12" />
          <h2 className="font-extrabold text-slate-800 text-2xl">
            First, We Winnowed Out The Podcasts
          </h2>
          <ul className="p-4 marker:text-blue-600 list-disc text-slate-600 space-y-2">
            <li> On a broader theme (Eg: Hey, Hi, Hello)</li>
            <li>On a broader theme (Eg: Hey, Hi, Hello)</li>
            <li>On a broader theme (Eg: Hey, Hi, Hello)</li>
          </ul>
          <p className="text-slate-600 mt-4">
            When we filtered out those that had produced no new content in the
            last three months or more (although then we did have to make some
            exceptions, as you'll see), and ordered the rest according to how
            many times they were nominated, we had a graded shortiist of 55
          </p>
          <p className="text-slate-600 mt-4">
            {" "}
            Agreed, that's not a very short shortlist.
          </p>
          <img src={post} alt="" className="pt-12 pb-12" />
          <h2 className="font-extrabold text-slate-800 text-2xl">
            So, We Broke It Down Into Five More Reasonably Sized Shortlists:
          </h2>
          <ul className="p-4 marker:text-blue-600 list-disc text-slate-600 space-y-2">
            <li> Podcasts for web designers</li>
            <li>Podcasts for web developers</li>
            <li>Podcasts on the web, the Internet and technology</li>
            <li>Business podcasts for web professionals</li>
            <li>
              Podcasts that don't have recent episodes (but do have great
              archives)
            </li>
                  </ul>
                  {/* comment section */}
                  <hr></hr> 
                  <div className="flex p-1  pt-5 space-x-12 mb-20">
                      <img src={blank} alt="" className="rounded-full h-8 w-8" />
                      <p className="text-slate-400 text-sm"> Write a Comment...</p>

                  </div>
                  <hr className=""></hr>

                  <div className="flex p-1  pt-5 space-x-12 ">
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
