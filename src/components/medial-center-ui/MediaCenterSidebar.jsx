import React, { useState } from "react";

const MediaCenterSidebar = ({ open }) => {
  const [profileTab, setProfileTab] = useState("");
  return (
    <div className="d-flex flex-column justify-content-between p-3 h-100">
      {open === 0 && (
        <>
          <div>
            <h2 className="mc-sidebar-top-title">Select Wallpapers</h2>
            <div className="mc-sidebar-remove-container text-center mt-5">
              <h1>Remove from list</h1>
              <button className="mt-3">Remove</button>
            </div>
            <div className="hide-profile-container mt-5 mb-2">
              <h1>Hide from profile</h1>
              <div className="mc-tab-container d-flex justify-content-around align-items-center mx-auto mt-3">
                {["Visible", "Hidden"]?.map((t, i) => (
                  <button
                    onClick={() => setProfileTab(t)}
                    className={`text-white ${
                      profileTab === t
                        ? `mc-active-btn ${
                            profileTab === "Visible"
                              ? "mc-btn-bg-visible text-white"
                              : "mc-btn-bg-hide text-white"
                          }`
                        : "mc-dactive-btn"
                    }`}
                    key={i}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {open === 1 && (
        <>
          <div>
            <div className="mc-sidebar-remove-container text-center mt-5">
              <h1>Create New Collection</h1>
              <button className="mt-3">Create</button>
            </div>
            <div className="mc-sidebar-remove-container text-center mt-5">
              <h1>Rename Collection</h1>
              <button className="mt-3 px-3">Select Collection</button>
            </div>

            <hr className="my-3" style={{ border: "1px solid #5A5A5A" }} />
            <div className="hide-profile-container mt-5">
              <h1>Hide from profile</h1>
              <div className="mc-tab-container d-flex justify-content-around align-items-center mx-auto mt-3">
                {["Visible", "Hidden"]?.map((t, i) => (
                  <button
                    onClick={() => setProfileTab(t)}
                    className={`${
                      profileTab === t
                        ? `mc-active-btn ${
                            profileTab === "Visible"
                              ? "mc-btn-bg-visible"
                              : "mc-btn-bg-hide"
                          }`
                        : "mc-dactive-btn"
                    }`}
                    key={i}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="">
        <button className="cm-sidebar-delete-btn d-block mb-4">Delete</button>
        <button className="cm-sidebar-save-btn d-block">Save</button>
      </div>
    </div>
  );
};

export default MediaCenterSidebar;
