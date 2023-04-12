import React from 'react';
import Navbarhome from './Navbarhome';
// import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';
import ProfileSidebar from './ProfileSidebar';
import CreatePost from './CreatePost';
import Post from './Post';
import Connect from './Connect';
import '../App.css';
import { Link } from "react-router-dom";
import NavigationHome from './NavigationHome';
import UserProfile from './UserProfile';
const Connections = () => {
 
  return (
    <div className='bg-white p-8 rounded-3xl'>
      <h1 className='my-4 font-bold text-3xl text-blue-600'>Interests</h1>
      <div className="flex justify-left space-x-3 items-center  mb-12">
        <button className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-100 font-medium focus:bg-blue-200">All</button>
        <button className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-100 font-medium focus:bg-blue-200">Design</button>
        <button className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-100 font-medium focus:bg-blue-200">Marketing</button>
        <button className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-100 font-medium focus:bg-blue-200 ">Web Development</button>
        <button className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-100 font-medium focus:bg-blue-200 ">ML</button>
        <button className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-100 font-medium focus:bg-blue-200">App Development</button>

      </div>
      <div className="flex justify-evenly space-x-12  mb-5">
        <UserProfile />
        <UserProfile />
        <UserProfile/>
      </div>
    </div>
    
  );
};

export default Connections;
