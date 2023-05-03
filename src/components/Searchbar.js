import axios from "axios";
import React, { useState } from "react";

export default function Searchbar() {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState([]);

	const handleSearchClick = (e) => {
		e.target.placeholder = "Search for a @user or #tag or a post";
		console.log("clicked");
	};

	const handleChange = async (e) => {
		setQuery(e.target.value);
		if (query[0] === "#") setQuery("$" + query.slice(1));
		const token = localStorage.getItem("token");
		try {
			if (query.trim().length === 0) {
				throw new Error("Search query cannot be empty");
			}
			const res = await axios.get(
				`https://inter-api-8q0x.onrender.com/search/${query}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	

	return (
		<div className="flex items-center w-96">
			<input
				className="bg-[#f5f5f5] rounded-xl w-full py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-gray-100"
				type="text"
				placeholder="Global search"
				value={query}
				onClick={handleSearchClick}
				onChange={handleChange}
			/>
		</div>
	);
}
