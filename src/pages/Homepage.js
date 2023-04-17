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
import Hashtag from '../components/Hashtag';
const Homepage = () => {
  const [banner, setBanner] = React.useState(null);
  const [blog, setBlog] = React.useState({
    title: "",
    brief: "",
    tags: [],
  });

  return (
		<div className="flex flex-col min-h-screen">
			<Navbarhome />

			<div className="flex justify-evenly pr-16">
				<div className="lg:w-1/5">
					<div className="sticky top-4">
						<Sidebar />
						<ProfileSidebar />
					</div>
				</div>
				<div className="w-[60%] pr-4 mt-4 ">
					<CreatePost
						banner={banner}
						setBanner={setBanner}
						blog={blog}
						setBlog={setBlog}
					/>
				  
					<Post />
				</div>
				<div className="lg:w-1/6 mt-[0.9rem]">
					<div className="sticky top-4 ">
						<Connect />
					</div>
				</div>
			</div>
			<NavigationHome />
	  </div>
	   
	);
};

export default Homepage;
