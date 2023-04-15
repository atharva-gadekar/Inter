import React, { useEffect, useState } from "react";
import {
	faAdd,
	faCamera,
	faFileAlt,
	faHome,
	faInbox,
	faLink,
	faMessage,
	faPerson,
	faSearch,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Input } from "antd";

import profile_bg from "../assets/Twitterspace_Aptod.png";
import profile from "../assets/Rectangle 47.png";
import userEvent from "@testing-library/user-event";

export default function UserProfile({user}) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [messageTitle, setMessageTitle] = useState("");
	const [messageContent, setMessageContent] = useState("");

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

  useEffect(()=>{
    console.log(user);
  },[])

	return (
		<div>
			<div className=" bg-white h-full rounded-3xl shadow-lg">
				<img
					src={profile_bg}
					alt=""
					className="rounded-3xl mt-4 overflow-hidden object-cover w-full"
				/>
        {user.url && (
          <img
					src={user.url}
					className="-mt-12 mr-auto ml-auto rounded-2xl h-20 w-20"
				/>) || (<img
					src={profile}
					className="-mt-12 mr-auto ml-auto rounded-2xl h-20 w-20"
				/>)
        }
				
				<h1 className="text-center font-bold text-2xl mt-4 mb-6">{user.user.name}</h1>
				<p className="text-center text-slate-500 mt-3 text-lg px-6">
        {user.user.title}
				</p>
				<p className="text-center text-slate-500 mt-3 text-base px-6">
          {user.user.collegeName}
				</p>

				<p className="text-center text-slate-500 mt-1 mb-6 text-base px-6 ">
          {user.user.branch}
				</p>



				<div className="flex justify-center space-x-3 mb-6">
          {user.user && user.user.interests.map((interest) => (
            <button className="bg-blue-100 py-2 px-3 text-blue-600 font-medium rounded-3xl text-sm">
                {interest}
              </button>
          )
          )}
				</div>

				<div className=" flex justify-center items-center space-x-3">
					<button
						className="px-4 py-2 text-blue-600 font-normal "
						onClick={() => setIsModalVisible(true)} // Set modal visibility to true on "Connect" button click
					>
						Connect
					</button>
					<button className="px-4 py-2 text-slate-500 font-normal">
						Ignore
					</button>
				</div>

				<Modal
					className="mt-10 "
					title="Send a message"
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<Input.TextArea
						placeholder="Send a Connection Request Message"
						value={messageContent}
						onChange={(e) => setMessageContent(e.target.value)}
						allowClear
					/>
				</Modal>
			</div>
		</div>
	);
}
