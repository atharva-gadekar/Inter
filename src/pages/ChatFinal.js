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
import ChatPage from './ChatPage';


export default function ChatFinal() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarhome />
      
      <div className="flex justify-between">
        <div className="lg:w-[15%]">
          <div className="sticky top-4">
            <Sidebar />
            <ProfileSidebar/>
          </div>
        </div>
        <div className="lg:mt-4 w-[80%] pr-6">
          <ChatPage/>
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
