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

import Notif from '../components/Notif';
export default function Notifications() {
  return (
    
    <div className="flex flex-col min-h-screen">
			<Navbarhome />

			<div className="flex justify-evenly pr-16">
				<div className="w-1/5">
					<div className="sticky top-4">
						<Sidebar />
						<ProfileSidebar />
					</div>
				</div>
				<div className=" w-[63%] lg:mt-4 pr-4">
					<Notif />
				</div>
				<div className="lg:mt-[0.9rem] w-1/6">
					<div className="sticky top-4 ">
						<Connect />
					</div>
				</div>
			</div>
			<NavigationHome />
		</div>
  )
}
