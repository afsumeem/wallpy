import React, { useContext, useState } from "react";
import "./Wallpaper.css";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import left_light from "../../assets/left_light.png";
import filter_alt from "../../assets/filter_alt.png";
import photo_library from "../../assets/photo_library.png";
import likedgray from "../../assets/likedgray.png";
import wallpaper from "../../assets/wallpaper.png";
import wallpaper1 from "../../assets/wallpaper1.png";
import wallpaper2 from "../../assets/wallpaper2.png";

import limg1 from "../../assets/images/wallpaper/limg1.png";
import limg2 from "../../assets/images/wallpaper/limg2.png";
import limg3 from "../../assets/images/wallpaper/limg3.png";

import Moon from "../../assets/Moon.png";
import downArrow from "../../assets/downArrow.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import library_add from "../../assets/library_add.png";
import { Link } from "react-router-dom";
import WallpaperSidebar from "../../components/wallpapers-ui/WallpaperSidebar";
import img from "../../assets/icons/mixer.png";
import Drawer from "../../components/common-ui/drawers/Drawer";
import {
  add_box,
  iDownload,
  iMagnifierG,
  iSearch,
  iShare,
} from "../../utils/icons/global_icons";
import download from "../../assets/icons/download.svg";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";
import { AuthContext } from "../../context/AuthContext";
const items = [
  { id: 1, name: "Call of Duty" },
  { id: 2, name: "World of Warcraft" },
  { id: 3, name: "League of Legends" },
  { id: 4, name: "Anime" },
  { id: 5, name: "Landscapes" },
];

const WallPaper = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [openD, setOpenD] = useState(false);
  return (
    <div className="wallpaper_bg">
      <HeaderDrawer />
      <br />
      <div
        className="container d-flex align-items-center justify-content-between"
        style={{ marginBottom: "18px" }}
      >
        <div className="d-flex align-items-center" style={{ gap: "29px" }}>
          <Link className="brand" to="/">
            WPS
          </Link>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="sm_plus_none text-white"
          >
            <circle
              cx="9.16667"
              cy="9.16659"
              r="5.83333"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M16.6667 16.6667L14.1667 14.1667"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <div className="position-relative wallPaper_search_container">
            <div
              style={{ top: "5px", left: "10px" }}
              className="position-absolute"
            >
              {iMagnifierG}
            </div>
            <input
              className="w-100 wallPaper_search"
              style={{ paddingLeft: "35px" }}
              type="search"
              placeholder="Find more wallpapers..."
            />
          </div>
        </div>
        <div className="header_profile_container d-none d-md-inline-flex">
          <img className="logo-img" src={profile} alt="" />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="navbar-toggler d-md-none"
          type="button"
        >
          <span>
            <i className="fa fa-bars"></i>
          </span>
        </button>
      </div>
      <div className="container wallPaper_mt">
        <div className="custom_Container">
          <div className="d-flex justify-content-center align-items-start gap-3 all_mb">
            <div className="d-none d-md-block">
              <WallpaperSidebar />
            </div>
            <div className="wallpaper fontBak d-flex justify-content-end align-items-start pt-2 pe-2 position-relative">
              <div
                className="btnPosition d-flex justify-content-end align-items-center gap-3 p-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.60)",
                  width: "fit-content",
                }}
              >
                {/* <img
                  onClick={() => setOpen(!openD)}
                  className="d-md-none"
                  style={{ width: "57px", height: "40px" }}
                  src={img}
                  alt=""
                /> */}
                <div className="addLibrary" style={{ borderRadius: "5px" }}>
                  <button>
                    <span>
                      <img src={library_add} alt="Add Library" />
                    </span>
                  </button>
                  <div className="libraryOption">
                    <div className="search-collections justify-content-between d-flex align-items-center gap-2">
                      <input
                        className="flex-grow w-100 px-1"
                        type="search"
                        placeholder="Search Collections"
                      />
                      <button>{add_box}</button>
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      {items?.map((item, index) => (
                        <button
                          key={index}
                          className="collection-list border-bottom w-100"
                        >
                          <img
                            className="img-fluid"
                            src={photo_library}
                            alt="img"
                          />
                          {item?.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="like">
                  <span>
                    <img src={likedgray} alt="Liked" />
                  </span>
                </button>
              </div>
              <div
                className="w-100 position-absolute d-flex justify-content-between align-items-center"
                style={{ bottom: "10px" }}
              >
                <div className="home-bb" style={{ marginLeft: "20px" }}>
                  <img width={24} src={download} alt="" />
                </div>
                <div className="home-bb">{iShare}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container custom_Container">
        <h3 className="all_mb">You may also like</h3>
        <div className="w_also_like_container mb-4">
          <Link to="/">
            <img className="w-image w-100" src={limg1} alt="img" />
          </Link>
          <Link to="/">
            <img className="w-image w-100" src={limg2} alt="img" />
          </Link>
          <Link to="/">
            <img className="w-image w-100" src={limg3} alt="img" />
          </Link>
        </div>
        <span className="d-block text-center">
          <button className="viewProfile px-3" style={{ fontSize: "12px" }}>
            View More
          </button>
        </span>
      </div>

      <Drawer
        open={openD}
        setOpen={setOpenD}
        bgColorCode="#121212"
        {...{
          scroll: false,
          backdrop: false,
        }}
      >
        <WallpaperSidebar bgColorCode="#121212" />
      </Drawer>
      <Footer />
    </div>
  );
};

export default WallPaper;
