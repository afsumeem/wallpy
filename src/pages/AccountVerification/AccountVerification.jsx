import React, { useState } from "react";
import "../../styles/accountVerify.css";
import BrandTab from "../../components/account-verify-ui/BrandTab";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import RulesHeader from "../../components/common-ui/header/RulesHeader";

const tabs = ["Brand", "Artist"];
const AccountVerification = () => {
  const [step, setStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="wallpaper_bg">
      <br />
      <RulesHeader />
      <div className="container account-verify-container">
        <h1 className="title">Request Verification</h1>
        <hr className="title_hr" />
        <section className="account-verify-form-section">
          {step === 1 && (
            <>
              <h2 className="type_of_req">Type of Request</h2>
              <div className="account-verify-tab-container d-flex justify-content-between align-items-center px-2">
                {tabs?.map((t, i) => (
                  <button
                    onClick={() => setSelectedTab(i)}
                    className={`${selectedTab === i ? "btn-active" : ""}`}
                    key={i}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {selectedTab === 0 && <BrandTab step={step} setStep={setStep} />}
            </>
          )}
          {step === 2 && (
            <div className="rq_verify_thanks_part">
              <p className="account-verify-thank">
                Thank you for initiating the verification process. Please be
                aware that all verification procedures are subject to manual
                review, and additional verification may be necessary to confirm
                the identity of the requester. In the event further information
                is needed, we will contact you via email.
              </p>
              <button className="account-verify-submit-btn mx-auto">
                Submit
              </button>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AccountVerification;
