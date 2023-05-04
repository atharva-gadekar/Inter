import React, { useContext, useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import post from "../assets/post.png"
import post from "../assets/post.png";
import blank from "../assets/blank_profile.jpeg";
import profile from "../assets/profile.png";
import axios from "axios";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbarhome from "./Navbarhome";
import { Link, useParams } from "react-router-dom";
import { message } from "antd";
import ArticleLoader from "./Skeleton_Blog";
import moment from "moment";
import { UserContext } from "../utils/context/UserContext";

export default function Blog() {
  const { user, setUser, token } = useContext(UserContext);

  const userId = localStorage.getItem("userId");
  let blogID = useParams().id;
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // console.log(`Blog ID : ${blogID}`);
        axios({
          method: "get",
          url: `https://inter-api-8q0x.onrender.com/blog/${blogID}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          setLoading(false);
          setBlog(response.data);
          setComments(response.data.blog.comments);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, []);

  useEffect(() => {
    const getUser = async (id) => {
      try {
        // console.log(`Owner ID : ${id}`);
        axios({
          method: "get",
          url: `https://inter-api-8q0x.onrender.com/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          setUser(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (blog.blog) getUser(blog.blog.owner);
  }, [blog]);

  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = () => {
    copyTextToClipboard(window.location.href)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);

        message.success("Blog Url copied to clipboard");
      })
      .catch((err) => {
        message.error("Some Error Occured");
        console.log(err);
      });
  };

  const postComment = async () => {
    try {
      const response = await axios.post(
        `https://inter-api-8q0x.onrender.com/blog/${blogID}/comment`,
        {
          content: newComment,
          author: userId,
          blogID: blogID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.comment);

      setComments([...comments, response.data.comment]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbarhome />
      {loading && <ArticleLoader />}
      {blog.blog && (
        <div className=" lg:w-[70%] mr-auto ml-auto mt-12">
          <img
            src={blog.url}
            className=" ml-auto mr-auto w-[95%] max-h-96 object-contain"
          ></img>
          <div className="flex items-center space-x-4 mt-4 lg:mt-12 lg:mb-6 mb-4 px-24">
            {user.url && (
              <img src={user.url} alt="" className="h-8 w-8 rounded-full" />
            )}
            <p className="text-xs lg:text-sm text-slate-600">
              {user.user && (
                <Link to={`/user/${user.user._id}`}>{user.user.name}</Link>
              )}
            </p>
          </div>
          <div className="lg:flex space-x-12 lg:place-items-start ">
            <div className="flex lg:flex-col lg:space-y-3 pb-4 lg:pt-2 lg:pb-2 justify-center">
              <FontAwesomeIcon
                icon={faShareNodes}
                className="text-4xl font-thin"
                onClick={handleCopyClick}
              />
            </div>
            <div className="justify-center ml-auto mr-auto">
              <h2 className="font-extrabold text-2xl lg:text-5xl text-slate-800 lg:leading-[1.25] mr-12 lg:mr-auto">
                {blog.blog.title}
              </h2>
              <p className="text-slate-600 mt-4 mr-12 lg:mr-auto mb-10">
                {blog.blog.brief}
              </p>

              <div
                className="content mb-10"
                dangerouslySetInnerHTML={{ __html: blog.blog.content }}
              ></div>

              {/* comment section */}

              <hr className="w-[100%]"></hr>
              <div className="flex p-1 pt-5 space-x-12 mb-20">
                <img
                  src={user.user.url}
                  alt=""
                  className="rounded-full h-8 w-8"
                />
                <div className="flex-wrap ">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                    className="text-slate-400 text-sm !outline-none bg-transparent w-[200%]"
                  />
                  <div className="flex mt-10 ">
                    <button
                      className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md font-medium"
                      onClick={postComment}
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>

              <hr className=" lg:mr-auto"></hr>

              {comments.length !== 0 &&
                comments.map((comment) => (
                  <div
                    key={comment.blogID}
                    className="flex p-1  pt-5 space-x-12 mr-12 lg:mr-auto"
                  >
                    <img
                      src={comment.author.url}
                      alt=""
                      className="rounded-full h-8 w-8"
                    />
                    <div>
                      <h1 className="text-slate-800 font-bold text-sm">
                        {comment.author.name}
                      </h1>
                      <p className="text-slate-400 text-xs -mt-0 mb-6">
                        {moment(comment.createdAt).fromNow()}
                      </p>
                      <p className="text-slate-400 text-sm mb-14">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
