import React from "react";
import "./dispersion.scss"; 
import maskShape from "../../../images/home/background-mark.svg";
import image1 from "../../../images/home/foreground.png";   // 紫色山形
import image2 from "../../../images/home/homehouse.png";   // 房子
import DispersionBackground from "../animations/DispersionBackground";

const Dispersion = () => {
  return (
    <section className="dispersion-section">
      {/* 紫色山形底圖 */}
      <img className="bottom-image" src={image1} alt="底部紫色山形" />

      {/* 分離出的背景層 */}
      <DispersionBackground />

      {/* 房子圖案 */}
      <div className="center-content">
        <img className="house-image" src={image2} alt="房子" />
      </div>

      {/* 文字區塊 */}
      <div className="left-text">
        <h1 className="title">NovaNest</h1>
        <p className="subtitle">「讓智慧生活，成為家的日常」</p>
      </div>
    </section>
  );
};

export default Dispersion;