import React from "react";
import "../../styles/copyrightInfo.css";
import banner from "../../assets/images/copyright-info/banner.png";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import RulesHeader from "../../components/common-ui/header/RulesHeader";

const CopyrightInformation = () => {
  return (
    <div className="wallpaper_bg">
      <br />
      <RulesHeader />
      <div className="container mx-auto ci-container">
        <h1 className="title">Copyright Information</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />

        <div className="position-relative">
          <img src={banner} style={{ maxHeight: "294px" }} alt="" />
          <div className="ci-img-overlay"></div>
        </div>
        <div className="ci-content-container">
          <p className="mt-3 mt-md-5">
            <span className="fw-bold">Ownership of Artwork:</span> We, at WPS,
            do not claim ownership of any artwork shared or posted within this
            website. Our platform is designed to enable users to upload content
            while crediting their respective owners and adding the source
            information. If you are the owner of any artwork on this website and
            would like to claim ownership or report a listing, please follow the
            procedures outlined below.
          </p>

          <p className="mt-3 mt-md-5">
            <span className="fw-bold">Claiming Ownership:</span> If you are the
            rightful owner of any artwork displayed on The Wallpaper Society and
            wish to assert your ownership, we kindly request that you contact us
            with the following details:
          </p>

          <ul className="mt-3 mt-md-5">
            <li>A detailed description of the artwork in question.</li>
            <li>Your full name and contact information.</li>
            <li>
              Proof of your ownership, which may include original creation
              files, purchase receipts, or other relevant documentation.
            </li>
          </ul>

          <p className="mt-3 mt-md-5">
            Upon receipt of this information, we will promptly review your claim
            and, if substantiated, take the necessary actions to acknowledge
            your ownership rights.
          </p>

          <p className="mt-3 mt-md-5">
            <span>Reporting a Listing:</span> We take copyright infringement
            seriously and are committed to upholding the rights of artists and
            creators. If you believe that your copyrighted work has been posted
            on The Wallpaper Society without your consent, please follow these
            steps to report the listing
          </p>
          <ul className="mt-3 mt-md-5">
            <li>Provide the URL of the infringing content.</li>
            <li>Explain how your copyright is being violated.</li>
            <li>Include your contact information for correspondence.</li>
          </ul>

          <p className="mt-3 mt-md-5">
            Upon receiving your report, we will initiate a prompt investigation
            and take appropriate actions, including content removal, in
            accordance with the applicable laws and regulations.
          </p>

          <p className="mt-3 mt-md-5">
            <span>General Copyright Information:</span> It is important for all
            users of The Wallpaper Society to respect copyright laws and the
            intellectual property rights of others. Please be aware of the
            following:
          </p>

          <ul className="mt-3 mt-md-5">
            <li>
              Do not upload, share, or use any content for which you do not have
              the necessary permissions or rights.
            </li>
            <li>
              Always credit the original creators and provide source information
              when uploading content to our website.
            </li>
            <li>
              If in doubt about the legality of using any content, seek legal
              advice or consult the intellectual property rights holder.
            </li>
          </ul>

          <p className="mt-3 mt-md-5">
            <span>Contact Information:</span> For any copyright-related concerns
            or inquiries, please reach out to us at
            copyrights@wallpapersociety.com Thank you for your cooperation and
            understanding. We are committed to maintaining a platform that
            respects the rights of artists and content creators while providing
            a positive and creative space for our users.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CopyrightInformation;
