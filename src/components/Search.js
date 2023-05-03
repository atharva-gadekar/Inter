import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
import { useContext, useState } from "react";
import Result from "./Result";
import { BlogContext } from "../utils/context/BlogContext";

const Search = () => {
	const [query, setQuery] = useState("");
	const [items, setItems] = useState([]);
	const [content, setContent] = useState("");
	const [user, setUser] = useState({});
	const [type, setType] = useState("");
	const { blogs, setBlogs } = useContext(BlogContext);

	const handleSearchClick = (e) => {
		e.target.placeholder = "Search for a @user or #tag or a post";
	};

	const handleSearch = async (e) => {
		if (e.key === "Enter") {
			const token = localStorage.getItem("token");
			const res = await axios.get(
				`https://inter-api-8q0x.onrender.com/search/${content}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log(res.data);
			setBlogs(res.data);
			setItems([]);
			e.target.placeholder = "Global Search";
			e.target.blur();
		}
	};

	const handleChange = async (e) => {
		setItems([]);
		setQuery(e.target.value);

		if (query[0] === "#") {
			setType("tag");
			setContent(e.target.value.replace("#", "$"));
		} else if (query[0] === "@") {
			setType("user");
		} else {
			setType("blog");
			setContent(query);
		}
		const token = localStorage.getItem("token");
		try {
			if (type === "user") {
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

				setItemsArray(res.data);
			}
			if (type === "tag") {
				console.log(content);
				setItems([
					{
						label: (
							<Result
								type="tag"
								content={e.target.value}
								setItems={setItems}
							/>
						),
						key: 0,
					},
				]);
			}
			if (type === "blog") {
				setItems([
					{
						label: (
							<Result
								type="blog"
								content={e.target.value}
								setItems={setItems}
							/>
						),
						key: 1,
					},
				]);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const setItemsArray = (data) => {
		setItems([]);
		if (query[0] === "@") {
			data.map((user) => {
				setItems((prev) => [
					...prev,
					{
						label: <Result type="user" content={user.username} user={user} />,
						key: user._id,
					},
				]);
			});
			console.log(items);
		}
	};

	return (
		<Dropdown
			menu={{
				items,
			}}
			trigger={["click"]}
		>
			<a onClick={(e) => e.preventDefault()}>
				<div className="flex items-center w-96">
					<input
						className="bg-[#f5f5f5] rounded-xl w-full py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-gray-100"
						type="text"
						placeholder="Global search"
						value={query}
						onClick={handleSearchClick}
						onChange={handleChange}
						onKeyDown={handleSearch}
					/>
				</div>
			</a>
		</Dropdown>
	);
};

export default Search;
