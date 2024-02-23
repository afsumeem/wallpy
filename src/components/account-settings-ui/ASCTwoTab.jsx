import React from "react";

const ASCTwoTab = ({ label, tabs, setTab, tab }) => {
  return (
    <div className="hide-profile-container mt-5">
      <h1>{label}</h1>
      <div className="acs-privacy-tab-container d-flex justify-content-around align-items-center mx-auto mt-3">
        {tabs?.map((t, i) => (
          <button
            onClick={() => setTab(i)}
            className={`${
              tab === i
                ? `acs-privacy-active-btn ${
                    tab === 0 ? "acs-btn-bg-visible" : "acs-btn-bg-hide"
                  }`
                : "acs-privacy-dactive-btn"
            }`}
            key={i}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ASCTwoTab;
