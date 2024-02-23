import React from "react";
import img1 from "../../assets/images/media-center/img1.png";
import { iEye } from "../../utils/icons/global_icons";

const MediaCenterContentArea = ({ open }) => {
  return (
    <div className="w-100 d-flex flex-column justify-content-between gap-4">
      {open === 0 && (
        <section className="row">
          <div className="col-4 col-lg-3 mc-card px-2 ps-md-2 mb-3">
            <img
              className="w-100 h-100"
              src={img1}
              alt=""
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
          <div className="col-4 col-lg-3 mc-card px-2 ps-md-2 mb-3">
            <img
              className="w-100 h-100"
              src={img1}
              alt=""
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
          <div className="col-4 col-lg-3 mc-card px-2 ps-md-2 mb-3">
            <img
              className="w-100 h-100"
              src={img1}
              alt=""
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </section>
      )}
      {open === 1 && (
        <section className="row px-2 px-md-0">
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center mb-3 px-3 gap-2">
            <div className="position-relative">
              <div className="mc-card row">
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
              </div>
              <button
                className="position-absolute"
                style={{ bottom: "5px", right: "0", zIndex: 50 }}
              >
                {iEye}
              </button>
            </div>
            <button className="collection-card-btn mx-auto">
              Call of Duty
            </button>
          </div>
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center mb-3 px-3 gap-2">
            <div className="position-relative">
              <div className="mc-card row">
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
              </div>
              <button
                className="position-absolute"
                style={{ bottom: "5px", right: "0", zIndex: 50 }}
              >
                {iEye}
              </button>
            </div>
            <button className="collection-card-btn mx-auto">
              Call of Duty
            </button>
          </div>
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center mb-3 px-3 gap-2">
            <div className="position-relative">
              <div className="mc-card row">
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
                <div className="col-6 p-0">
                  <img className="w-100 h-100" src={img1} alt="" />
                </div>
              </div>
              <button
                className="position-absolute"
                style={{ bottom: "5px", right: "0", zIndex: 50 }}
              >
                {iEye}
              </button>
            </div>
            <button className="collection-card-btn mx-auto">
              Call of Duty
            </button>
          </div>
        </section>
      )}

      <button className="view-more-btn mx-auto text-center">View more</button>
    </div>
  );
};

export default MediaCenterContentArea;
