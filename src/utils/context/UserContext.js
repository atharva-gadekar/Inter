import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState({});
	const[token,setToken]=useState("");

	return (
		<UserContext.Provider value={{ user,setUser,token,setToken }}>
			{children}
		</UserContext.Provider>
	);
}
