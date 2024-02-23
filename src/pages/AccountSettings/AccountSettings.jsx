import React, { useState } from "react";
import "../../styles/accountSettings.css";
import ACSProfileTab from "../../components/account-settings-ui/ACSProfileTab";
import ACSCredentialsTab from "../../components/account-settings-ui/ACSCredentialsTab";
import ACSPrivacyTab from "../../components/account-settings-ui/ACSPrivacyTab";
import ACSWallpapersTab from "../../components/account-settings-ui/ACSWallpapersTab";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const tabs = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Brand" },
  { id: 3, name: "Credentials" },
  { id: 4, name: "Privacy" },
  { id: 5, name: "Wallpapers" },
];

const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="wallpaper_bg">
      <Header />
      <div className="container acs-container">
        <h1 className="title">Account Settings</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />
        <div className="acs-tab-container d-flex justify-content-around align-items-center gap-1 mx-auto px-2">
          {tabs?.map((t, i) => (
            <button
              onClick={() => setSelectedTab(t.id)}
              className={`${
                selectedTab === t.id ? "acs-active-btn" : "acs-dactive-btn"
              }`}
              key={i}
            >
              {t?.name}
            </button>
          ))}
        </div>
        <section className="acs-content-area p-2 p-md-4">
          {selectedTab === 1 && <ACSProfileTab />}
          {selectedTab === 3 && <ACSCredentialsTab />}
          {selectedTab === 4 && <ACSPrivacyTab />}
          {selectedTab === 5 && <ACSWallpapersTab />}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
