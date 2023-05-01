import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import hash from "../assets/hash.png";
import blog from "../assets/blog.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../utils/context/BlogContext";
import axios from "axios";

export default function Result(props) {
	const { blogs, setBlogs } = useContext(BlogContext);

	const handleSearch = async (e) => {
			const token = localStorage.getItem("token");
			if(props.type==="tag") var temp = props.content.replace("#", "$");
			else var temp = props.content;
			const res = await axios.get(
				`https://inter-api-8q0x.onrender.com/search/${temp}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log(res.data);
			setBlogs(res.data);
			props.setItems([]);
			e.target.placeholder = "Global Search";
			e.target.blur();
	};

	return (
		<>
			{props.type === "tag" && (
				<Space
					direction="vertical"
					size={16}
					onClick={handleSearch}
					onSelect={handleSearch}
				>
					<Space wrap size={8}>
						<Avatar size="medium" src={hash} icon={<UserOutlined />} />
						<div className="mb-1.5 text-[1rem] font-bold">{props.content}</div>
					</Space>
				</Space>
			)}
			{props.type === "user" && (
				<Link to={`/profile/${props.user._id}`}>
					<Space direction="vertical" size={16}>
						<Space wrap size={8}>
							<Avatar
								size="medium"
								src={props.user.url}
								icon={<UserOutlined />}
							/>
							<div className="mb-1.5 text-[1rem]">{props.user.name}</div>
						</Space>
					</Space>
				</Link>
			)}
			{props.type === "blog" && (
				<Space
					direction="vertical"
					size={16}
					onClick={handleSearch}
					onSelect={handleSearch}
				>
					<Space wrap size={8}>
						<Avatar
							size="medium"
							src={blog}
							shape="square"
							className="mb-1 mr-1"
							icon={<UserOutlined />}
						/>
						<div className=" text-[0.9rem]">
							Press Enter to search for all blogs containing
							<div className="mb-1.5 -mt-1 text-[0.9rem] font-bold italic">
								"{props.content}"
							</div>
						</div>
					</Space>
				</Space>
			)}
		</>
	);
}


