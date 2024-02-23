import React, { useContext } from "react";
import profile from "../../../assets/profile.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const AuthHeader = () => {
  const { open, setOpen } = useContext(AuthContext);
  return (
    <div className="container d-flex justify-content-between align-items-center my-3 w-100 sm_none">
      <Link className="brand" to="/">
        WPS
      </Link>

      {/* <img className="logo-img d-none d-md-inline-flex" src={profile} alt="" /> */}
      {/* <button
        onClick={() => setOpen(!open)}
        className="navbar-toggler d-md-none"
        type="button"
      >
        <span>
          <i className="fa fa-bars"></i>
        </span>
      </button> */}
    </div>
  );
};

export default AuthHeader;
