import React from "react";
import { upload } from "../../utils/icons/global_icons";

const BrandTab = ({ step, setStep }) => {
  return (
    <form className="d-flex flex-column justify-content-center gap-3  align-items-center">
      <div className="">
        <h2 className="brand_artist_title">Name of Brand / Artist</h2>
        <input className="account-verify-input" type="number" min={0} />
      </div>
      <div className="">
        <h2 className="verified_profile_title">
          Links to other verified profiles (optional)
        </h2>
        <input
          className="account-verify-input w-100"
          type="url"
          placeholder="URL"
        />
        <input
          className="account-verify-input d-block w-100 mt-4"
          type="url"
          placeholder="URL"
        />
      </div>
      <div>
        <h2 className="proof_identity">Proof of Identity</h2>
        <p className="ac-verify-brand-tab-p">
          This could be a screenshot, selfie, or any other form of proof to
          verify your identity. Please refrain from uploading government-issued
          IDs.
        </p>
        <div className="account-verify-img-input position-relative mx-auto">
          {upload}
          <h1>Drag and drop files here</h1>
          <h1>or</h1>
          <button>Select Files</button>
          <input
            className="opacity-0 position-absolute top-100 cursor-pointer"
            type="file"
            name="img"
            accept=".png, .jpeg, .jpg"
            multiple={false}
            id=""
          />
        </div>
      </div>

      <button
        onClick={() => setStep(2)}
        className="account-verify-submit-btn mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default BrandTab;
