import React from "react";

const TDTab = ({ label, tabs, setTab, tab, className }) => {
  return (
    <div className={`${className}`}>
      {label && <h1>{label}</h1>}
      <div className="td-tab-container d-flex justify-content-around align-items-center mx-auto mt-3">
        {tabs?.map((t, i) => (
          <button
            onClick={() => setTab(i)}
            className={`${
              tab === i
                ? `td-tab-active-btn ${
                    tab === 0 ? "acs-btn-bg-visible" : "td-tab-btn-bg-hide"
                  }`
                : "td-tab-dactive-btn"
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
export default TDTab;
