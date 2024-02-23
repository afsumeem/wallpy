import React, { useState } from "react";
import ASCTwoTab from "./ASCTwoTab";

const ACSPrivacyTab = () => {
  const [profileVTab, setProfileVTab] = useState(0);
  const [messagingTab, setMessagingTab] = useState(0);
  return (
    <div className="w-100 h-100">
      <ASCTwoTab
        label="Profile Visibility"
        tabs={["Visible", "Hidden"]}
        setTab={setProfileVTab}
        tab={profileVTab}
      />
      {profileVTab === 1 && (
        <p
          className="profile-p text-center mt-3 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          All uploads will remain public. However, your favorites, collections,
          and other profile information will be hidden from the public.
        </p>
      )}
      <ASCTwoTab
        label="Messaging"
        tabs={["Visible", "Hidden"]}
        setTab={setMessagingTab}
        tab={messagingTab}
      />
      {messagingTab === 1 && (
        <p
          className="profile-p text-center mt-3 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          You will be unable to receive messages from regular users, and the
          ability to send messages will also be disabled. However,
          administrators and moderators will retain the capability to contact
          you through our messaging system.
        </p>
      )}

      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <button className="profile-save-btn">Save</button>
      </div>

      <hr className="my-5" style={{ border: "1px solid #5A5A5A" }} />
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <h1 className="delete-account-title">Delete Account</h1>
        <button className="profile-delete-btn">Delete</button>
      </div>
      <p className="profile-p text-center mt-5">
        Please be aware that account deletion is a permanent action, and it will
        result in the complete erasure of all your data from our servers.
      </p>
    </div>
  );
};

export default ACSPrivacyTab;
