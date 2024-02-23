import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "transparent" }}>
        <div className="container" style={{ backgroundColor: "transparent" }}>
          <div className="row gy-2 text-start">
            <div className="col-12 col-md-5">
              <p className="footer-title">THE WALLPAPER SOCIETY</p>
            </div>
            <div className="col-6 col-md-2 footer-links">
              <ul>
                <li>Navigation</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Account</Link>
                </li>
                <li>
                  <Link to="/">Favorites</Link>
                </li>
                <li>
                  <Link to="/">Messages</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 footer-links">
              <ul>
                <li>The Society</li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Copyright Information</Link>
                </li>
                <li>
                  <Link to="/">Socials</Link>
                </li>
                <li>
                  <Link to="/">Sponsors / Advertisers</Link>
                </li>
              </ul>
            </div>
          </div>
          <svg
            height="1"
            viewBox="0 0 1840 1"
            fill="none"
            className="w-100 footer_hr"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="1840" y2="0.5" stroke="#5A5A5A" />
          </svg>

          <div className="footerBottom d-flex justify-content-center align-items-center flex-wrap gap-4">
            <span className="d-none d-md-block">© The Wallpapers Society</span>
            <span className="d-md-none">The WPS</span>
            <span>
              <Link to="/">Community Rules</Link>
            </span>
            <span>
              <Link to="/">Privacy Policy</Link>
            </span>
            <span>
              <Link to="/">Terms and Conditions</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
