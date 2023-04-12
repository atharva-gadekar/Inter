import React, { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import post from "../assets/post.png"
import post from "../assets/post.png";
import blank from "../assets/blank_profile.jpeg"
import profile from "../assets/profile.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbarhome from "./Navbarhome";

export default function BlogPage(props) {
  const editorRef = useRef(null);
	const [content, setContent] = useState("");
	const id = localStorage.getItem("userId");
	const log = () => {
		if (editorRef.current) {
			// console.log(editorRef.current.getContent());
			setContent(editorRef.current.getContent());
			props.setBlog({...props.blog, content, owner: id})
			console.log(props.blog);
		}
	};

	const [imgData, setImgData] = useState(null);

	const onChangePicture = () => {
		if (props.blog.banner) {
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setImgData(reader.result);
			});
			reader.readAsDataURL(props.blog.banner);
		}
	};

		useEffect(() => {
			onChangePicture();
		}, []);
		
  return (
		<>
			<div className=" lg:w-[70%] mr-auto ml-auto mt-12">
				<img
					src={imgData}
					className="lg:w-[100%] ml-auto mr-auto w-[80%]"
				></img>
				<div className="flex items-center space-x-4 mt-4 lg:mt-12 lg:mb-6 mb-4 px-24"></div>
				<div className="lg:flex space-x-0 lg:place-items-start ">
					<div className="flex hidden lg:flex-col lg:space-y-3 pb-4 lg:pt-2 lg:pb-2 justify-center">
						<FontAwesomeIcon
							icon={faFacebook}
							className="mr-5 text-blue-600 text-lg lg:text-base"
						/>
						<FontAwesomeIcon
							icon={faTwitter}
							className="mr-5 text-blue-600 text-lg lg:text-base"
						/>
						<FontAwesomeIcon
							icon={faInstagram}
							className="mr-5 text-blue-600 text-lg lg:text-base"
						/>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="mr-5 text-blue-600 text-lg lg:text-basegit"
						/>
					</div>
					<div className="justify-center ml-auto mr-auto">
						<h2 className="font-extrabold text-2xl lg:text-5xl text-slate-800 lg:leading-[1.25] mr-12 lg:mr-auto">
							{props.blog.title}
						</h2>
						<p className="text-slate-600 mt-4 mr-12 lg:mr-auto mb-10">
							{props.blog.brief}
						</p>

						<Editor
							apiKey="ah9w9dtmhnrt5yhzobg11p0jj9sdldd1x64lj89aipllnqn6"
							onInit={(evt, editor) => (editorRef.current = editor)}
							initialValue="<p>This is the initial content of the editor.</p>"
							init={{
								height: "100vh",
								toolbar_sticky: true,

								plugins: [
									"autolink lists advlist link image charmap print preview anchor",
									"searchreplace visualblocks code fullscreen",
									"insertdatetime media table paste code help wordcount quickbars",
								],
								menubar: "file edit view insert format tools table tc help",
								toolbar: [
									"undo redo | styles| bold italic backcolor | " +
										"alignleft aligncenter alignright alignjustify | " +
										"bullist numlist outdent indent | removeformat | code | help",
								],

								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:17px }",
							}}
						/>
						<div className="flex justify-end">
							<button
								onClick={log}
								class="mt-8 mb-32 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>
								Post Blog
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
