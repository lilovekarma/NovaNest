// src/components/Navbar/Navbar.jsx
import React from "react";
import "./Navbar.scss";

import logo from "../../../images/home/logo.svg";
import AnimatedButton from "../btn/AnimatedButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* 內層容器：寬度 1440px、置中；所有絕對定位都參考這一層 */}
      <div className="navbar__inner">
        {/* Logo 容器：絕對定位，水平真正置中 */}
        <div className="navbar__logo-container">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </div>

        {/* 按鈕容器：絕對定位，頂到底部垂直置中，距右 24px */}
        <div className="navbar__button-container">
          <AnimatedButton onClick={() => console.log("按鈕被點擊")}>
            居家選單
            <span className="navbar__button-circle" />
          </AnimatedButton>
        </div>
      </div>

      {/* 底部那條線：寬 1392px，水平置中 */}
      <div className="navbar__line" />
    </nav>
  );
}
