import React from 'react';
import Navbarhome from '../components/Navbarhome';
import Sidebar from '../components/Sidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Chat from '../components/Chat';
import '../App.css';

const Homepage = () => {
 
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4">
      <div className="col-start-1 col-end-13 row-start-1 row-end-2">
        <Navbarhome />
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-6">
        <Sidebar />
      </div>
      <div className="col-start-3 col-end-10 row-start-2 row-end-4">
        <CreatePost />
      </div>
      <div className="col-start-3 col-end-10 row-start-4 row-end-6">
        <Post />
      </div>
      <div className="col-start-10 col-end-13 row-start-2 row-end-6">
        <Chat />
      </div>
      <div className="col-start-1 col-end-3 row-start-6 row-end-7">
        <ProfileSidebar />
      </div>
    </div>
  );
};

export default Homepage;
