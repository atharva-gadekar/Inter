import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState({});
	const[token,setToken]=useState("");
	const [isNewUser, setIsNewUser] = useState(false);
	return (
		<UserContext.Provider value={{ user,setUser,token,setToken,isNewUser,setIsNewUser }}>
			{children}
		</UserContext.Provider>
	);
}
