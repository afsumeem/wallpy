import React from "react";
import "./StaffPicks.css";
import { Link } from "react-router-dom";

import sp1 from "../../assets/images/home/spImg1.png";
import sp2 from "../../assets/images/home/spImg2.png";
import sp3 from "../../assets/images/home/spImg3.png";

const StaffPicks = () => {
  return (
    <>
      <div className="container all_mb">
        <h2 className="my-4 home-section-title">
          The <span style={{ color: "#FDF516" }}>WPS</span> Staff Picks
        </h2>
        <div className="staff_picks_container">
          <Link to="#">
            <img
              className="sp_first-img"
              style={{ objectFit: "cover" }}
              src={sp1}
              alt="Img"
            />
          </Link>
          <div className="w-100">
            <Link to="#">
              <img
                className="img-fluid w-100 sp_second-img"
                style={{ objectFit: "cover" }}
                src={sp2}
                alt="Img"
              />
            </Link>
            <Link to="#">
              <img
                className="w-100 sp_third_img"
                style={{ objectFit: "cover" }}
                src={sp3}
                alt="Img"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPicks;
