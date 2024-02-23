import React, { useState } from "react";
import fram1 from "../../assets/search/Frame1.png";
import fram2 from "../../assets/search/Frame2.png";
import fram3 from "../../assets/search/Frame3.png";
import fram4 from "../../assets/search/Frame4.png";
import fram5 from "../../assets/search/Frame5.png";
import fram6 from "../../assets/search/Frame6.png";
import fram7 from "../../assets/search/Frame7.png";
import fram8 from "../../assets/search/Frame8.png";
import fram9 from "../../assets/search/Frame9.png";
import fram10 from "../../assets/search/Frame10.png";
import fram11 from "../../assets/search/Frame11.png";
import fram12 from "../../assets/search/Frame12.png";
import fram13 from "../../assets/search/Frame13.png";
import fram14 from "../../assets/search/Frame14.png";
import fram15 from "../../assets/search/Frame15.png";
import fram16 from "../../assets/search/Frame16.png";
import fram17 from "../../assets/search/Frame17.png";
import fram18 from "../../assets/search/Frame18.png";
import fram19 from "../../assets/search/Frame19.png";
import fram20 from "../../assets/search/Frame20.png";
import fram21 from "../../assets/search/Frame21.png";
import fram22 from "../../assets/search/Frame22.png";
import fram23 from "../../assets/search/Frame23.png";
import fram24 from "../../assets/search/Frame24.png";
import fram25 from "../../assets/search/Frame25.png";
import fram26 from "../../assets/search/Frame26.png";
import fram27 from "../../assets/search/Frame27.png";
import fram28 from "../../assets/search/Frame28.png";
import fram29 from "../../assets/search/Frame29.png";
import fram30 from "../../assets/search/Frame30.png";
import fram31 from "../../assets/search/Frame31.png";
import fram32 from "../../assets/search/Frame32.png";
import fram33 from "../../assets/search/Frame33.png";
import fram34 from "../../assets/search/Frame34.png";
import fram35 from "../../assets/search/Frame35.png";
import fram36 from "../../assets/search/Frame36.png";
import fram37 from "../../assets/search/Frame37.png";
import fram38 from "../../assets/search/Frame38.png";
import fram39 from "../../assets/search/Frame39.png";
import fram40 from "../../assets/search/Frame40.png";
import fram41 from "../../assets/search/Frame41.png";
import fram42 from "../../assets/search/Frame42.png";
import fram43 from "../../assets/search/Frame43.png";
import fram44 from "../../assets/search/Frame44.png";
import fram45 from "../../assets/search/Frame45.png";
import fram46 from "../../assets/search/Frame46.png";
import fram47 from "../../assets/search/Frame47.png";
import fram48 from "../../assets/search/Frame48.png";
import fram49 from "../../assets/search/Frame49.png";
import fram50 from "../../assets/search/Frame50.png";
import fram51 from "../../assets/search/Frame51.png";
import fram52 from "../../assets/search/Frame52.png";
import fram53 from "../../assets/search/Frame53.png";
import fram54 from "../../assets/search/Frame54.png";
import fram55 from "../../assets/search/Frame55.png";
import fram56 from "../../assets/search/Frame56.png";
import fram57 from "../../assets/search/Frame57.png";
import fram58 from "../../assets/search/Frame58.png";
import fram59 from "../../assets/search/Frame59.png";
import fram60 from "../../assets/search/Frame60.png";
import { Link } from "react-router-dom";
const imageArray = [
  fram1,
  fram2,
  fram3,
  fram4,
  fram5,
  fram6,
  fram7,
  fram8,
  fram9,
  fram10,
  fram11,
  fram12,
  fram13,
  fram14,
  fram15,
  fram16,
  fram17,
  fram18,
  fram19,
  fram20,
  fram21,
  fram22,
  fram23,
  fram24,
  fram25,
  fram26,
  fram27,
  fram28,
  fram29,
  fram30,
  fram31,
  fram32,
  fram33,
  fram34,
  fram35,
  fram36,
  fram37,
  fram38,
  fram39,
  fram40,
  fram41,
  fram42,
  fram43,
  fram44,
  fram45,
  fram46,
  fram47,
  fram48,
  fram49,
  fram50,
  fram51,
  fram52,
  fram53,
  fram54,
  fram55,
  fram56,
  fram57,
  fram58,
  fram59,
  fram60,
];

const SearchImages = () => {
  return (
    <>
      {imageArray.map((data) => (
        <Link to="/">
          <img className="img-fluid w-100" src={data} alt="img" />
        </Link>
      ))}
    </>
  );
};

export default SearchImages;
