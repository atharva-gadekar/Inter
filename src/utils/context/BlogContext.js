import React, { createContext, useContext, useState } from "react";

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
	const [blogs, setBlogs] = useState([]);
	const [newBlog, setNewBlog] = useState({});

	return (
		<BlogContext.Provider value={{ blogs, setBlogs, newBlog, setNewBlog }}>
			{children}
		</BlogContext.Provider>
	);
}
