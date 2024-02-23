import React, { useRef } from "react";
import img1 from "../../assets/images/media-center/img1.png";
import { iUploadUp } from "../../utils/icons/global_icons";

const UploadContentArea = ({ images, setImages }) => {
  const imageRef = useRef();
  return (
    <>
      {images?.length === 0 ? (
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center"
          style={{ gap: "61px" }}
        >
          <h1 className="upload-img-title">Your vault is currently empty</h1>
          <div className="upload-img-btn position-relative">
            <button
              onClick={() => imageRef.current.click()}
              className="upload-img-btn"
            >
              Upload {iUploadUp}
            </button>
            <input
              ref={imageRef}
              onChange={(e) => setImages([...images, ...e.target.files])}
              type="file"
              name="img"
              multiple={true}
              accept=".png, .jpeg, .jpg"
              className="position-absolute top-100 w-100 h-100 d-none"
              style={{
                position: "absolute",
                top: "100%",
                bottom: "100%",
                zIndex: 50,
              }}
            />
          </div>
        </div>
      ) : (
        <div className="w-100 d-flex flex-column justify-content-between gap-4">
          <section className="upload_images_container">
            <img className="upload_img w-100" src={img1} alt="" />
            <img className="upload_img w-100" src={img1} alt="" />
          </section>

          <button className="view-more-btn mx-auto text-center">
            View more
          </button>
        </div>
      )}
    </>
  );
};

export default UploadContentArea;
