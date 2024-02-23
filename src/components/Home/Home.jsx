import React from "react";
import Trending from "../Trending/Trending";
import Featured from "../Featured/Featured";
import Artist from "../Artist/Artist";
import StaffPicks from "./../StaffPicks/StaffPicks";
import Sponsors from "../Sponsors/Sponsors";
import OfficialWallpapers from "../OfficialWallpapers/OfficialWallpapers";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div className="home_bg">
      <Header />
      <Trending />
      <OfficialWallpapers />
      <Featured />
      <Artist />
      <StaffPicks />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
