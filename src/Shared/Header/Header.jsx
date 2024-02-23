import React, { useEffect, useState } from "react";
import "./Header.css";

import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import login from "../../assets/login.png";
import reg from "../../assets/reg.png";
import logo from "../../assets/icons/logo.gif";
import iSocial4 from "../../assets/icons/iSocial4.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Offcanvas } from "react-bootstrap";
import {
  iLogout,
  iSearch,
  iClose,
  iSocial1,
  iSocial2,
  iSocial3,
  iSocial5,
  iSocial6,
  iUser,
  iUserRegister,
} from "../../utils/icons/global_icons";

const items = [
  { id: 1, title: "Profile", link: "profile" },
  { id: 1, title: "Profile", link: "profile" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);
  const [bars, setBars] = useState(true);
  const [logo, setLogo] = useState(false);

  const [searchBtn, setSearchBtn] = useState(true);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setLoggedIn(false);
    setOpen(!open);
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
    <div className="container position-relative w-100">
      <div className="d-flex justify-content-between align-items-center my-3 w-100">
        <div className="d-flex align-items-center flex-grow gap-2 gap-sm-4 w-75">
          <Link className={logo ? "d-sm-block d-none brand" : "brand"} to="/">
            WPS
          </Link>
          {searchBtn && (
            <button
              className="px-3 text-white navbar-search-btn mb-2"
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
          {show && (
            <>
              <input
                className="w-100 SmallInput"
                type="search"
                placeholder="Find your next wallpaper..."
              />
              <button className="closeBtn px-3" onClick={handleCloseIcon}>
                {iClose}
              </button>
            </>
          )}
          <div className="searchNav navbar-search-input d-flex align-items-center flex-grow w-100">
            <button className="px-3">{iSearch}</button>
            <input
              className="w-100 "
              type="search"
              placeholder="Find your next wallpaper..."
            />
          </div>
          <ul className="navBg d-flex justify-content-center gap-3 d-none d-md-inline-flex">
            <li className="accountParent">
              <Link className="nav-link" to="#">
                Account
              </Link>
              <div className="accountChild">
                {/* <div className="row navBorder"> */}
                <div
                  className={`row ${loggedIn ? "navBorder" : "login_padding"}`}
                >
                  <div className="col-6">
                    <div className="childInner d-flex flex-column gap-3 text-nowrap border_right">
                      {!loggedIn && (
                        <Link to="/login">
                          {" "}
                          <img src={login} alt="Logout" />
                          Login
                        </Link>
                      )}
                      {loggedIn && (
                        <>
                          <Link to="profile">Profile</Link>
                          <Link to="#">Favorites</Link>
                          <Link to="#">Collections</Link>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-6" s>
                    <div className="childInner d-flex flex-column gap-3 text-nowrap">
                      {!loggedIn && (
                        <Link to="/register">
                          {" "}
                          <img src={reg} alt="Logout" /> Register
                        </Link>
                      )}
                      {loggedIn && (
                        <>
                          <Link to="#">Messages</Link>
                          <Link to="#">The Vault</Link>
                          <Link to="setting">Settings</Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {loggedIn && (
                  <button onClick={handleLogout} className="logoutBtn mx-auto">
                    <img src={logout} alt="Logout" className="me-2" />
                    Log Out
                  </button>
                )}
              </div>
            </li>
            <li>
              <span className="border_right"></span>
            </li>
            <li>
              <Link className="nav-link" to="#">
                Upload
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_profile_container d-none d-md-inline-flex">
          <img className="logo-img" src={profile} alt="" />
        </div>
        {bars && (
          <button
            onClick={() => setOpen(!open)}
            className="navbar-toggler d-md-none"
            type="button"
          >
            <span>
              <i className="fa fa-bars"></i>
            </span>
          </button>
        )}
      </div>
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
          className="h-100 w-100 position-relative"
          style={{ backgroundColor: "#121212" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            {loggedIn ? (
              <Link className="navbar-brand" to="/">
                <img className="logo-img" src={logo} alt="" />
              </Link>
            ) : (
              <span></span>
            )}

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
          <div>
            {loggedIn && (
              <>
                <div
                  className={`row mt-4`}
                  style={{ borderBottom: "1px solid #292d31" }}
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className="col-6 px-3 childInner d-flex flex-column gap-3 text-nowrap border_right"
                  >
                    <Link to="profile">Profile</Link>
                    <Link to="#">Favorites</Link>
                    <Link to="#">Collections</Link>
                  </div>
                  <div
                    onClick={() => setOpen(!open)}
                    className="col-6 childInner d-flex flex-column gap-3 text-nowrap text-start"
                  >
                    <Link to="#">Messages</Link>
                    <Link to="#">The Vault</Link>
                    <Link to="setting">Settings</Link>
                  </div>
                </div>
                <button className="uploadButton">Upload</button>
              </>
            )}
            {!loggedIn && (
              <div className="">
                <Link to="/login">
                  {" "}
                  <button onClick={() => setOpen(!open)} className="login-text">
                    {iUser}
                    <p>Login</p>
                  </button>
                </Link>
                <Link to="/register">
                  {" "}
                  <button
                    onClick={() => setOpen(!open)}
                    className="login-text mt-2"
                  >
                    {iUserRegister}
                    <p>Register</p>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div
            className="position-absolute w-100 bg-warnding start-0 end-0 px-4"
            style={{ bottom: "5px", maxHeight: "300px" }}
          >
            {loggedIn && (
              <button
                onClick={() => handleLogout()}
                className="d-flex align-items-center gap-2 logout-btn"
              >
                {iLogout}
                <p>Log Out</p>
              </button>
            )}
            <hr className="my-1" style={{ border: "1px solid #5A5A5A" }} />
            <div
              onClick={() => setOpen(!open)}
              className="d-flex justify-content-between align-items-center"
              style={{ height: "50px" }}
            >
              <button>{iSocial1}</button>
              <button>{iSocial2}</button>
              <button>{iSocial3}</button>
              <button>
                <img style={{ width: "13px" }} src={iSocial4} alt="" />
              </button>
              <button>{iSocial5}</button>
              <button>{iSocial6}</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
