import React, { useState, useEffect, useContext, useRef } from "react";
import {
  faSearch,
  faPenToSquare,
  faCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/Rectangle 47.png";
import Conversation from "./Conversation";

import axios from "axios";
import { set } from "react-hook-form";
import Message from "./Message";
import { io } from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import { message } from "antd";
import MessageList from "./MessageList";
import Friend from "./Friend";
import { ChatContext } from "../utils/context/ChatContext";

export default function LeftChat(friends) {

  const {conversations,setConversations ,currentChat,setCurrentChat, showMessageList, setShowMessageList} = useContext(ChatContext);
  
  const [messages, setMessages] = useState([]);
  // const [socket, setSocket] =useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [input, setInput] = useState("");
  const socket = useRef(io("ws://localhost:4001", {
  
  }));
  const scrollRef = useRef();
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
		url: "",});

    

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (token && currentChat) {
          const receiverId=currentChat.members.find(m=> m!==userId);
          axios({
						method: "get",
						url: `https://inter-api-8q0x.onrender.com/user/${receiverId}`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}).then((response) => {
						setUser(response.data);
           
					});

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, [currentChat]);;

  // Vue.use(new VueSocketIO({
  //   debug: true,
  //   connection: socket('http://localhost:8900'),
  //   vuex: {
  //   store,
  //   actionPrefix: 'SOCKET_',
  //   mutationPrefix: 'SOCKET_'
  //   },
  //   extraHeaders: {
  //   'Access-Control-Allow-Credentials':true
  //   },
  //   allowEIO3:true
  //   }))
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  
    if (socket.current) {
      socket.current.on("getMessage", (data) =>{
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    socket.current.on("getUsers", (users) => {
    });
  }, [userId]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        if (token) {
          const userId = localStorage.getItem("userId");
          const res = await axios.get(
            `https://inter-api-8q0x.onrender.com/conversations/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setConversations(res.data);
          if (!res.ok) {
            throw new Error("Error fetching user details");
          }
          const data = await res.json();
        }
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userId]);
  
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `https://inter-api-8q0x.onrender.com/messages/${currentChat?._id}`
        );
        setMessages(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter" || e.key === "Return") {
      handleSubmit();
    }
  };


 

    // Add an event listener to toggle the message list component
    function handleFapentosquareClick() {
      setShowMessageList(!showMessageList);
    }

  
  

  const handleSubmit = async (e) => {
    if (input.trim() !== "") {
      e?.preventDefault();

      const message = {
        sender: userId,
        text: input,
        conversationId: currentChat._id,
      };

      const receiverId = currentChat.members.find((m) => m !== userId);
      
      socket.current.emit("sendMessage", {
        senderId: userId,
        recieverId:receiverId,
        text: input,
      });

      try {
        const res = await axios.post(
          "https://inter-api-8q0x.onrender.com/messages",
          message
        );
        setMessages([...messages, res.data.savedMessage]);
        setInput("");
        console.log("This is the message sent by the user : ", res.data.savedMessage)
        // setMessages([...messages, res.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };
  // const lastMessage = messages.length > 0 ? messages[messages.length - 1].text : null;
  const lasttime = messages.length > 0 ? messages[messages.length - 1].createdAt : null;

  // useEffect(()=>{})
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const [selectedFriendId, setSelectedFriendId] = useState(null); // store the selected friend ID in state

  const handleClickFriend = (id) => {
    setSelectedFriendId(id); // set the selected friend ID to state
  };



  return (
    <div className="flex mb-6">
      <div className="bg-white rounded-l-3xl h-[42rem] w-[40%] border-b-white border-b-2">
        <div className=" flex justify-between items-center sticky">
          <h1 className="px-8 font-bold py-8 text-xl">Messaging</h1>
          <button onClick={handleFapentosquareClick}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            className="text-slate-500 bg-transparent cursor-pointer pr-8 stroke-0"
          />
          </button>
          
        </div>
        {showMessageList ? (<><MessageList /> </>) : (<> <div>
          
          <div className="flex items-center justify-center ">
          
          {/* <label className="relative bg-[#f5f5f5] rounded-2xl py-1 px-2  leading-tight ">
            <input
              className="bg-[#f5f5f5] rounded-2xl py-2 px-4  leading-tight focus:outline-none text-sm text-slate-500 focus:bg-gray-100"
              type="text"
              placeholder="Search Messaging"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="text-slate-500 bg-transparent cursor-pointer h-4 w-4 pr-4"
            />
          </label> */}
        </div>
        {/* <div className="mt-2"></div> */}
        <div className="parent h-[34rem] overflow-y-scroll ">
          {conversations.map((c) => (
            <div onClick={() => setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={userId}  time={lasttime} />
            </div>
          ))}
          </div>
        </div></>)}
       
      </div>
      {/* right element */}
      <div className="bg-white rounded-r-3xl border-l w-full  h-[42rem] overflow-y-scroll ">
       
      {currentChat? (
          <>
            <div className="heading pt-4 sticky top-0 bg-white">
              <div className=" items-center pt-3 space-x-4 flex pb-3">
                <div>
                  <img
                  src={currentChat ? user.url : friends[selectedFriendId].url}
                    className="rounded-full h-14 w-14 ml-8"
                  ></img>
                </div>
                <div className="flex-col space-y-1 ">
                  <div className="flex flex-row space-x-3 items-center mr-4">
                    <h1 className=" font-medium ">  {currentChat ? user.user.name : friends[selectedFriendId].name}</h1>
                    
                  
                    {/* checks last time online */}
                    {/* <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      className="text-slate-500 h-1 w-1 bg-transparent cursor-pointer"
                    />{" "}
                    <p className="text-xs font-normal text-slate-500  mr-4">
                      55 min ago
                    </p>
                     */}
                    
                    
                    
                  </div>
                  <p className="text-sm text-slate-600 w-64">
                  {currentChat ? user.user.title : friends[selectedFriendId].title}
                  </p>
                </div>
              </div>
              <hr className="mt-4"></hr>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* message */}
        {/* <div className="chatting mt-4 mb-4">
        <p className="text-center text-sm text-slate-500">Today</p>
      </div> */}
        <div className="w-full px-7 flex flex-col justify-between">
          {currentChat ? (
            <>
              <div className="flex flex-col mt-5">
                {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message message={m} own={m.sender === userId} userid={userId} receiverid={currentChat.members.find((m) => m !== userId)} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <span className="mb-6 text-gray-400 text-3xl text-center mt-[30%] ">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
        {currentChat ? (
          <>
            {" "}
            <div className="bottom-0 sticky bg-white rounded-b-3xl">
              <hr className="" />
              <label
                htmlFor=""
                className="relative text-slate-400 py-5 px-3 pl-4 w-[80%] mb-6 bg-white"
              >
                <input
                  type="text"
                  placeholder="Write your message here..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeypress}
                  value={input}
                  className="ChatMessageInput text-slate-400 !outline-none bg-transparent pt-5 px-3 mt-3 pl-4 mr-4 mb-6 w-[80%] bg-white"
                />
                <button>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="lg"
                    onClick={handleSubmit}
                    className="text-slate-500 bg-transparent cursor-pointer h-6 w-6 "
                  />
                </button>
              </label>
            </div>
          </>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
}
