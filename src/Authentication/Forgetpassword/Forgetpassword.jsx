import React from "react";
import "./ForgetPass.css";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { iInfo } from "../../utils/icons/global_icons";
import AuthHeader from "../../components/common-ui/header/AuthHeader";

const Forgetpassword = () => {
  return (
    <>
      <div className="auth_bg pt-4">
        <AuthHeader />
        <div className="container auth_Container">
          <h1 className="d-md-none register-p-title">THE WALLPAPER SOCIETY</h1>
          <div className="row brightBg px-1 py-3 px-md-3 py-md-4 mx-auto">
            <div className="col-md-6 position-relative">
              <div className="auth_iInfoBtn">{iInfo}</div>
              <div className="imgLogin forgetpass_bg">
                <p className="text-center d-none d-md-block">
                  Forgot your password?
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <h1 className="d-none d-md-block pt-4">
                  THE WALLPAPER SOCIETY
                </h1>
                <div
                  className="authtab text-center mx-auto mt-4"
                  style={{ marginBottom: "120px" }}
                >
                  <button className="tabInner tabActive">Password</button>
                  <Link className="text-dark" to="/forgetemail">
                    <button className="tabInner">E-mail</button>
                  </Link>
                </div>
                <form action="" style={{ marginBottom: "250px" }}>
                  <label for="email">Email</label>
                  <input
                    className=""
                    type="mail"
                    name="email"
                    id="email"
                    placeholder="wallpapers@thewallpapersociety.com"
                  />

                  <div className="text-center mt-4">
                    <button className="darkBtn mb-2">
                      <Link className="text-white" to="/confirmationEmail">
                        Reset
                      </Link>
                    </button>
                  </div>
                </form>
                <div className="community d-flex justify-content-center gap-4 align-items-center pb-4">
                  <Link to="/">Community Rules</Link>
                  <Link to="/">Privacy Policy</Link>
                  <Link to="/">Terms and Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
