import React, { useContext, useState } from "react";
import "../../styles/uploadRules.css";
import banner from "../../assets/images/upload-rules/banner.png";
import UploadRulesUploadInput from "../../components/upload-rules-ui/UploadRulesUploadInput";
import {
  Iimg,
  iClose,
  iMagnifierG,
  uploadUp,
} from "../../utils/icons/global_icons";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { AuthContext } from "../../context/AuthContext";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";

const UploadRules = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const [step, setStep] = useState(1);
  const [images, setImages] = useState([]);

  const handleRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="wallpaper_bg ">
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
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm_plus_none"
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
          <h1 className="header_middle_text ps-5 ps-md-6">
            The Wallpaper Society
          </h1>
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
      <div className="container upload-rules-container">
        <h1 className="title">Upload Files</h1>
        <hr className="title_hr" />
        <p className="upload-rules-p">
          We strongly urge all users to carefully review our community rules
          prior to uploading any files. It is our ongoing commitment to
          vigilantly monitor uploads in order to uphold the integrity of our
          guidelines.
        </p>

        <section className="row upload-section mx-auto ">
          <div className="col-md-6 p-3 pe-md-0">
            {step === 1 && (
              <img
                className="img-fluid w-100 h-100 upload_rules_img1"
                src={banner}
                alt=""
              />
            )}
            {step === 2 && (
              <UploadRulesUploadInput setImages={setImages} images={images} />
            )}
            {step === 3 && (
              <UploadRulesUploadInput setImages={setImages} images={images} />
            )}
          </div>
          <div className="col-md-6 upload-section-content mx-auto p-3">
            {step === 1 && (
              <>
                <h1 className="upload_rules_part_title my-0">
                  Accept to Continue
                </h1>
                <p className="upload-content-p">
                  We are delighted that you've chosen to join our community. To
                  ensure the highest quality of our wallpapers and maintain the
                  integrity of our site, we request that you review our
                  community rules before proceeding. Your cooperation is greatly
                  appreciated.
                </p>
                <h1 className="cm-rules-title">
                  Click to Read the Community Rules
                </h1>
                <div className="d-flex align-items-center justify-content-center gap-2 upload-checkbox cursor-pointer">
                  <input
                    onClick={() => setAccept(!accept)}
                    className="cursor-pointer"
                    type="checkbox"
                    id="upload"
                    name="upload"
                    checked={accept}
                  />
                  <p onClick={() => setAccept(!accept)} className="">
                    I confirm I've read the community rules and want to
                    continue.
                  </p>
                </div>
                <svg
                  width="390"
                  height="1"
                  viewBox="0 0 390 1"
                  fill="none"
                  className="w-100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="390" y2="0.5" stroke="#5A5A5A" />
                </svg>

                <div className="d-flex justify-content-center upload-btn-ad">
                  {accept ? (
                    <button
                      onClick={() => setStep(2)}
                      className="upload-btn-active "
                    >
                      Continue
                    </button>
                  ) : (
                    <button disabled className="upload-btn-disabled ">
                      Continue
                    </button>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="title my-0">Files</h1>

                  <div className="images_lines">
                    {step === 2 && (
                      <>
                        {images?.map((img, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center gap-2"
                            style={{ marginBottom: "29px" }}
                          >
                            <span>{Iimg}</span>
                            <span className="img-title">{img?.name}</span>
                            <button onClick={() => handleRemove(index)}>
                              {iClose}
                            </button>
                          </div>
                        ))}
                      </>
                    )}
                    {step === 3 && (
                      <>
                        {images?.map((img, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center gap-2 mt-3"
                          >
                            <span>{Iimg}</span>
                            <div className="img-upload-progress"></div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div>
                  {step === 2 && (
                    <p className="upload-checkbox text-center">
                      There are {images?.length} files pending for upload
                    </p>
                  )}
                  {step === 3 && (
                    <p className="upload-checkbox text-center">
                      Upload complete
                    </p>
                  )}
                  <hr style={{ border: "1px solid #5A5A5A" }} />
                  <div className="d-flex justify-content-center gap-4 mt-5">
                    {images?.length > 0 ? (
                      <>
                        <button
                          onClick={() => setStep(3)}
                          className="upload-btn-active "
                        >
                          <span>Upload</span>
                          {uploadUp}
                        </button>
                        {step === 3 && (
                          <button className="upload-btn-active-purple ">
                            Continue
                          </button>
                        )}
                      </>
                    ) : (
                      <button disabled className="upload-btn-disabled ">
                        <span>Upload</span> {uploadUp}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="d-flex flex-column justify-content-between h-100">
                <div style={{ height: "fit-content" }}>
                  <h1 className="title my-0">Files</h1>

                  <div className="images_lines">
                    {step === 2 && (
                      <>
                        {images?.map((img, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center gap-2"
                            style={{ marginBottom: "29px" }}
                          >
                            <span>{Iimg}</span>
                            <span className="img-title">{img?.name}</span>
                            <button onClick={() => handleRemove(index)}>
                              {iClose}
                            </button>
                          </div>
                        ))}
                      </>
                    )}
                    {step === 3 && (
                      <>
                        {images?.map((img, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center gap-2 mt-3"
                          >
                            <span>{Iimg}</span>
                            <div className="img-upload-progress"></div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div>
                  {step === 2 && (
                    <p className="upload-checkbox text-center">
                      There are {images?.length} files pending for upload
                    </p>
                  )}
                  {step === 3 && (
                    <p className="upload-checkbox text-center">
                      Upload complete
                    </p>
                  )}
                  <hr style={{ border: "1px solid #5A5A5A" }} />
                  <div className="d-flex justify-content-center gap-4 mt-5">
                    {images?.length > 0 ? (
                      <>
                        <button
                          onClick={() => setStep(3)}
                          className="upload-btn-active "
                        >
                          <span>Upload</span>
                          {uploadUp}
                        </button>
                        {step === 3 && (
                          <button className="upload-btn-active-purple ">
                            Continue
                          </button>
                        )}
                      </>
                    ) : (
                      <button disabled className="upload-btn-disabled ">
                        <span>Upload</span> {uploadUp}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UploadRules;
