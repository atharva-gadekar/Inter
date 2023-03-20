import React from 'react';
import Navbarhome from '../components/Navbarhome';
import Sidebar from '../components/Sidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Connect from '../components/Connect';
import '../App.css';

const Homepage = () => {
 
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarhome />
      <div className="flex flex-1">
        <div className="w-1/6">
          <div className="sticky top-0">
            <Sidebar />
            <ProfileSidebar />
          </div>
        </div>
        <div className="w-2/3">
          <CreatePost />
          <Post />
        </div>
        <div className="w-1/6">
          <div className="sticky top-0 h-screen">
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
