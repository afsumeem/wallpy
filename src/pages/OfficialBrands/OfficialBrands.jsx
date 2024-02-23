import React from "react";
import "../../styles/officialBrand.css";
import img1 from "../../assets/images/official-brands/img1.png";
import img2 from "../../assets/images/official-brands/img2.png";
import img3 from "../../assets/images/official-brands/img3.png";
import img4 from "../../assets/images/official-brands/img4.png";
import img5 from "../../assets/images/official-brands/img5.png";
import img6 from "../../assets/images/official-brands/img6.png";
import img7 from "../../assets/images/official-brands/img7.png";
import img8 from "../../assets/images/official-brands/img8.png";
import img9 from "../../assets/images/official-brands/img9.png";
import img10 from "../../assets/images/official-brands/img10.png";
import img11 from "../../assets/images/official-brands/img11.png";
import img12 from "../../assets/images/official-brands/img12.png";
import img13 from "../../assets/images/official-brands/img13.png";
import img14 from "../../assets/images/official-brands/img14.png";
import img15 from "../../assets/images/official-brands/img15.png";
import { iSearch } from "../../utils/icons/global_icons";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

const brands = [
  { title: "Image 1", img: img1 },
  { title: "Image 2", img: img2 },
  { title: "Image 3", img: img3 },
  { title: "Image 4", img: img4 },
  { title: "Image 5", img: img5 },
  { title: "Image 6", img: img6 },
  { title: "Image 7", img: img7 },
  { title: "Image 8", img: img8 },
  { title: "Image 9", img: img9 },
  { title: "Image 10", img: img10 },
  { title: "Image 11", img: img11 },
  { title: "Image 12", img: img12 },
  { title: "Image 13", img: img13 },
  { title: "Image 14", img: img14 },
  { title: "Image 15", img: img15 },
];

const [brands1, brands2, brands3, ...otherBrands] = brands;

const OfficialBrands = () => {
  const characters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  // console.log(characters);
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
        </div>
        <h1 className="header_middle_text">THE WALLPAPER SOCIETY</h1>
        <div className="header_profile_container d-none d-md-inline-flex">
          <img className="logo-img " src={profile} alt="" />
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
      <div className="container official-brands-container">
        <div className="d-flex justify-content-center align-items-center w-100 ob_search">
          <div
            className="position-relative w-100"
            style={{ maxWidth: "771px" }}
          >
            <input
              className="official-brand-input"
              type="search"
              placeholder="Search your favorite brand, artist or eSports team"
            />
            <span className="official-brand-search-icon">{iSearch}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start justify-content-md-center align-items-center flex-wrap official-brand-header">
          <button>Featured</button>
          <div className="d-flex justify-content-between align-items-center gap-2 filter-brands px-4 sm_none">
            {characters?.map((c, i) => (
              <small key={i} className="character cursor-pointer">
                {c}
              </small>
            ))}
          </div>
        </div>
        <hr
          className="sm_none"
          style={{ border: "1px solid #5A5A5A", margin: "0 0 50px 0" }}
        />

        <section
          className="sm_plus_none"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            columnGap: "9px",
            marginBottom: "13px",
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center gap-0">
            <img className="ob_first_image" src={img1} alt="" />
            <h1 className="ob_card_title">Riot Games</h1>
          </div>
          <div
            className=""
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1,1fr)",
              rowGap: "6px",
            }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center gap-0">
              <img
                className="ob_image"
                style={{ minHeight: "92px" }}
                src={img4}
                alt=""
              />
              <h1 className="ob_card_title">s4df8d</h1>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-0">
              <img
                className="ob_image"
                style={{ minHeight: "92px" }}
                src={img5}
                alt=""
              />
              <h1 className="ob_card_title">s4df8d</h1>
            </div>
          </div>
        </section>

        <section className="official_brands_first_cards sm_none">
          {[brands1, brands2, brands3]?.map((b, i) => (
            <div
              key={i}
              className="d-flex flex-column justify-content-center align-items-center gap-0"
            >
              <img
                className="w-100 img-fluid h-100"
                style={{ maxHeight: "266px", borderRadius: "30px" }}
                src={b.img}
                alt=""
              />
              <h1 className="ob_card_title">{b.title}</h1>
            </div>
          ))}
          <div className="official_brands_first_cards">
            <div className="d-flex flex-column justify-content-center align-items-center gap-0">
              <img className="ob_image" src={img4} alt="" />
              <h1 className="ob_card_title">s4df8d</h1>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-0">
              <img className="ob_image" src={img5} alt="" />
              <h1 className="ob_card_title">s4df8d</h1>
            </div>
          </div>
        </section>
        <section className="official_brands_second_cards">
          {otherBrands?.map((b, i) => (
            <div
              key={i}
              className="d-flex flex-column justify-content-center align-items-center gap-0"
            >
              <img className="ob_image w-100" src={b.img} alt="" />
              <h1 className="ob_card_title">{b.title}</h1>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OfficialBrands;
