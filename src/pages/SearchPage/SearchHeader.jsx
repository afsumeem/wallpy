import React from "react";
import profile from "../../assets/profile.png";

const SearchHeader = () => {
  return (
    <>
      <div className="search_Container">
        <div className="searchHeader">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div></div>
            <h1 className="fontBak">THE WALLPAPER SOCIETY</h1>
            <div className="profileImg text-center">
              <img src={profile} alt="Profile Image" />
            </div>
          </div>
          <form action="" className="mx-auto">
            <div className="searchNav mx-auto">
              <input
                className="w-100"
                type="search"
                placeholder="Find more wallpapers..."
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
