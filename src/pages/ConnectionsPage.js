import React from 'react'
import Navbarhome from '../components/Navbarhome';
// import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Connect from '../components/Connect';
import '../App.css';
import { Link } from "react-router-dom";
import NavigationHome from '../components/NavigationHome';
import Connections from '../components/Connections';
export default function ConnectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarhome />
      
      <div className="flex">
        <div className="lg:w-1/5">
          <div className="sticky top-4">
            <Sidebar />
            <ProfileSidebar/>
          </div>
        </div>
        <div className="w-[82%] lg:mt-4 pr-5">
          {/* <CreatePost />
          <Post />
          <Post /> */}
          <Connections/>
        </div>
        {/* <div className="lg:w-1/6 mt-[0.9rem]">
          <div className="sticky top-4 ">
            <Connect />
          </div>
        </div> */}
      </div>
      <NavigationHome />
    </div>
  )
}
