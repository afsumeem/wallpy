import React from "react";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { iInfo } from "../../utils/icons/global_icons";
import AuthHeader from "../../components/common-ui/header/AuthHeader";

const ConfirmationEmail = () => {
  return (
    <>
      <div className="auth_bg pt-4">
        <AuthHeader />
        <div className="container auth_Container">
          <h1 className="d-md-none register-p-title">THE WALLPAPER SOCIETY</h1>
          <div className="row brightBg px-1 py-3 px-md-3 py-md-4 mx-auto">
            <div className="col-md-6 position-relative">
              <div className="auth_iInfoBtn">{iInfo}</div>
              <div className="imgLogin confirmation_bg"></div>
            </div>

            <div className="col-md-6">
              <div style={{ padding: "20px" }}>
                <h1 className="d-none d-md-block pt-4">
                  THE WALLPAPER SOCIETY
                </h1>
                <div>
                  <div style={{ marginBottom: "240px" }}>
                    <p
                      className="fontBak text-center"
                      style={{
                        marginTop: "190px",
                        fontSize: "12px",
                        color: "#373737",
                      }}
                    >
                      Please check your email for further instructions on
                      resetting your password. If you don't see an email from
                      us, please check your spam folder.
                    </p>
                    <div className="text-center mt-5">
                      <Link
                        className="text-white darkBtn"
                        style={{ maxWidth: "152px" }}
                        to="/"
                      >
                        Return Home
                      </Link>
                    </div>
                  </div>

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
      </div>
    </>
  );
};

export default ConfirmationEmail;
