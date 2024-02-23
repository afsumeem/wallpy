import React, { useContext, useState } from "react";
import "./Profile.css";
import kitten from "../../assets/kitten.png";
import profile from "../../assets/profile.png";
import edit_cover from "../../assets/edit_cover.png";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import fb from "../../assets/fb.png";
import whatsapp from "../../assets/whatsapp.png";
import discord from "../../assets/discord.png";
import email from "../../assets/email.png";
import link from "../../assets/link.png";
import cover_photo from "../../assets/cover_photo.png";
import clear from "../../assets/clear.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { iMagnifierG, iSearch } from "../../utils/icons/global_icons";

import img1 from "../../assets/images/profile/img1.png";
import img2 from "../../assets/images/profile/img2.png";
import img3 from "../../assets/images/profile/img3.png";
import img4 from "../../assets/images/profile/img4.png";
import img5 from "../../assets/images/profile/img5.png";
import img6 from "../../assets/images/profile/img6.png";
import img7 from "../../assets/images/profile/img7.png";
import img8 from "../../assets/images/profile/img8.png";
import img9 from "../../assets/images/profile/img9.png";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";
import { AuthContext } from "../../context/AuthContext";

const data = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
];
const Profile = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [tab, setTab] = useState(0);
  const [msgStep, setMsgStep] = useState(0);
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

          <div className="position-relative wallPaper_search_container sm_none">
            <div
              style={{ top: "5px", left: "10px" }}
              className="position-absolute"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm_plus_none mt-1"
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
        <div className="search_Container">
          <div className="coverImg">
            <img
              className="cover_photo w-100 img-fluid ps-md-4 ps-lg-5"
              src={cover_photo}
              alt="Cover image"
            />
            <button className="sm_none">
              <img src={edit_cover} alt="Edit" />
            </button>
            <div className="profile-container h-100">
              <div className="profile_photo mb-4">
                <img src={profile} alt="Profile" />
              </div>
              <div className="mt-2">
                <h6 className="text-start text-white profile_name">
                  KRS
                  <img className="ms-1" src={Verified} alt="Verified" />
                </h6>
                <span className="profile_bio sm_none">WPS Admin / AI Art</span>
              </div>
            </div>
          </div>

          <div className="profileDetail d-flex justify-content-between align-items-start">
            <div></div>
            <div className="update_follower d-flex justify-content-between align-items-center flex-wrap gap-5 d-none d-lg-inline-flex">
              <p className="fontBak">
                Uploads: <span style={{ color: "#ccc" }}>1549</span>
              </p>
              <p className="fontBak">
                Last Active: <span style={{ color: "#ccc" }}>Today</span>
              </p>
              <p className="fontBak">
                Member Since: <span style={{ color: "#ccc" }}>1549</span>
              </p>
            </div>
            {/* <div className="update_follower d-flex justify-content-between align-items-center gap-5 d-none d-lg-inline-flex">
            <div>
              <p className="fontBak">
                Uploads: <span style={{ color: "#ccc" }}>1549</span>
              </p>
              <p className="fontBak">
                Followers:: <span style={{ color: "#ccc" }}>1549</span>
              </p>
            </div>
            <div>
              <p className="fontBak">
                Member Since: <span style={{ color: "#ccc" }}>1549</span>
              </p>
              <p className="fontBak">
                Last Active: <span style={{ color: "#ccc" }}>Today</span>
              </p>
            </div>
          </div> */}
            <div className="d-flex flex-column gap-3">
              <div className="d-flex justify-content-end align-items-center gap-2">
                {/* <div className="followBtn d-none d-md-block">
                  <button className="fontBak">Follow</button>

                  <div className="shareProfile d-flex flex-column gap-3 align-items-center">
                    <p className="fontBak">Share this profile with friends</p>
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
                </div> */}
                <div className="d-none d-md-block">
                  <button
                    className="msgBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_377_1303)">
                          <path
                            d="M12.5 2.5H2.5C1.8125 2.5 1.25625 3.0625 1.25625 3.75L1.25 11.25C1.25 11.9375 1.8125 12.5 2.5 12.5H12.5C13.1875 12.5 13.75 11.9375 13.75 11.25V3.75C13.75 3.0625 13.1875 2.5 12.5 2.5ZM12.5 5L7.5 8.125L2.5 5V3.75L7.5 6.875L12.5 3.75V5Z"
                            fill="#323232"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_377_1303">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                  {/* <!-- Message Modal Start --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog  modal-dialog-centered">
                      <div
                        className="modal-content"
                        style={{
                          zIndex: 500,
                          backgroundColor: "#2D2D2D",
                          height: "332px",
                        }}
                      >
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="modalClose"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <img src={clear} alt="close" />
                          </button>
                        </div>
                        {msgStep === 0 && (
                          <>
                            <div
                              className="msgModal"
                              style={{
                                zIndex: 500,
                                backgroundColor: "#2D2D2D",
                              }}
                            >
                              <h4 className="fontBak mb-2">Send a message</h4>
                              <p className="fontBak mb-4">
                                Please be sure to familiarize yourself with the
                                site rules before composing your message
                              </p>
                              <form action="">
                                <>
                                  <label for="message" className="fontBak mb-2">
                                    Message
                                  </label>
                                  <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="7"
                                    placeholder="Write the details here..."
                                  ></textarea>
                                </>

                                <div className="d-flex flex-column align-items-center gap-3">
                                  <button
                                    onClick={() => setMsgStep(1)}
                                    className="sendBtn fontBak"
                                  >
                                    Send Message
                                  </button>

                                  <button className="cancleBtn fontBak">
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          </>
                        )}

                        {msgStep === 1 && (
                          <div className="h-100 d-flex flex-column justify-content-around align-items-center">
                            <div></div>
                            <p className="msg_success">
                              Your message has been sent successfully
                            </p>
                            <button
                              onClick={() => setMsgStep(1)}
                              className="msg_close_btn"
                            >
                              Close
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Message Modal End --> */}
                </div>
                <button className="msgBtn">
                  <span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 3.125L7.14645 2.77145L7.5 2.41789L7.85355 2.77145L7.5 3.125ZM8 8.75C8 9.02614 7.77614 9.25 7.5 9.25C7.22386 9.25 7 9.02614 7 8.75L8 8.75ZM4.02145 5.89645L7.14645 2.77145L7.85355 3.47855L4.72855 6.60355L4.02145 5.89645ZM7.85355 2.77145L10.9786 5.89645L10.2714 6.60355L7.14645 3.47855L7.85355 2.77145ZM8 3.125L8 8.75L7 8.75L7 3.125L8 3.125Z"
                        fill="#4E4E4E"
                      />
                      <path
                        d="M3.125 10L3.125 10.625C3.125 11.3154 3.68464 11.875 4.375 11.875L10.625 11.875C11.3154 11.875 11.875 11.3154 11.875 10.625V10"
                        stroke="#4E4E4E"
                      />
                    </svg>
                  </span>
                </button>
                <button className="msgBtn">
                  <span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125ZM7.50001 4C6.94772 4 6.50001 4.44772 6.50001 5C6.50001 5.55228 6.94772 6 7.50001 6H7.50626C8.05854 6 8.50626 5.55228 8.50626 5C8.50626 4.44772 8.05854 4 7.50626 4H7.50001ZM6.5625 6.5C6.01022 6.5 5.5625 6.94772 5.5625 7.5C5.5625 8.03129 5.97683 8.46582 6.5 8.49808V10C6.5 10.5523 6.94772 11 7.5 11H8.75C9.30228 11 9.75 10.5523 9.75 10C9.75 9.44772 9.30228 9 8.75 9H8.5V7.5C8.5 6.94772 8.05228 6.5 7.5 6.5H6.5625Z"
                        fill="#FF4330"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="share">
                <div className="d-flex justify-content-end align-items-center gap-3">
                  <Link to="/" className="overflow-hidden">
                    <img src={twitter} alt="Twitter" />
                  </Link>
                  <Link to="/">
                    <img src={behance} alt="Behance" />
                  </Link>
                  <Link to="/">
                    <img src={dribble} alt="Dribble" />
                  </Link>
                  <Link to="/">
                    <img src={instagram} alt="Instragram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-100" />
        </div>

        <div className="w-100">
          <div className="row px-2">
            <div className="profile-tab-container mx-auto mx-md-0 col-md-4 d-flex justify-content-around gap-3 align-items-center">
              {["Uploads", "Favorites", "Collections"]?.map((t, i) => (
                <button
                  onClick={() => setTab(i)}
                  className={`${tab === i ? `active-btn` : ""}`}
                  key={i}
                >
                  {t}
                </button>
              ))}
            </div>
            <form
              action=""
              className="profile_search col-md-4 ms-auto mt-4 mt-lg-0 d-flex align-items-center gap-2 d-none d-md-inline-flex"
            >
              {iSearch}
              <input
                className="w-100"
                type="search"
                placeholder="Search this profile"
              />
            </form>
            <div className="col-md-4 d-none d-md-block"></div>
          </div>
          <div className="search_images_container profile_images mb-5">
            {data.map((image) => (
              <Link to="/wallpaper">
                <img className="w-100" src={image.img} alt="img" />
              </Link>
            ))}
          </div>
          <div>
            <span className="d-block text-center">
              <button className="loadBtn fontBak">View more</button>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
