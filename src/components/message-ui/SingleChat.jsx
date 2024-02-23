import React, { useState } from "react";

const SingleChat = ({ key, chat, open, setOpen }) => {
  const [selectedChat, setSelectedChat] = useState(0);
  return (
    <div
      onClick={() => {
        setOpen(!open);
        setSelectedChat(key);
      }}
      className={`single-chat-container d-flex gap-2 mt-2 ${
        key === selectedChat && "selected-chat"
      }`}
    >
      <img src={chat?.img} alt="" />
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h1 className="chat-username">{chat?.name}</h1>
          <p className="chat-time">{chat?.time}</p>
        </div>
        <p className="chat-last-message" style={{ marginTop: "6px" }}>
          {chat?.lastMessage}
        </p>
      </div>
    </div>
  );
};

export default SingleChat;
