import React from "react";
import "./Featured.css";
import img1 from "../../assets/feature.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import { Link } from "react-router-dom";

import fm1 from "../../assets/images/home/fm1.png";
import fm2 from "../../assets/images/home/fm2.png";
import fm3 from "../../assets/images/home/fm3.png";

const featureData = [
  {
    src: img1,
    alt: "image 1",
  },
  {
    src: img2,
    alt: "image 2",
  },
  {
    src: img3,
    alt: "image 3",
  },
];

const Featured = () => {
  return (
    <div className="container">
      <h2 className="home-section-title">Featured Wallpapers</h2>
      <div className="featured_images_container">
        {featureData?.map((image, index) => (
          <Link to="/" className="w-100" key={index}>
            <img
              className="featuredImage w-100"
              src={image.src}
              alt={image.alt}
            />
          </Link>
        ))}
      </div>
      <div className="fm_images">
        <Link to="/" className="w-100">
          <img className="fm_img_first w-100" src={fm1} alt="img" />
        </Link>
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "10px", gap: "8.96px" }}
        >
          <Link to="/" className="w-100">
            <img className="fm_img w-100" src={fm2} alt="img" />
          </Link>
          <Link to="/" className="w-100">
            <img className="fm_img w-100" src={fm3} alt="img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
