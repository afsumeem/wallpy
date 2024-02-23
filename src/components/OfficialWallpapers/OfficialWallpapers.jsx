import React from "react";
import staff from "../../assets/images/home/wimg1.png";
import staff2 from "../../assets/images/home/wimg2.png";
import staff3 from "../../assets/images/home/wimg3.png";
// import staff from "../../assets/staff.png";
// import staff2 from "../../assets/staff2.png";
// import staff3 from "../../assets/staff3.png";
import { Link } from "react-router-dom";
const OfficialWallpapers = () => {
  return (
    <>
      <div className="container all_mb">
        <h2 className="mb-4 home-section-title">Official Wallpapers</h2>
        <div className="row" style={{ padding: "0 10px" }}>
          <div
            className="col-6 ps-0 py-0 ow_pr"
            style={{ height: "fit-content" }}
          >
            <div className="staff">
              <Link to="#">
                <img className="first-img" src={staff} alt="Img" />
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-6 p-0">
            <div className="d-flex flex-column ow_gap">
              <div className="staff">
                <Link to="#">
                  <img className="w-100 second-img" src={staff2} alt="Img" />
                </Link>
              </div>
              <div className="staff d-none d-md-block">
                <Link to="#">
                  <img className="w-100 third-img" src={staff3} alt="Img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="staff d-md-none mt-3">
          <Link to="#">
            <img className="w-100 third-img" src={staff3} alt="Img" />
          </Link>
        </div>
        <button className="moreBtn mt-4">More Official Wallpapers</button>
      </div>
    </>
  );
};

export default OfficialWallpapers;
