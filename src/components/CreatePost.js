import {
	faCamera,
	faFileAlt,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Modal, Input, Select, Upload, Button } from "antd";
import BlogPage from "./NewBlog";
import { useNavigate } from "react-router";

const { Option } = Select;
const { TextArea } = Input;

const CreatePost = (props) => {
	const [show, setShow] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [data, setData] = useState({});
	const [tags, setTags] = useState([]);
	const navigate = useNavigate();
	const handleTagChange = (newTags) => {
		setTags(newTags);
	
	};

	const handleUploadChange = (info) => {
		console.log(info.fileList[0]);
		props.setBanner(info.fileList[0]);
	};
	const showModal = () => {
		setModalVisible(true);
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleCancel = () => {
		setModalVisible(false);
	};

	const handleSubmit = () => {
		
		localStorage.setItem("newBlog", JSON.stringify(data));
		props.setBlog({
			...props.blog,
			...data,
			tags,
		});
		setModalVisible(false);
		console.log(
		"Blog Object in Local Storage : ",
		JSON.parse(localStorage.getItem("newBlog"))
);
		navigate(`/create/blog`);
	};

	useEffect(() => {
		// localStorage.setItem("newBlog", JSON.stringify(data));
			setData({ ...data, tags });
	}, [tags]);

	const uploadButton = (
		<div>
			<FontAwesomeIcon icon={faCamera} className="text-gray-400" />
			<div className="style mt-2  ">Upload</div>
		</div>
	);

	return (
		<>
			<>
				<div className="bg-white rounded-xl border shadow-slate-100 p-6 lg:flex items-center ml-[4.5rem] w-[53rem] hidden">
					<div className="relative w-full">
						<input
							type="text"
							onClick={showModal}
							className="w-full px-4 py-2 rounded-lg text-sm focus:outline-none border-gray-300 cursor-pointer"
							placeholder="Create a new post..."
						/>
					</div>
					<div className="flex ml-auto">
						<FontAwesomeIcon icon={faFileAlt} className="mr-5 text-gray-400" />
						<FontAwesomeIcon icon={faVideo} className="mr-5 text-gray-400" />
						<FontAwesomeIcon icon={faCamera} className="text-gray-400" />
					</div>
				</div>

				<Modal
					title="Create Post"
					visible={modalVisible}
					onCancel={handleCancel}
					footer={[
						<Button key="back" onClick={handleCancel}>
							Cancel
						</Button>,
						<Button key="submit" onClick={handleSubmit}>
							Proceed
						</Button>,
					]}
				>
					<Input
						placeholder="Blog Title"
						className="mb-4"
						name="title"
						onChange={handleChange}
					/>
					<TextArea
						placeholder="Blog Description"
						name="brief"
						onChange={handleChange}
						rows={4}
						className="mb-4"
					/>
					<Select
						mode="tags"
						style={{ width: "100%" }}
						value={tags}
						onChange={handleTagChange}
						placeholder="Blog Tags"
						className="mb-4"
					>
						<Option key="JavaScript">JavaScript</Option>
						<Option key="React">React</Option>
						<Option key="App Development">App Development</Option>
						<Option key="Web Development">Web Development</Option>
					</Select>

					{/* <div className="mb-4" style={{ width: "110%" }}>
						<Upload
							listType="picture-card"
							className="w-full"
							maxCount={1}
							onChange={handleUploadChange}
						>
							{uploadButton}
						</Upload>
					</div> */}
				</Modal>
			</>
		</>
	);
};

export default CreatePost;
