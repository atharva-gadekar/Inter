import {
	faCamera,
	faFileAlt,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal, Input, Select, Upload, Button } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const CreatePost = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const showModal = () => {
		setModalVisible(true);
	};

	const handleCancel = () => {
		setModalVisible(false);
	};

	const uploadButton = (
		<div>
			<FontAwesomeIcon icon={faCamera} className="text-gray-400" />
			<div className="style mt-2  ">Upload</div>
		</div>
	);

	return (
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
					<Button key="submit" onClick={handleCancel}>
						Proceed
					</Button>,
				]}
			>
				<Input placeholder="Blog Title" className="mb-4" />
				<TextArea placeholder="Blog Description" rows={4} className="mb-4" />
				<Select
					mode="tags"
					style={{ width: "100%" }}
					placeholder="Blog Tags"
					className="mb-4"
				>
					<Option key="javascript">JavaScript</Option>
					<Option key="react">React</Option>
					<Option key="css">App Development</Option>
					<Option key="css">Web Development</Option>
				</Select>

				<div className="mb-4" style={{ width: "110%" }}>
					<Upload listType="picture-card" className="w-full" maxCount={1}>
						{uploadButton}
					</Upload>
				</div>
			</Modal>
		</>
	);
};

export default CreatePost;
