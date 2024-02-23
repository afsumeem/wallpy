import React from "react";
import img from "../../assets/images/message/chatUser.png";
import SingleChat from "./SingleChat";

const chats = [
  {
    id: 1,
    name: "XanderPR",
    lastMessage: "Can you upload more Apex....",
    time: "2:01 AM",
    img: img,
  },
  {
    id: 2,
    name: "Ostia",
    lastMessage: "Yeah, but Final Fantasy is bett...",
    time: "8:41 PM",
    img: img,
  },
  {
    id: 3,
    name: "Ostia",
    lastMessage: "Yoooo...",
    time: "8:41 PM",
    img: img,
  },
];

const SidebarChats = ({ open, setOpen }) => {
  return (
    <div className="message-chats-container p-2">
      {chats?.map((chat, index) => (
        <SingleChat key={index} chat={chat} open={open} setOpen={setOpen} />
      ))}
    </div>
  );
};

export default SidebarChats;
