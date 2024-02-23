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
import likedgray from "../../assets/likedGray.svg";
import favoriteIcon from "../../assets/liked.png";
import wallpaper from "../../assets/wallpaper.png";
import wallpaper1 from "../../assets/wallpaper1.png";
import wallpaper2 from "../../assets/wallpaper2.png";
import link from "../../assets/link.png";
import fb from "../../assets/fb.png";
import whatsapp from "../../assets/whatsapp.png";
import discord from "../../assets/discord.png";
import email from "../../assets/email.png";
import limg1 from "../../assets/images/wallpaper/limg1.png";
import limg2 from "../../assets/images/wallpaper/limg2.png";
import limg3 from "../../assets/images/wallpaper/limg3.png";

import Moon from "../../assets/Moon.png";
import downArrow from "../../assets/downArrow.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import library_add_check from "../../assets/library_add_check.svg";
import library_add from "../../assets/library_add.svg";
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
import { Offcanvas } from "react-bootstrap";
import download from "../../assets/icons/download.svg";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";
import { AuthContext } from "../../context/AuthContext";
import { iClose } from "../../utils/icons/global_icons";

const items = [
  { id: 1, name: "Call of Duty" },
  { id: 2, name: "World of Warcraft" },
  { id: 3, name: "League of Legends" },
  { id: 4, name: "Anime" },
  { id: 5, name: "Landscapes" },
];

