import React, { useState } from "react";
import { iAdd } from "../../utils/icons/global_icons";

const UploadSidebar = ({ open }) => {
  const [profileTab, setProfileTab] = useState("");
  return (
    <div className="d-flex flex-column justify-content-between align-items-center p-3 h-100 w-100">
      <div>
        <h2 className="mc-sidebar-top-title">Select Wallpapers</h2>
        <div className="upload-sc-btn-container mt-3">
          <button>Select All</button>
          <button>Clear Selection</button>
        </div>

        <div className="mt-4">
          <h2 className="upload-sidebar-btn-title">Choose Type</h2>
          <div className="choose-type-btn-container mt-3">
            <button>Illustration</button>
            <button>AI</button>
            <button>Photography</button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="upload-sidebar-btn-title">Classification</h2>
          <div className="choose-type-btn-container mt-3">
            <button>SFW</button>
            <button>Risky</button>
            <button>NSFW</button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="upload-sidebar-btn-title">Screen Type</h2>
          <div className="screen-type-btn-container mt-3">
            <button>Desktop</button>
            <button>Phones</button>
            <button>Tablets</button>
            <button>Handhelds</button>
            <button>Other</button>
          </div>
        </div>

        <hr className="my-3" style={{ border: "1px solid #5A5A5A" }} />
        <div className="mt-4 w-100">
          <h1 className="upload-sidebar-btn-title text-center">TAGS</h1>
          <div className="upload-sidebar-tags-container mt-3 position-relative ">
            <input
              className="px-2 text-white"
              type="text"
              placeholder="Add tags here..."
            />
            <div
              className="position-absolute cursor-pointer text-white"
              style={{ width: "fit-content", right: "10px", top: "2px" }}
            >
              {iAdd}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="upload-sidebar-btn-title text-center">
            Source & Author
          </h1>
          <div className="upload-sidebar-tags-container mt-3">
            <input
              className="px-2"
              type="text"
              placeholder="Source (Optional)"
            />
            <input
              className="px-2 mt-4"
              type="text"
              placeholder="Author (Optional)"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button className="upload-sidebar-remove-btn d-block mb-4 mx-auto">
          Remove
        </button>
        <button className="upload-sidebar-save-btn d-block mx-auto">
          Publish
        </button>
      </div>
    </div>
  );
};

export default UploadSidebar;
