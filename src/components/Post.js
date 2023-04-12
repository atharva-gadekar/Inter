import React, { useEffect, useState } from "react";
import postimg from "../assets/post.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import {
  faHome,
  faUserFriends,
  faBriefcase,
  faEnvelope,
  faBell,
  faBuilding,
  faFire,
  faFireAlt,
  faHeart,
  faCommentAlt,
  faCommenting,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import moment from "moment";

export default function Post() {
  const [blogs, setBlogs] = useState([]);
  const [likes, setLikes] = useState({});


  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (token) {
          axios({
            method: "get",
            url: `https://inter-api-8q0x.onrender.com/blog`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            setBlogs(response.data.blogs);
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const getReadingTime = (content) => {
    const wordsPerMinute = 250; // Average reading speed
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} `;
  };

  const handleLike = async (id) => {
    try {
      const likeData = { likes: { [id]: true } };
      const response = await axios.patch(`https://inter-api-8q0x.onrender.com/blog/${id}/like`, likeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLikes((prevState) => ({ ...prevState, [id]: response.data.likes[id] }));
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="p-12 w-[92%] scale-90 rounded-2xl bg-white mr-auto ml-auto lg:mx-8 shadow-md pb-2 "
        >
          <img
            src={blog.bannerUrl}
            className=" mr-auto ml-auto outline outline-white -outline-offset-4"
          ></img>

          <h1 className="text-center font-bold pt-4 text-xl text-slate-800">
            {blog.title}
          </h1>

          <div className="subheading flex justify-center items-center space-x-5 text-xs pt-2 mb-4 text-slate-500">
            <p>{moment(blog.date).format("MMMM DD, YYYY")}</p>
            <div className="flex justify-center items-center space-x-2">
              <p className="text-lg text-pink-900">-</p>
              <p>{getReadingTime(blog.content)} min read</p>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <FontAwesomeIcon icon={faCommenting} className="text-pink-700" />
              <p>{blog.comments.length}</p>
            </div>

            <div className="flex justify-center items-center space-x-2">
      <FontAwesomeIcon icon={faHeart} className="text-pink-700" />
      <p>{likes[blog._id] || blog.likes && Object.keys(blog.likes).length}</p>
    </div>
          </div>

          <p className="text-left mr-auto ml-auto text-slate-500 text-base">
            {blog.brief}
          </p>

          <div className="footer mr-auto ml-auto flex justify-between items-center text-sm text-slate-800 mt-8">
            <div className="flex justify-center items-left space-x-3">
              {blog.tags.map((tag, index) => (
                <div
                  key={index}
                  className="tag bg-white shadow-md p-2 flex space-x-0"
                >
                  <p className="text-yellow-600">#</p>
                  {tag}
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center space-x-3">
              <img src={profile} alt="" className="rounded-full h-8 w-8"></img>
              <h3>{blog.owner.name}</h3>
            </div>
          </div>
          <div className=" mr-auto ml-auto text-center mt-8 ">
            <button className="bg-slate-700 text-white p-2 pl-4 pr-4 text-sm font-medium">
              <Link to="/BlogPage">Continue Reading</Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
