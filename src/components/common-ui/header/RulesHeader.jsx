import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

import logout from "../../../assets/logout.png";
import profile from "../../../assets/profile.png";
import login from "../../../assets/login.png";
import reg from "../../../assets/reg.png";
import { Link } from "react-router-dom";
import { iSearch } from "../../../utils/icons/global_icons";
import HeaderDrawer from "./HeaderDrawer";

const RulesHeader = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setLoggedIn(false);
    setOpen(!open);
  };
  return (
    <>
      <HeaderDrawer />
      <div className="container d-flex justify-content-between align-items-center my-3 w-100">
        <Link className="brand" to="/">
          WPS
        </Link>
        <div
          className="flex-grow d-flex align-items-center sm_none"
          style={{ gap: "22px" }}
        >
          <div className="social_search d-flex align-items-center flex-grow w-100">
            <button className="px-3">{iSearch}</button>
            <input
              className="w-100 flex-grow rules_input"
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
    </>
  );
};

export default RulesHeader;
