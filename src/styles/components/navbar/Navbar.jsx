import React, { useState } from "react";
import "./Navbar.scss";

import logo from "../../../images/home/logo.svg";
import AnimatedButton from "../btn/AnimatedButton";

/**
 * 彈出式選單元件
 * - 僅根據 isOpen prop 決定是否渲染
 * - 結構單純，不包含任何關閉邏輯
 */
const Menu = ({ isOpen }) => {
  // 如果 state 為 false，此元件不渲染任何東西
  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-overlay">
      <div className="menu-content">
        <ul>
          <li><a href="/home">首頁</a></li>
          <li><a href="/types">六大戶型</a></li>
          <li><a href="/quiz">戶型小測驗</a></li>
          <li><a href="/app">APP</a></li>
        </ul>
      </div>
    </div>
  );
};


/**
 * 主要的 Navbar 元件
 */
export default function Navbar() {
  // State: 用於追蹤選單的開啟 (true) 或關閉 (false) 狀態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 唯一的開關函式，用於切換 isMenuOpen 的狀態
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // 使用 Fragment 包裹，因為我們有 navbar 和 menu 兩個同層級的元素
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          {/* Logo 容器 */}
          <div className="navbar__logo-container">
            <img src={logo} alt="Logo" className="navbar__logo" />
          </div>

          {/* 按鈕容器 */}
          <div className="navbar__button-container">
            <AnimatedButton
              // 動態 class：當選單開啟時，加上 'is-active' class
              className={`btn-navbar ${isMenuOpen ? 'is-active' : ''}`}
              onClick={handleMenuToggle}
            >
              居家選單
              <span className="navbar__button-circle" />
            </AnimatedButton>
          </div>
        </div>

        {/* 底部線條 */}
        <div className="navbar__line" />
      </nav>

      {/* 根據 isMenuOpen 的值，條件渲染 Menu 元件 */}
      <Menu isOpen={isMenuOpen} />
    </>
  );
}