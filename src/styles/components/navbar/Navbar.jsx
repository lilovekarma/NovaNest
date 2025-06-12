import React, { useState } from "react";
import { Link } from "react-router-dom"; // 1. 【修改】從 react-router-dom 引入 Link 元件
import "./Navbar.scss";

import logo from "../../../images/home/logo.svg";
import AnimatedButton from "../btn/AnimatedButton";

/**
 * 彈出式選單元件
 * @param {object} props
 * @param {boolean} props.isOpen - 選單是否開啟
 * @param {function} props.onClose - 關閉選單的函式，點擊連結時呼叫
 */
const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-overlay">
      <div className="menu-content">
        <ul>
          {/* 2. 【修改】將 <a> 標籤全部換成 <Link> 元件 */}
          {/* - href 改成 to */}
          {/* - to 的路徑必須跟 Index.jsx 中的 path 完全對應 */}
          {/* - 加上 onClick={onClose}，讓選單在點擊後自動關閉，提升使用者體驗 */}

          {/* 首頁: Index.jsx 的 path 是 "/" */}
          <li><Link to="/" onClick={onClose}>首頁</Link></li>

          {/* 六大戶型: Index.jsx 的 path 是 "/SixHouse" */}
          <li><Link to="/SixHouse" onClick={onClose}>六大戶型</Link></li>

          {/* 戶型小測驗: Index.jsx 的 path 是 "/HouseTypeTest" */}
          <li><Link to="/HouseTypeTest" onClick={onClose}>戶型小測驗</Link></li>

          {/* APP: Index.jsx 的 path 是 "/AppExhibit" */}
          <li><Link to="/AppExhibit" onClick={onClose}>APP</Link></li>
        </ul>
      </div>
    </div>
  );
};


/**
 * 主要的 Navbar 元件
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. 【新增】一個專門用來關閉選單的函式，傳給 Menu 元件
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <div className="navbar__logo-container">
            {/* 讓 Logo 也能點擊回到首頁 */}
            <Link to="/">
              <img src={logo} alt="Logo" className="navbar__logo" />
            </Link>
          </div>

          <div className="navbar__button-container">
            <AnimatedButton
              className={`btn-navbar ${isMenuOpen ? 'is-active' : ''}`}
              onClick={handleMenuToggle}
            >
              居家選單
              <span className="navbar__button-circle" />
            </AnimatedButton>
          </div>
        </div>
        <div className="navbar__line" />
      </nav>

      {/* 4. 【修改】將關閉選單的函式傳遞給 Menu 元件 */}
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}