import React, { useState } from "react";
import MediaCenterSidebar from "../../components/medial-center-ui/MediaCenterSidebar";
import MediaCenterContentArea from "../../components/medial-center-ui/MediaCenterContentArea";
import "../../styles/mediaCenter.css";
import img from "../../assets/icons/mixer.png";
import Drawer from "../../components/common-ui/drawers/Drawer";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const MediaCenter = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="wallpaper_bg">
      <Header />
      <div className="container mx-auto mc-container">
        <h1 className="title">The Command Center</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />
        <p className="mc-container-p">
          All favorite wallpapers and collections will be displayed on your
          public profile unless you make privacy adjustments within the command
          center.
        </p>
        <div
          className="mb-4 d-flex justify-content-center gap-0 mt-3"
          style={{ width: "295px" }}
        >
          <div className="mc-tab-container d-flex justify-content-around align-items-center mx-auto">
            {["Favorites", "Collections"]?.map((t, i) => (
              <button
                onClick={() => setSelectedTab(i)}
                className={`${
                  selectedTab === i ? "mc-active-btn" : "mc-dactive-btn"
                }`}
                key={i}
              >
                {t}
              </button>
            ))}
          </div>
          <img
            onClick={() => setOpen(!open)}
            className="d-md-none"
            style={{ width: "57px" }}
            src={img}
            alt=""
          />
        </div>
        <section
          className="d-flex justify-content-between gap-5"
          style={{ height: "620px" }}
        >
          <div className="mc-sidebar d-flex flex-column align-items-center gap-4 d-none d-md-block">
            <MediaCenterSidebar open={selectedTab} />
          </div>
          <MediaCenterContentArea open={selectedTab} />
        </section>

        <Drawer
          open={open}
          setOpen={setOpen}
          {...{
            scroll: false,
            backdrop: false,
          }}
        >
          <MediaCenterSidebar open={selectedTab} />
        </Drawer>
      </div>
      <Footer />
    </div>
  );
};

export default MediaCenter;
