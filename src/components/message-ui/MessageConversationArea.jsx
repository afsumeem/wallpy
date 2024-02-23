import React from "react";
import ConversationsField from "./ConversationsField";
import { iSend } from "../../utils/icons/global_icons";

const MessageConversationArea = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "d-block" : "d-none"
      } d-lg-block message-conversation-area flex-grow d-flex flex-column justify-content-between gap-3 w-100 p-2 p-md-4`}
      style={{ maxHeight: "620px" }}
    >
      <ConversationsField />
      <div className="send-message-box d-flex justify-content-between align-items-center gap-3">
        <div className="flex-grow w-100 position-relative">
          <input
            className="px-4 w-100"
            type="text"
            placeholder="Write a message..."
          />
          <div
            className="position-absolute d-block d-lg-none"
            style={{ right: "20px", top: "10px" }}
          >
            {iSend}
          </div>
        </div>
        <button className="d-none d-lg-block">SEND</button>
      </div>
    </div>
  );
};

export default MessageConversationArea;
