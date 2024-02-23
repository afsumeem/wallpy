import React from "react";
import img1 from "../../assets/artist.png";
import img2 from "../../assets/icons/logo.gif";
import img3 from "../../assets/images/home/aimg3.png";
import img4 from "../../assets/images/home/aimg4.png";
import img5 from "../../assets/images/home/aimg5.png";
import verified from "../../assets/Verified.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import "./Artist.css";
import { Link } from "react-router-dom";
const artistData = [
  {
    img: img1,
    title: "Diberkato",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img2,
    title: "krs",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img3,
    title: "fyween",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img4,
    title: "maDHoney",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img5,
    title: "DanaUlama",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
];

const Artist = () => {
  return (
    <>
      <div className="container w-100">
        <h2 className="home-section-title">Featured Artists</h2>
        <div className="artist">
          {artistData.map((data, index) => (
            <div
              className="d-flex flex-column gap-2 align-items-center artist-card "
              key={index}
            >
              <img
                class="artist-profile"
                src={data.img}
                alt="Profile"
                style={{ borderRadius: "50%" }}
              />
              <div className="profileInner">
                <div className="artist-pro d-flex justify-content-center gap-1 align-items-center mb-2">
                  <img src={verified} alt="img" />
                  <p className="artist-title">{data.title}</p>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="#">
                  <img src={twitter} alt="Twitter" />
                </Link>
                <Link to="#">
                  <img src={behance} alt="Behance" />
                </Link>
                <Link to="#">
                  <img src={dribble} alt="Dribble" />
                </Link>
                <Link to="#">
                  <img src={instagram} alt="Instragram" />
                </Link>
              </div> */}
              </div>
              <Link className="artist-view-profile" to="/profile">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Artist;
