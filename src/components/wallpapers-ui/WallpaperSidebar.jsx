import React, { useState } from "react";
import profile from "../../assets/images/profile.gif";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import filter_alt from "../../assets/filter_alt.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import { Link } from "react-router-dom";
import { iAdd, redClose } from "../../utils/icons/global_icons";

const WallpaperSidebar = ({ bgColorCode }) => {
  const [selected, setSelected] = useState(true);
  return (
    <div
      className="w_sideBar fontBak h-100"
      style={{
        minHeight: "802px",
        maxHeight: "830px",
        background: bgColorCode || "rgba(0, 0, 0, 0.20)",
      }}
    >
      <p className="text-center mb-3">Posted by</p>
      <div
        className="d-flex justify-content-center align-items-center mb-4"
        style={{ gap: "38px" }}
      >
        <div className="w-profile-container">
          <img className="" src={profile} alt="Profile Image" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-0">
          <h3 className="w-profile-username">
            krs
            <img className="ms-1" src={Verified} alt="Verified" />
          </h3>
          <Link to="/profile">
            <button className="w-viewProfileBtn">View Profile</button>
          </Link>
        </div>
      </div>
      <hr className="sm_none" style={{ border: "1px solid #393939" }} />

      <div className="d-flex flex-column justify-content-center align-items-center gap-1 mb-3">
        {selected && (
          <>
            <p style={{ color: "#ccc" }}>Dimensions</p>
            <p className="w-dimension">3840 x 2160</p>
          </>
        )}
        <div
          className="d-flex justify-content-center align-items-center gap-2 ps-2"
          style={{ color: "#ccc", fontSize: "12px" }}
        >
          <p>Size Configuration</p>
          {selected ? (
            <img
              onClick={() => setSelected(!selected)}
              src={filter_alt}
              className="me-2 cursor-pointer"
              style={{ width: "20px" }}
              alt="img"
            />
          ) : (
            <div
              onClick={() => setSelected(!selected)}
              className="me-2 cursor-pointer"
            >
              {redClose}
            </div>
          )}
        </div>
      </div>

      {selected && (
        <>
          <div className="mb-3">
            <p className="text-center mb-2" style={{ color: "#ccc" }}>
              Tags
            </p>

            <p
              className="text-center"
              style={{ color: "#0AB745", fontSize: "12px" }}
            >
              SFW
            </p>
            <div className="tag">
              <span>#cod</span>
              <span>#callofduty</span>
              <span>#ghost</span>
              <span> #gaming</span>
              <span> #wallpaper</span>
              <span>#illustration</span>
              <span>#shooter</span>
              <span>#mw2</span>
            </div>
          </div>

          <div className="w_tags_input">
            <input
              className="px-2 text-white w-100"
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

          <div className="mb-3">
            <p className="text-center mb-2" style={{ color: "#ccc" }}>
              Statistics & Information
            </p>
            <div className="info d-flex justify-content-between gap-4">
              <div className="w-statistics-container">
                <p>
                  Views: <span>8947</span>
                </p>
                <p>
                  Category: <span>Gaming</span>
                </p>
              </div>
              <div className="w-statistics-container">
                <p>
                  Favorites: <span>1489</span>
                </p>
                <p>
                  Size: <span>12.2MB</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 ">
            <p className="text-center mb-3" style={{ color: "#ccc" }}>
              Credits
            </p>
            <div className="info w-statistics-container">
              <p>Source:</p>
              <p>Original Author:</p>
            </div>
          </div>

          <div className="text-center mb-4">
            <button className="downLoadBtn">
              Download
              <img src={arrow_down_light} alt="" />
            </button>
          </div>

          <div className="ownerShip d-flex flex-column gap-4">
            <p className="text-center w-ownership-text">
              Ownership of all images belongs to their respective original
              owners & illustrators.
            </p>
            <div className="listBtn d-flex justify-content-center align-items-center gap-3">
              <button className="text-white">Claim Listing</button>
              <button className="text-white">Remove Listing</button>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3">
              <Link to="/" className="w-pt">
                Privacy Policy
              </Link>
              <Link to="/" className="w-pt">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </>
      )}

      {!selected && (
        <div className="" style={{ overflowY: "auto" }}>
          <div className="auto_screen_container">
            <p className="auto_detection">Auto Detection</p>
            <p className="screen_resolution">
              Your screen resolution is 1920 × 1080.
            </p>
          </div>
          {/* <div className="d-flex justify-content-between w-100 gap-2">
            {items?.map((item, index) => (
              <div key={index}>
                <button className="size-title text-center">{item?.section}</button>
                <div className="w-100">
                  {item?.sizes?.map((size, i) => (
                    <button key={i} className="size-btn mt-2">
                      {size?.size}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
          <div
            className="row gy-4 mb-4 w-100"
            style={{ padding: "17px 0px 17px 17px" }}
          >
            <div className="col-4 px-0 d-flex flex-column align-items-center gap-2">
              <p className="text-nowrap size-title text-center">Ultra Wide</p>
              <button className="size-btn">2560 × 1080</button>
              <button className="size-btn">3440 × 1440</button>
              <button className="size-btn">3840 × 1600</button>
              <p className="size-title text-center">4:3</p>
              <button className="size-btn">1280 × 960</button>
              <button className="size-btn">1600 × 1200</button>
              {/* <button className="size-btn">1920 × 1440</button>
              <button className="size-btn">2560 × 1920</button>
              <button className="size-btn">3840 × 2880</button> */}
            </div>
            <div className="col-4 px-0 d-flex flex-column align-items-center gap-2">
              <p className="size-title text-center">16:9</p>
              <button className="size-btn">1280 × 720</button>
              <button className="size-btn">1600 × 900</button>
              <button className="size-btn">1920 × 1080</button>
              <button className="size-btn">2560 × 1440</button>
              <button className="size-btn">3840 × 2160</button>
              <p className="size-title text-center">16:9</p>
              <button className="size-btn">1280 × 1024</button>
              {/* <button className="size-btn">1600 × 1280</button>
              <button className="size-btn">1920 × 1536</button>
              <button className="size-btn">2560 × 2048</button>
              <button className="size-btn">3840 × 3072</button> */}
            </div>
            <div className="col-4 px-0 d-flex flex-column align-items-center gap-2">
              <p className="size-title text-center">16:10</p>
              <button className="size-btn">1280 × 800</button>
              <button className="size-btn">1600 × 1000</button>
              <button className="size-btn">1920 × 1200</button>
              <button className="size-btn">2560 × 1600</button>
              <button className="size-btn">3840 × 2400</button>
            </div>
          </div>
          <hr
            style={{ border: "1px solid #939393", margin: "23px 0 13px 0" }}
          />
          <div className="d-flex flex-column align-items-center gap-4">
            <p className="text-center custom_resolution">Custom Resolution</p>
            <div className="wh-inputs">
              <input type="number" min={1} placeholder="Width" />
              <input type="number" min={1} placeholder="Height" />
            </div>
            <button className="generate-btn mx-auto">Generate</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WallpaperSidebar;
