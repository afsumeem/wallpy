import React, { useContext, useState } from "react";
import "./SearchPage.css";
import profile from "../../assets/profile.png";
import img from "../../assets/icons/mixer.png";

import SearchImages from "./SearchImages";
import SearchTrending from "./SearchTrending";
import SearchPageSidebar from "./SearchPageSidebar";
import Header from "../../Shared/Header/Header";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";
import { iSearch } from "../../utils/icons/global_icons";

const SearchPage = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [openD, setOpenD] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [sfwTab, setSfwTab] = useState(0);
  return (
    <div className="wallpaper_bg">
      <HeaderDrawer />
      <br />
      <div
        className="container d-flex align-items-center justify-content-between"
        style={{ marginBottom: "18px" }}
      >
        <Link className="brand" to="/">
          WPS
        </Link>

        <h1 className="fontBak text-center d-none d-md-block">
          THE WALLPAPER SOCIETY
        </h1>
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
      <div className="container">
        <form
          action=""
          className="mx-auto mt-3"
          style={{ marginBottom: "39px" }}
        >
          <div className="searchNav mx-auto position-relative">
            <div style={{ position: "absolute", top: "8px", left: "14px" }}>
              {iSearch}
            </div>
            <input
              className="w-100 ps-5 pe-4"
              type="search"
              placeholder="Find your next wallpaper..."
            />
          </div>
        </form>
        <SearchTrending sfwTab={sfwTab} setSfwTab={setSfwTab} />
        <hr className="w-100 d-none d-md-block" />
        <div
          className="mb-4 d-flex gap-0 d-lg-none"
          style={{ marginTop: "27px" }}
        >
          <div className="allBtn">
            <button
              onClick={() => setSelectedTab(1)}
              className={selectedTab === 1 && "allBtnActive"}
            >
              Trending
            </button>
            <button
              onClick={() => setSelectedTab(2)}
              className={selectedTab === 2 && "allBtnActive"}
            >
              New
            </button>
          </div>
          <img
            onClick={() => setOpenD(!openD)}
            className="d-lg-none"
            style={{ width: "57px" }}
            src={img}
            alt=""
          />
        </div>
        <section className="search_Container">
          {sfwTab === 0 ? (
            <>
              <div className="search_images_container">
                <SearchImages />
              </div>
              <span className="d-block text-center mt-4">
                <button className="loadBtn fontBak">Load More</button>
              </span>
            </>
          ) : (
            <div className="sfnw_desabled_content">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9999 12.479L40.6874 39.5832H9.31242L24.9999 12.479ZM24.9999 4.1665L2.08325 43.7498H47.9166L24.9999 4.1665ZM27.0833 33.3332H22.9166V37.4998H27.0833V33.3332ZM27.0833 20.8332H22.9166V29.1665H27.0833V20.8332Z"
                  fill="#FF0F00"
                />
              </svg>

              <p className="">
                The NSFW (Not Safe For Work) feature is currently disabled. To
                re-enable it, please navigate to your account settings and,
                under the "Wallpapers" section, activate this setting.
              </p>
              <button>Settings</button>
            </div>
          )}
        </section>

        <SearchPageSidebar
          sfwTab={sfwTab}
          setSfwTab={setSfwTab}
          open={openD}
          setOpen={setOpenD}
          {...{
            scroll: false,
            backdrop: false,
          }}
        />
      </div>
    </div>
  );
};

export default SearchPage;
