import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
	loggedIn: false,
	setLoggedIn: () => {},
});

export const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setLoggedIn(true);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};
