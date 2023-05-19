import React from "react";
import imagee from "../assets/jr-korpa-wAXD_Its-48-unsplash.jpg";
import profile from "../assets/pexels-pixabay-220453.jpg";
import { FaEdit } from "react-icons/fa";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Navbarhome from "./Navbarhome";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Modal, Form, Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { overflow } from "tailwindcss-classnames";
import { useParams } from "react-router-dom";
import DevtoCard from "./Skeleton_Profile";
import BlogContextProvider from "../utils/context/BlogContext";
import { BlogContext } from "../utils/context/BlogContext";
import { useContext } from "react";
import Post from "../components/Post";

const { TextArea } = Input;

const Profile_Settings = ({ setLoggedIn }) => {
  const { id } = useParams();
  const { blogs, setBlogs } = useContext(BlogContext);
  const [isUser, setisUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const [change, setChange] = useState({});
  const [user, setUser] = useState({
    user: {
      _id: "",
      name: "",
      email: "@gmail.com",
      password: "",
      picture: "",
      collegeName: "",
      year: 2,
      branch: "",
      interests: [],
      following: [],
      followers: [],
      posts: [],
      createdAt: "",
      __v: 2,
    },
    url: "",
  });

  const token = localStorage.getItem("token");
  const userr = localStorage.getItem("userId");

  const handleInterests = () =>{
    setShow(!show);
  }

  useEffect(() => {
    const getUserBlogs = async () => {
      try {
        // console.log(`Blog ID : ${blogID}`);
        axios({
          method: "get",
          url: `https://inter-api-8q0x.onrender.com/user/${userr}/blogs`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          setBlogs(response.data.blogs)
        });
      } catch (error) {
        console.error(error);
      }
    };

    getUserBlogs();
  }, []);

  useEffect(() => {
    if (userr === id) {
      setisUser(true);
    } else {
      setisUser(false);
    }
  }, []);

  console.log(id);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    if (localStorage.getItem("userId")) {
      setLoggedIn(false);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");
      navigate("/");
    }
  };

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = () => {
    setVisible(false);
  };

  const [tags, setTags] = useState([]);

  const handleTagClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const handleTagAdd = () => {
    const newTag = document.getElementById("newTag").value.trim();
    if (newTag && tags.indexOf(newTag) === -1) {
      const newTags = [...tags, newTag];
      setTags(newTags);
    }
    document.getElementById("newTag").value = "";
  };

  const updateUser = async (id, updatedData) => {
    axios
      .patch(
        `https://inter-api-8q0x.onrender.com/user/update/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("User updated successfully:", response.data);
        fetchUserName();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  
    const fetchUserName = async () => {
      try {
        if (token) {
          axios({
            method: "get",
            url: `https://inter-api-8q0x.onrender.com/user/${id}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            setUser(response.data);
            setLoading(false);
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

  
  useEffect(()=>{
    fetchUserName();
  },[]);

  const handleChange = (event) => {
    setChange({ ...change, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (tags) {
      setChange({ ...change, interests: [...tags] });
    }

    const userId = localStorage.getItem("userId");
    await updateUser(userId, change);
  };

  useEffect(() => {
    console.log("final Data Object : ", change);
  }, [change]);

  return (
		<>
			<Modal
				visible={visible}
				title="Edit form"
				okText="Create"
				onCancel={handleCancel}
				style={{ scale: "98%", overflowY: "hidden" }}
				footer={null}
			>
				<Form layout="vertical" onFinish={handleSubmit}>
					<Form.Item label="Name">
						<Input disabled defaultValue={user.user.name} />
					</Form.Item>
					<Form.Item label="About">
						<TextArea
							rows={2}
							defaultValue={user.user.about}
							onChange={handleChange}
							name="about"
						/>
					</Form.Item>
					<Form.Item label="Title">
						<Input
							defaultValue={user.user.title}
							onChange={handleChange}
							name="title"
						/>
					</Form.Item>
					<Form.Item label="Interest Tags">
						<div>
							{tags.length !== 0 &&
								tags.map((tag) => (
									<Tag
										key={tag}
										closable
										onClose={() => handleTagClose(tag)}
										style={{ marginBottom: "5px" }}
									>
										{tag}
									</Tag>
								))}
							<Input
								id="newTag"
								type="text"
								defaultValue={user.user.interests}
								onPressEnter={handleTagAdd}
								name="interests"
							/>
						</div>
					</Form.Item>

					<Form.Item label="College Name">
						<Input
							defaultValue={user.user.collegeName}
							onChange={handleChange}
							name="collegeName"
						/>
					</Form.Item>
					<Form.Item label="Branch">
						<Input
							defaultValue={user.user.branch}
							onChange={handleChange}
							name="branch"
						/>
					</Form.Item>
					<div className="flex justify-end">
						<button
							type="submit"
							className="p-2 ml-auto bg-blue-600 text-white rounded px-4"
						>
							Submit
						</button>
					</div>
				</Form>
			</Modal>

			{loading && <DevtoCard />}

			{!loading && (
				<div className="flex flex-row ">
					<div className="ml-3 mr-3 lg:mx-auto bg-white w-[98%] lg:w-[97.6%] rounded-2xl overflow-hidden ">
						<img
							className="w-full h-48 lg:h-64 object-cover"
							src={imagee}
							alt="Cover"
						/>

						<div className="relative ml-11 ">
							<div className="-mt-11 ">
								<div className="flex mt-2 flex-col text-left">
									<div className="flex justify-between items-end pr-8">
										<div className="h-36 w-36 lg:h-44 lg:w-44 rounded-full overflow-hidden bg-white border-4 -mt-12 ">
											<img
												className="h-full w-full object-cover"
												src={user.url}
												alt="Profile"
											/>
										</div>

										{isUser ? (
											<div className="flex space-x-4">
												<FontAwesomeIcon
													icon={faPen}
													onClick={showModal}
													className="mr-5 h-6 w-6 text-blue-600 text-lg lg:text-base"
												/>

												<FontAwesomeIcon
													icon={faArrowRightFromBracket}
													className="mr-5 h-6 w-6 text-blue-600 text-lg lg:text-base"
													onClick={handleLogout}
												/>
											</div>
										) : (
											" "
										)}
									</div>

									<div className="lg:flex justify-between mb-6">
										<div className="flex">
											<div>
												<h1 className="mt-4 text-black text-2xl font-bold  ">
													{user.user.name}
												</h1>
												<h2 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
													{user.user.branch}
												</h2>
												<h3 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
													{user.user.title}
												</h3>
												<h3 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
													<span className="text-black text-[1rem] font-medium mr-2">
														{user.user.following.length}
													</span>
													<span className="text-gray-600 text-[1rem] font-medium tracking-wide">
														Connections
													</span>
												</h3>
											</div>
										</div>
										<div className=" text-right pr-[2rem] mx-h-[70%]">
											<h1 className="mt-4 text-black text-2xl font-bold  ">
												Education
											</h1>
											<h2 className="mt-2 text-gray-600 text-xl font-medium tracking-wide">
												{user.user.collegeName}
											</h2>

											{show && <div className="mt-6 flex flex-row flex-wrap justify-end" onClick={handleInterests}>
												{user.user.interests.map((interest, index) => (
													<span
														key={index}
														className="bg-gray-200 text-gray-700 px-3 py-3 rounded-xl text-sm mr-2 mb-2"
													>
														#{interest}
													</span>
												))}
											</div>}

                      {!show && <div className="mt-6 flex flex-row flex-wrap justify-end" onClick={handleInterests}>
                        {user.user.interests.slice(0,3).map((interest, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-700 px-3 py-3 rounded-xl text-sm mr-2 mb-2"
                          >
                            #{interest}
                          </span>
                        ))}
                        {user.user.interests.length > 3 && (
    <span className="bg-gray-200 text-gray-700 px-3 py-3 rounded-xl text-sm mr-2 mb-2">
      +{user.user.interests.length - 3} more
    </span>
                        )}
                        

                        
                      </div>}
                    </div>
                  </div>
                </div>
                {isUser ? (
                  " "
                ) : (
                  <div className="buttons -ml-1 mt-6 flex flex-row mb-8">
                    <button className="ml-0 px-6 py-3 rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-400 ">
                      Connect
                    </button>
                    <button className="ml-4 px-9 py-3 rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-400  ">
                      Chat
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

			{!loading && (
				<div className=" mt-5 ml-3 mr-3 lg:mx-auto bg-white lg:w-[97.6%] py-6 px-8 rounded-2xl mb-5">
					<div className="ml-2 lg:text-left mt-3 mb-6">
						<div className="flex justify-between">
							<h3 className="text-3xl font-bold text-black ">About</h3>
						</div>

						<div className="mt-6 text-black text-[1.2rem]">
							<p>{user.user.about}</p>
						</div>
					</div>
				</div>
			)}

			{!loading && (
				<div className="mt-5 ml-3 mr-3 lg:mx-auto  lg:w-[97.6%] py-6 px-8 rounded-2xl mb-5 h-[40%]">
					<div className="ml-2 lg:text-left mt-3 mb-6">
						<div className="flex justify-between">
							<h3 className="text-3xl font-bold text-black ">My posts</h3>
						</div>

						<Post />
            <div className="mb-4"></div>
					</div>
				</div>
			)}
		</>
	);
};

export default Profile_Settings;
