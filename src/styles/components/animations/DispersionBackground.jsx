// src/components/home/DispersionBackground.jsx
import React from "react";
import maskShape from "../../../images/home/background-mark.svg";
import "./DispersionBackground.scss"

const DispersionBackground = () => {
  return (
    <div
      className="dispersion-mask-wrapper"
      style={{
        maskImage: `url(${maskShape})`,
        WebkitMaskImage: `url(${maskShape})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center bottom",
        WebkitMaskPosition: "center bottom",
        maskSize: "1290px auto",
        WebkitMaskSize: "1290px auto",
      }}
    >
      <div className="dispersion-content">
        <div className="background-layer"></div>
        <div className="blob-layer">
          <div className="blob blob-a"></div>
          <div className="blob blob-b"></div>
        </div>
      </div>
    </div>
  );
};

export default DispersionBackground;
