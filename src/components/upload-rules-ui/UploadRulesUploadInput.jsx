import React from "react";
import { upload } from "../../utils/icons/global_icons";

const UploadRulesUploadInput = ({ setImages, images }) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-relative p-3 rounded UploadRulesUploadInput"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
    >
      <span>{upload}</span>
      <h1 className="drag-drop-file">Drag and drop files here</h1>
      <h1 className="drag-drop-file">or</h1>
      <span className="select-files">Select Files</span>
      <input
        onChange={(e) => setImages([...images, e.target.files[0]])}
        className="cursor-pointer position-absolute to-100 h-100 w-100 opacity-0"
        type="file"
        accept=".png, .jpeg, .jpg"
      />
    </div>
  );
};

export default UploadRulesUploadInput;
