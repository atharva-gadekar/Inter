// profile page

import React from 'react';
import Navbarhome from '../components/Navbarhome';

import Sidebar from '../components/Sidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Connect from '../components/Connect';
import '../App.css';
import { Link } from "react-router-dom";
import NavigationHome from '../components/NavigationHome';
import Connections from '../components/Connections';
import imagee from "../assets/jr-korpa-wAXD_Its-48-unsplash.jpg";
import profile from "../assets/pexels-pixabay-220453.jpg";
import { FaEdit } from "react-icons/fa";



import Profile_Settings from '../components/ProfileSettings';
export default function Hi({ setLoggedIn }) {
	return (
		<>
			<div className="flex flex-col min-h-screen ">
				<Navbarhome />

				<div className="flex flex-1 justify-evenly">
					<div className="lg:w-1/5">
						<div className="sticky top-4">
							<Sidebar />
							<ProfileSidebar />
						</div>
					</div>
					<div className="lg:w-5/6 mt-4 pr-2">
						<Profile_Settings
							setLoggedIn={setLoggedIn}
						/>
					</div>
				</div>
				<NavigationHome />
			</div>
		</>
	);
}
