import React, { createContext, useContext, useState } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [showMessageList, setShowMessageList] = useState(false);
	return (
		<ChatContext.Provider value={{ conversations,setConversations ,currentChat,setCurrentChat, showMessageList, setShowMessageList }}>
			{children}
		</ChatContext.Provider>
	);
}
