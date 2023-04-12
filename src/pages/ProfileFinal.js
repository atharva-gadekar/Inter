import React from 'react';
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
import ProfileSettings from '../components/ProfileSettings';

export default function ProfileFinal() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarhome />
      
      <div className="flex flex-1">
        <div className="lg:w-1/6">
          <div className="sticky top-4">
            <Sidebar />
            <ProfileSidebar/>
          </div>
        </div>
        <div className="lg:w-2/3 lg:mt-4 ">
          <ProfileSettings />
        </div>
        <div className="lg:w-1/6 mt-[0.9rem]">
          <div className="sticky top-4 ">
            <Connect />
          </div>
        </div>
      </div>
      <NavigationHome />
    </div>
  )
}