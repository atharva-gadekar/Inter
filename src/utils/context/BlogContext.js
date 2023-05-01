import React, { createContext, useContext, useState } from "react";

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
	const [blogs, setBlogs] = useState([]);
	console.log("blogs:", blogs);
	console.log("setBlogs:", setBlogs);

	return (
		<BlogContext.Provider value={{ blogs, setBlogs }}>
			{children}
		</BlogContext.Provider>
	);
}
