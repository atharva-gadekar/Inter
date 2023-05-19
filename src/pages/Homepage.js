import React, { useState } from 'react';
import Navbarhome from '../components/Navbarhome';
import Sidebar from '../components/Sidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Connect from '../components/Connect';
import '../App.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavigationHome from '../components/NavigationHome';
import Connections from '../components/Connections';
import { useEffect } from 'react';
import BlogContextProvider from '../utils/context/BlogContext';
import { BlogContext } from '../utils/context/BlogContext';
import { useContext } from 'react';
import axios from "axios";
import DoorDashFavorite from '../components/Skeleton_Post';
import { UserContext } from "../utils/context/UserContext";
import ModalComponent from '../components/Modal';





const Homepage = ({setLoggedIn}) => {
	const navigate=useNavigate();
	const { user, setUser, token,isNewUser,setIsNewUser  } = useContext(UserContext);
	const [isModalVisible, setIsModalVisible] = useState(isNewUser);

  const [banner, setBanner] = React.useState(null);
  const [blog, setBlog] = React.useState({
    title: "",
    brief: "",
    tags: [],
  });

  const { blogs, setBlogs } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
			const fetchBlogs = async () => {
				try {
					if (token) {
						axios({
							method: "get",
							url: `https://inter-api-8q0x.onrender.com/blog`,
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}).then((response) => {
							setBlogs(response.data.blogs);
							setLoading(false);
						});
						
					}
				} catch (error) {
					console.error(error);
				}
			};

			fetchBlogs();
		}, []);

		useEffect(() => {
			if (isNewUser) {
			  setIsModalVisible(true);
			}
		  }, [isNewUser]);
		  
  

		 

  return (
		<div>
			<ModalComponent
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>

			<div className="flex flex-col min-h-screen">
				<Navbarhome setLoggedIn={setLoggedIn} />

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
						{loading ? (
							<div className="text-center">
								<DoorDashFavorite />
							</div>
						) : (
							<Post />
						)}
					</div>
					<div className="lg:w-1/6 mt-[0.9rem]">
						<div className="sticky top-4 ">
							<Connect />
						</div>
					</div>
				</div>
				<NavigationHome />
			</div>
		</div>
	);
};

export default Homepage;