const WallPaper = () => {
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [showShareWallpaper, setShowShareWallpaper] = useState(false);
  const [downloadIcon, setDownloadIcon] = useState(true);
  const [listCheck, setListCheck] = useState(true);
  const [toggleLike, setToggleLike] = useState(true);
  const [toggleInput, setToggleInput] = useState(true);

  //
  // const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);
  const [bars, setBars] = useState(true);
  const [logo, setLogo] = useState(false);

  const [searchBtn, setSearchBtn] = useState(true);

  const handleLike = () => {
    setToggleLike(!toggleLike);
  };

  const handleListCheck = () => {
    setListCheck(false);
  };

  const handleOpenShare = () => {
    setShowShareWallpaper(true);
    setDownloadIcon(false);
  };

  const handleCloseShare = () => {
    setShowShareWallpaper(false);
    setDownloadIcon(true);
  };

  // new collection
  const handleToggleInput = () => {
    setToggleInput(!toggleInput);
  };

  const handlenavbar_search_btn = () => {
    setshow(true);
    setSearchBtn(false);
    setBars(false);
    setLogo(true);
  };
  const handleCloseIcon = () => {
    setshow(false);
    setSearchBtn(true);
    setBars(true);
    setLogo(false);
  };
  return (
    <div className="wallpaper_bg">
      <HeaderDrawer />
      <br />
      <div
        className="container d-flex align-items-center justify-content-between"
        style={{ marginBottom: "18px" }}
      >
        <div className="d-flex align-items-center ">
          <Link className="brand" to="/">
            WPS
          </Link>

          {/* <svg
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
          </svg> */}
          <div className="position-relative wallPaper_search_container">
            {/* <div
              style={{ top: "5px", left: "10px" }}
              className="position-absolute"
            >
              {iMagnifierG}
            </div> */}
            {searchBtn && (
              <button
                style={{ top: "5px", left: "10px" }}
                className=" text-white navbar-search-btn position-absolute"
                onClick={handlenavbar_search_btn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx="9.16667"
                    cy="9.16668"
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
              </button>
            )}

            <input
              className=" wallPaper_search"
              style={{
                paddingLeft: "35px",
                marginLeft: "10px",
                width: "348px",
              }}
              type="search"
              placeholder="Find more wallpapers..."
            />
          </div>

          {show && (
            <>
              <input
                style={{ marginLeft: "10px" }}
                className="w-100 SmallInput"
                type="search"
                placeholder="Find your next wallpaper..."
              />
              <button className="closeBtn px-3" onClick={handleCloseIcon}>
                {iClose}
              </button>
            </>
          )}
        </div>

        {/*  */}
        <div className="header_profile_container d-none d-md-inline-flex">
          <img className="logo-img" src={profile} alt="" />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="navbar-toggler d-md-none"
          type="button"
        >
          <span>
            <i className="fa fa-bars"></i>
          </span>
        </button>
      </div>

      {/*  */}
      <Offcanvas
        show={open}
        onHide={() => setOpen(false)}
        className="h-100 w-100"
        {...{
          scroll: false,
          backdrop: false,
        }}
        style={{ backgroundColor: "#121212", zIndex: 99999999 }}
      >
        <Offcanvas.Body
          className="h-100 w-75 position-relative"
          style={{ backgroundColor: "#121212" }}
        >
          <div className="d-flex justify-content-end align-items-center">
            <button
              onClick={() => setOpen(false)}
              className=""
              style={{ width: "40px", height: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <g clip-path="url(#clip0_127_330)">
                  <path
                    d="M11.3513 17.5387L12.9375 19.125L18.5625 13.5L12.9375 7.875L11.3513 9.46125L14.2537 12.375H3.375V14.625H14.2537L11.3513 17.5387ZM21.375 3.375H5.625C4.37625 3.375 3.375 4.3875 3.375 5.625V10.125H5.625V5.625H21.375V21.375H5.625V16.875H3.375V21.375C3.375 22.6125 4.37625 23.625 5.625 23.625H21.375C22.6125 23.625 23.625 22.6125 23.625 21.375V5.625C23.625 4.3875 22.6125 3.375 21.375 3.375Z"
                    fill="#D9D9D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_127_330">
                    <rect width="27" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <WallpaperSidebar />
        </Offcanvas.Body>
      </Offcanvas>

      {/*  */}
      <div className="container wallPaper_mt">
        <div className="custom_Container">
          <div className="d-flex justify-content-center align-items-start gap-3 all_mb">
            <div className="d-none d-md-block">
              <WallpaperSidebar />
            </div>
            <div className="wallpaper fontBak d-flex justify-content-end align-items-start pt-2 pe-2 position-relative">
              <div
                className="btnPosition d-flex justify-content-end align-items-center gap-3 px-2 py-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.60)",
                  width: "fit-content",
                  borderRadius: "5px",
                }}
              >
                {/* <img
                  onClick={() => setOpen(!openD)}
                  className="d-md-none"
                  style={{ width: "57px", height: "40px" }}
                  src={img}
                  alt=""
                /> */}
                <div
                  className="addLibrary"
                  style={{ borderRadius: "5px", opacity: "100%" }}
                >
                  {listCheck ? (
                    <button>
                      <span>
                        <img src={library_add} alt="Add Library" />
                      </span>
                    </button>
                  ) : (
                    <button>
                      <span>
                        <img src={library_add_check} alt="Add Library" />
                      </span>
                    </button>
                  )}

                  <div className="libraryOption">
                    {!toggleInput ? (
                      <>
                        {/* add new collection */}
                        <div className="search-collections justify-content-between d-flex align-items-center gap-2">
                          <input
                            className="flex-grow w-100 px-1"
                            type="search"
                            placeholder="New Collection"
                          />
                          <button
                            className="text-white"
                            style={{ fontSize: "12px", fontWeight: "100" }}
                          >
                            Create
                          </button>
                        </div>
                      </>
                    ) : (
                      /* search collection */

                      <div className="search-collections justify-content-between d-flex align-items-center gap-2">
                        <input
                          className="flex-grow w-100 px-1"
                          type="search"
                          placeholder="Search Collections"
                        />
                        <button onClick={() => handleToggleInput()}>
                          {add_box}
                        </button>
                      </div>
                    )}

                    <div className="d-flex flex-column justify-content-start align-items-start">
                      {items?.map((item, index) => (
                        <button
                          onClick={() => handleListCheck()}
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
                {toggleLike ? (
                  <button
                    className="like"
                    onClick={handleLike}
                    style={{ height: "20px", width: "20px" }}
                  >
                    <span>
                      <img src={likedgray} alt="Liked" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleLike}
                    className="like"
                    style={{ height: "20px", width: "20px" }}
                  >
                    <span>
                      <img src={favoriteIcon} alt="Liked" />
                    </span>
                  </button>
                )}
              </div>

              {/* share modal */}

              {showShareWallpaper && (
                <div className="shareProfile shareWallpaper d-flex flex-column gap-3 align-items-center">
                  <div className="d-flex justify-content-between">
                    <p className="fontBak">Share this wallpaper with friends</p>
                    <button className=" px-3" onClick={handleCloseShare}>
                      {iClose}
                    </button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-4">
                    <button className="d-flex flex-column gap-1 align-items-center">
                      <img src={twitter} alt="Twitter" />X
                    </button>
                    <button className="d-flex flex-column gap-1 align-items-center">
                      <img src={fb} alt="Facebook" />
                      Facebook
                    </button>
                    <button className="d-flex flex-column gap-1 align-items-center">
                      <img src={whatsapp} alt="WhatsApp" />
                      WhatsApp
                    </button>
                    <button className="d-flex flex-column gap-1 align-items-center">
                      <img src={discord} alt="Discord" />
                      Discord
                    </button>
                    <button className="d-flex flex-column gap-1 align-items-center">
                      <img src={email} alt="Email" />
                      Email
                    </button>
                    <button className="d-flex flex-column gap-1 align-items-center">
                      <img src={link} alt="Copy Link" />
                      Copy Link
                    </button>
                  </div>
                </div>
              )}

              <div
                className="w-100 position-absolute d-flex flex-row-reverse justify-content-between align-items-center"
                style={{ bottom: "10px" }}
              >
                <button className="home-bb" onClick={handleOpenShare}>
                  {iShare}
                </button>

                {downloadIcon && (
                  <div className="home-bb" style={{ marginLeft: "20px" }}>
                    <img width={24} src={download} alt="" />
                  </div>
                )}
              </div>

              {/*  */}
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
