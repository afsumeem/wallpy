import React, { useState } from "react";
import "../../styles/upload.css";
import UploadSidebar from "../../components/upload-ui/UploadSidebar";
import UploadContentArea from "../../components/upload-ui/UploadContentArea";
import TDTab from "../../components/common-ui/tabs/TDTab";
import img from "../../assets/icons/mixer.png";
import Drawer from "../../components/common-ui/drawers/Drawer";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import RulesHeader from "../../components/common-ui/header/RulesHeader";

const Upload = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [images, setImages] = useState([]);
  return (
    <div className="wallpaper_bg">
      <br />
      <RulesHeader />
      <div className="container upload-container">
        <h1 className="title">The Vault</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />

        <div
          className="d-flex align-items-center w-100"
          style={{ maxWidth: "295px" }}
        >
          <div className="mb-4 gap-0 mx-md-auto" style={{ maxWidth: "295px" }}>
            <div className={`mx-auto`}>
              <div className="td-tab-container d-flex justify-content-around align-items-center mx-auto mt-3">
                {["Drafts", "Published"]?.map((t, i) => (
                  <button
                    onClick={() => setSelectedTab(i)}
                    className={`${
                      selectedTab === i
                        ? `td-tab-active-btn ${
                            selectedTab === 0
                              ? "td-tab-btn-bg-hide"
                              : "acs-btn-bg-visible"
                          }`
                        : "td-tab-dactive-btn"
                    }`}
                    key={i}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
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
          style={{ minHeight: "620px" }}
        >
          <div className="upload-sidebar d-flex flex-column align-items-center gap-4 h-100 d-none d-md-block">
            <UploadSidebar open={selectedTab} />
          </div>
          <UploadContentArea images={images} setImages={setImages} />
        </section>

        <Drawer
          open={open}
          setOpen={setOpen}
          {...{
            scroll: false,
            backdrop: false,
          }}
        >
          <UploadSidebar open={selectedTab} />
        </Drawer>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
