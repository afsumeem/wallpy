import React from "react";
import img from "../../assets/images/home/simg1.png";
import img2 from "../../assets/images/home/simg2.png";
import img3 from "../../assets/images/home/simg3.png";
import img4 from "../../assets/images/home/simg4.png";
// import img from "../../assets/sponser.png";
// import img2 from "../../assets/sponsor2.png";
// import img3 from "../../assets/sponsor3.png";
// import img4 from "../../assets/sponsor4.png";
const Sponsors = () => {
  return (
    <>
      <div className="container">
        <h2 className="mb-4 mt-5 home-section-title">Sponsors</h2>
        <div className="row gy-2 gy-md-4">
          <div className="col-12 col-md-6">
            <div className="staff h-100" style={{ maxHeight: "421px" }}>
              <img
                className="img-fluid object-fit-cover first-img"
                src={img}
                alt="Img"
                style={{ height: "100%" }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-2 gap-md-4">
              <div className="staff">
                <img
                  className="img-fluid object-fit-cover second-img"
                  src={img2}
                  alt="Img"
                  style={{ maxHeight: "195px" }}
                />
              </div>
              <div className="d-flex justify-content-between gap-2 gap-md-4 align-items-center">
                <div className="staff w-100">
                  <img
                    className="img-fluid object-fit-cover second-img w-100 "
                    src={img3}
                    alt="Img"
                    style={{ maxHeight: "195px" }}
                  />
                </div>
                <div className="staff w-100">
                  <img
                    className="img-fluid object-fit-cover second-img w-100"
                    src={img4}
                    alt="Img"
                    style={{ maxHeight: "195px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
