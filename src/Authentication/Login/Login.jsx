import React, { useState } from "react";
import "./Login.css";
import leftright from "../../assets/left_light.png";
import fbsignin from "../../assets/fbsignin.png";
import googlesignIn from "../../assets/googlesignIn.png";
import applesignIn from "../../assets/applesignIn.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { iInfo } from "../../utils/icons/global_icons";
import AuthHeader from "../../components/common-ui/header/AuthHeader";
// import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email && password) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userFound = storedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (userFound) {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
        window.alert("Login successfully");
        navigate("/");
      } else {
        window.alert("User not found. Please register first.");
      }
    }
  };

  return (
    <>
      <div className="pt-4 auth_bg">
        <AuthHeader />
        <div className="container auth_Container">
          <h1 className="d-md-none register-p-title">THE WALLPAPER SOCIETY</h1>
          <div className="row brightBg px-1 py-3 px-md-3 py-md-4 mx-auto">
            <div className="col-md-6 position-relative">
              <div className="auth_iInfoBtn">{iInfo}</div>
              <div className="imgLogin login_bg d-flex flex-column justify-content-between align-items-center">
                <p className="d-none d-md-block">
                  Welcome back; we missed you.
                </p>
                {/* <div className="text-center d-none d-md-block">
                  <span className="mb-2 d-block">
                    Random facts since you were gone
                  </span>
                  <div className="addedWall">
                    <span style={{ color: "#FFF" }}>
                      1348 wallpapers were added
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <h1 className="d-none d-md-block pt-4">
                  THE WALLPAPER SOCIETY
                </h1>
                <div className="authtab text-center mx-auto mt-4">
                  <button className="tabInner tabActive">Sign In</button>
                  <Link className="text-dark" to="/register">
                    <button className="tabInner">Sign Up</button>
                  </Link>
                </div>
                <form onSubmit={handleLogin} className="mb-5">
                  <label for="email">Email</label>
                  <input
                    className="mb-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="wallpapers@thewallpapersociety.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="text-center mt-4">
                    <button type="submit" className="darkBtn mb-2">
                      {/* <Link className="text-white" to="/login"> */}
                      Sign In
                      {/* </Link> */}
                    </button>
                    <Link
                      to="/forgetpassword"
                      className="d-block"
                      style={{ color: "#373737", fontSize: "10px" }}
                    >
                      Can’t login
                    </Link>
                  </div>
                </form>
                <div
                  className="socialBtn d-flex flex-column justify-content-center align-items-center"
                  style={{ gap: "12px" }}
                >
                  <button
                    className="w-100 text-start"
                    style={{ background: "#1877F2" }}
                  >
                    <img className="me-2 mb-1" src={fbsignin} alt="Facebook" />
                    Sign In with Facebook
                  </button>
                  <button
                    className="w-100 text-start"
                    style={{ background: "#FFF", color: "#CECECE" }}
                  >
                    <img
                      className="me-2 mb-1"
                      src={googlesignIn}
                      alt="Google"
                    />
                    Sign In with Google
                  </button>
                  <button
                    className="w-100 text-start"
                    style={{ background: "#000" }}
                  >
                    <img className="me-2 mb-1" src={applesignIn} alt="Apple" />
                    Sign In with Apple
                  </button>
                </div>
                <div className="community d-flex justify-content-center gap-4 align-items-center mt-5">
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

export default Login;
