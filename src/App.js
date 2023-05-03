import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import NewBlog from "./components/NewBlog";
import ConnectionsPage from "./pages/ConnectionsPage";
import ChatFinal from "./pages/ChatFinal";
import Blog from "./components/Blog";
import ProfileFinal from "./pages/ProfileFinal";
import Notifications from "./pages/Notifications";
import Resetpass from "./pages/Resetpass";
import Forgotpass from "./pages/Forgotpass";
import MessageList from "./components/MessageList";
import Hashtag from "./components/Hashtag";
import moment from "moment";
import ModalComponent from "./components/Modal";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const token = localStorage.getItem("token");

	const checkTokenExpiration = () => {
		const expiration = localStorage.getItem("tokenExpiration");
		 if (expiration && moment(expiration).isBefore(moment())) {
				setLoggedIn(false);
				localStorage.removeItem("token");
				localStorage.removeItem("userId");
				localStorage.removeItem("tokenExpiration");
			} 
	}; 

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setLoggedIn(true);
			const expiration = localStorage.getItem("tokenExpiration");
			if (expiration) {
				const expirationDate = new Date(expiration);
				console.log(expirationDate);
				checkTokenExpiration();
			}
			else setLoggedIn(false);
		}

	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/home"
					element={
						!loggedIn ? (
							<Navigate to="/" replace={true} />
						) : (
							<Homepage setLoggedIn={setLoggedIn} />
						)
					}
				/>
				<Route
					path="/login"
					element={
						loggedIn ? (
							<Navigate to="/home" replace={true} />
						) : (
							<Login
								setLoggedIn={setLoggedIn}
							/>
						)
					}
				/>
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/"
					element={
						loggedIn ? (
							<Navigate to="/home" replace={true} />
						) : (
							<Login
								setLoggedIn={setLoggedIn}
							/>
						)
					}
				/>
				<Route
					path="/profile/:id"
					element={
						!loggedIn ? (
							<Navigate to="/" replace={true} />
						) : (
							<ProfileFinal
								setLoggedIn={setLoggedIn}
							/>
						)
					}
				/>

				<Route
					path="/blog/:id"
					element={
						 
							<Blog setLoggedIn={setLoggedIn} />
						
					}
				/>
				<Route
					path="/create/blog"
					element={!loggedIn ? <Navigate to="/" replace={true} /> : <NewBlog />}
				/>
				<Route
					path="/chat"
					element={
						!loggedIn ? <Navigate to="/" replace={true} /> : <ChatFinal />
					}
				/>
				<Route
					path="/chat"
					element={
						!loggedIn ? <Navigate to="/" replace={true} /> : <ChatFinal />
					}
				/>
				<Route
					path="/network"
					element={
						!loggedIn ? <Navigate to="/" replace={true} /> : <ConnectionsPage />
					}
				/>
				<Route path="/reset/:id" element={<Resetpass />} />
				<Route
					path="/notifications"
					element={
						!loggedIn ? <Navigate to="/" replace={true} /> : <Notifications />
					}
				/>
				<Route path="/forgot" element={<Forgotpass />} />
				<Route path="/modal" element={<ModalComponent />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
