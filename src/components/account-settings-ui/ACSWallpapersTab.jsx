import React, { useRef, useState } from "react";
import ASCTwoTab from "./ASCTwoTab";
import { iAdd_circle } from "../../utils/icons/global_icons";

const ACSWallpapersTab = () => {
  const [nsfwTab, setNsfwTab] = useState(0);
  const [tags, setTags] = useState([]);
  const tagRef = useRef();

  const handleTag = () => {
    const value = tagRef.current.value;
    if (value && tags.length < 13) {
      setTags([...tags, value]);
      tagRef.current.value = "";
    }
  };
  return (
    <div className="w-100 h-100">
      <ASCTwoTab
        label="NSFW"
        tabs={["Enabled", "Disabled"]}
        setTab={setNsfwTab}
        tab={nsfwTab}
      />

      <div className="blacklist-tag-section mt-5">
        <h1>Blacklist Tags</h1>
        <div className="px-2">
          <input ref={tagRef} className="w-100 h-100" type="text" />
          <div
            onClick={() => handleTag()}
            className="position-absolute bottom-0 end-0 cursor-pointer"
            style={{ width: "fit-content" }}
          >
            {iAdd_circle}
          </div>
        </div>
      </div>

      {tags.length > 12 ? (
        <p className="tag-error-msg text-center mt-3">
          The maximum number of blacklisted tags has been reached. Please change
          or remove one or more in order to add another.
        </p>
      ) : (
        <p className="profile-p text-center mt-3">
          By blacklisting tags, you can exclude them from your search results.
          To add a tag, simply enter a single word and press 'Enter' or click
          the 'Add' button.
        </p>
      )}

      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="wallpaper-tab-textarea mx-auto row p-2">
          {tags?.length === 0 &&
            "At the moment, no tags have been blacklisted."}
          {tags?.map((tag, i) => (
            <h1 className="col-4 mt-2" key={i}>
              {tag}
            </h1>
          ))}
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <button className="profile-save-btn">Save</button>
      </div>
    </div>
  );
};

export default ACSWallpapersTab;
