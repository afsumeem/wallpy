import React, { useState } from "react";
import "./Trending.css";

import fram1 from "../../assets/search/Frame1.png";
import fram2 from "../../assets/search/Frame2.png";
import fram3 from "../../assets/search/Frame3.png";
import fram4 from "../../assets/search/Frame4.png";
import fram5 from "../../assets/search/Frame5.png";
import fram6 from "../../assets/search/Frame6.png";
import fram7 from "../../assets/search/Frame7.png";
import fram8 from "../../assets/search/Frame8.png";
import fram9 from "../../assets/search/Frame9.png";
import fram10 from "../../assets/search/Frame10.png";
import fram11 from "../../assets/search/Frame11.png";
import fram12 from "../../assets/search/Frame12.png";
import { Link } from "react-router-dom";
const images = [
  fram1,
  fram2,
  fram3,
  fram4,
  fram5,
  fram6,
  fram7,
  fram8,
  fram9,
  fram10,
  fram11,
  fram12,
];

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "Illustration" },
  { id: 3, name: "AI" },
  { id: 4, name: "Photography" },
];
const Trending = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [mainTab, setMainTab] = useState(1);
  return (
    <>
      <div className="container">
        <div className="trending all_mb">
          <div className="trendingHeader d-flex justify-content-start align-items-center">
            <div className="allBtn">
              <button
                onClick={() => setMainTab(1)}
                className={mainTab === 1 && "allBtnActive"}
              >
                Trending
              </button>
              <button
                onClick={() => setMainTab(2)}
                className={mainTab === 2 && "allBtnActive"}
              >
                New
              </button>
            </div>
            <h1 className="wallpaper-title d-md-none">Wallpapers</h1>
            <div className="allBtn d-flex justify-content-between align-items-center gap-2 d-none d-md-block">
              {tabs?.map((t, i) => (
                <button
                  onClick={() => setSelectedTab(t.id)}
                  className={`${
                    selectedTab === t.id ? "allBtnActive" : "acs-dactive-btn"
                  }`}
                  key={i}
                >
                  {t?.name}
                </button>
              ))}
            </div>
          </div>
          <div className="trending_images_container">
            {images.map((image, index) => (
              <Link to="wallpaper">
                <img
                  key={index}
                  className="img-fluid w-100"
                  src={image}
                  alt="image"
                />
              </Link>
            ))}
          </div>
          <button className="moreBtn">More Wallpapers</button>
        </div>
      </div>
    </>
  );
};

export default Trending;
