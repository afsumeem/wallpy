import React from "react";

const ACSCredentialsTab = () => {
  return (
    <div className="w-100 h-100">
      <div className="credentials-tab-input-section d-flex flex-column gap-3 justify-content-center mt-5">
        <h1>E-mail</h1>
        <input className="mx-auto" type="email" placeholder="krs@wps.com" />
      </div>
      <div className="credentials-tab-input-section d-flex flex-column gap-3 justify-content-center mt-5">
        <h1>New Password</h1>
        <input className="mx-auto" type="text" placeholder="New Password" />
      </div>
      <div className="credentials-tab-input-section d-flex flex-column gap-3 justify-content-center mt-5">
        <h1>Current Password</h1>
        <input className="mx-auto" type="text" placeholder="Current Password" />
      </div>

      <p className="profile-p text-center mt-5">
        Update your existing password. Changing your password will result in an
        automatic logout from all other active sessions.
      </p>

      <div className="credentials-tab-textarea-section d-flex flex-column gap-3 justify-content-center mt-5">
        <h1>Warnings / Ban Activity</h1>
        <textarea className="mx-auto" type="text" placeholder="No records" />
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <button className="profile-save-btn">Save</button>
      </div>
    </div>
  );
};
export default ACSCredentialsTab;
