import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
	name: "file",
	multiple: false,
	action: "",

	onChange(info) {
		const isJpgOrPng =
			info.file.type === "image/jpeg" || info.file.type === "image/png";
		if (!isJpgOrPng) {
			message.error("You can only upload JPG/PNG file!");
		}
		const isLt2M = info.file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Image must smaller than 2MB!");
		}

		if (isJpgOrPng && isLt2M) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		} else message.error(`${info.file.name} file upload failed.`);
	},
	onDrop(e) {
		console.log("Dropped files", e.dataTransfer.files);
	},
};

const ImgUpload = () => (
	<Dragger
		{...props}
		className="w-full px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
	>
		<p className="ant-upload-drag-icon">
			<InboxOutlined />
		</p>
		<p className="ant-upload-text">
			Click or drag an image to this area to upload
		</p>
		<p className="ant-upload-hint">
			Upload the image which you want to set as your profile picture
		</p>
	</Dragger>
);
export default ImgUpload;
