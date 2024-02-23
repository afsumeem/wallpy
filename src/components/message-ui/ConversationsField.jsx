import React from "react";
import SingleMessage from "./SingleMessage";

const ConversationsField = () => {
  return (
    <div
      className="flex-grow py-2 d-flex flex-column justify-content-end"
      style={{ overflowY: "auto", height: "500px" }}
    >
      <SingleMessage />
      <br />
      <SingleMessage />
    </div>
  );
};

export default ConversationsField;
