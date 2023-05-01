import React, { createContext, useContext, useState } from 'react'

export const BlogContext = createContext(null);

export default function BlogContextProvider({children}) {
    const [blogs, setBlogs] = useState([]);

    const value = {
        blogs, setBlogs,
    }

  return (
    <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
  )
}
