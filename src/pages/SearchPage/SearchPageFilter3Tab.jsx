import React, { useState } from "react";

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "Illustration" },
  { id: 3, name: "AI" },
  { id: 4, name: "Photography" },
];

const SearchPageFilter3Tab = ({ style }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div
      className="allBtn d-flex justify-content-around align-items-center gap-1 px-2"
      style={style}
    >
      {tabs?.map((t, i) => (
        <button
          onClick={() => setSelectedTab(t.id)}
          className={`${
            selectedTab === t.id ? "allBtnActive" : "acs-dactive-btn"
          }`}
          key={i}
        >
          {t?.name}
        </button>
      ))}
    </div>
  );
};

export default SearchPageFilter3Tab;
