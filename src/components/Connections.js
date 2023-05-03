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
import { useEffect } from 'react';
import axios from 'axios';


const Connections = () => {
    const token = localStorage.getItem("token");
	const userId = localStorage.getItem("userId");
	const [userInterests, setUserInterests] = React.useState(null);
	const [connections, setConnections] = React.useState(null);

	const getConnections = (interest) => {
		axios({
			method: "get",
			url: `https://inter-api-8q0x.onrender.com/user/${userId}/${interest}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((response) => {
			console.log(response.data);
			setConnections(response.data);
		});
	}

	const getConnectionsAll = () => {
		axios({
			method: "get",
			url: `https://inter-api-8q0x.onrender.com/user/${userId}/interests/all`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((response) => {
			console.log(response.data);
			setConnections(response.data);
		});
	}


   useEffect(() => {
			const fetchUserName = async () => {
				try {
					if (token) {
						axios({
							method: "get",
							url: `https://inter-api-8q0x.onrender.com/user/${userId}`,
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}).then((response) => {
							console.log(response.data);
							setUserInterests(response.data.user.interests);
						});
					}
				} catch (error) {
					console.error(error);
				}
			};
			fetchUserName();

				const getConnectionsAll = () => {
					axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${userId}/interests/all`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
						console.log(response.data);
						setConnections(response.data);
					});
				};
				getConnectionsAll();

		}, []);

  return (
		<div className="bg-white p-8 rounded-3xl">
			<h1 className="my-4 font-bold text-3xl text-blue-600">Interests</h1>
			<div className="flex justify-left space-x-3 items-center  mb-12">
				<button
					className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-50 font-medium focus:bg-blue-300"
					onClick={() => {
						getConnectionsAll();
					}}
				>
					All
				</button>
				{userInterests &&
					userInterests.map((interest) => (
						<button
							className="px-5 py-2 border border-blue-100 rounded-3xl text-blue-700 bg-blue-50 font-medium focus:bg-blue-300"
							onClick={() => {
								getConnections(interest);
							}}
						>
							{interest}
						</button>
					))}
			</div>
			<div className="flex flex-wrap justify-evenly mb-5 gap-y-12">
				{connections &&
					connections.map((connection) => <UserProfile user={connection} />)}
			</div>
		</div>
	);
};

export default Connections;
