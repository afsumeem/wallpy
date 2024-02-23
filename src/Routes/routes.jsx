import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Forgetpassword from "../Authentication/Forgetpassword/Forgetpassword";
import ForgetEmail from "../Authentication/Forgetpassword/ForgetEmail";
import ConfirmationEmail from "../Authentication/Forgetpassword/ConfirmationEmail";
import SearchPage from "../pages/SearchPage/SearchPage";
import WallPaper from "../pages/WallPaper/WallPaper";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";
import CopyrightInformation from "../pages/CopyrightInformation/CopyrightInformation";
import Socials from "../pages/Socials/Socials";
import CommunityRules from "../pages/CommunityRules/CommunityRules";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import UploadRules from "../pages/UploadRules/UploadRules";
import AccountVerification from "../pages/AccountVerification/AccountVerification";
import Contact from "../pages/Contact/Contact";
import OfficialBrands from "../pages/OfficialBrands/OfficialBrands";
import Messages from "../pages/Messages/Messages";
import MediaCenter from "../pages/MediaCenter/MediaCenter";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import Upload from "../pages/Upload/Upload";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/upload-rules",
    element: <UploadRules />,
  },
  {
    path: "/account-verification",
    element: <AccountVerification />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/official-brands",
    element: <OfficialBrands />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/media-center",
    element: <MediaCenter />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/copyright-information",
    element: <CopyrightInformation />,
  },
  {
    path: "/socials",
    element: <Socials />,
  },
  {
    path: "/community-rules",
    element: <CommunityRules />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsConditions />,
  },

  {
    path: "/searchPage",
    element: <SearchPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/forgetemail",
    element: <ForgetEmail />,
  },
  {
    path: "/confirmationEmail",
    element: <ConfirmationEmail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/wallpaper",
    element: <WallPaper />,
  },
]);
