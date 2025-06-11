import React from 'react';
import './Footer.scss'; // 引入 SCSS 樣式檔
import logo from '../../../../images/home/logo.svg'; // 假設您的 logo 圖片放在同一個資料夾

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer__line" />
      <div className="footer-content">
        {/* 左側 Logo */}
        <div className="footer-logo">

          <img src={logo} alt="NovaNest Logo" />

        </div>

        {/* 中間聯絡資訊 */}
        <div className="footer-info">
          <div className="info-row">
            <span className="info-label">地址</span>
            {/* <span className="info-dots"></span>  <-- 刪除此行 */}
            <span className="info-value">台北市信義區未來路88號</span>
          </div>
          <div className="info-row">
            <span className="info-label">電話</span>
            {/* <span className="info-dots"></span>  <-- 刪除此行 */}
            <span className="info-value">02-1234-5678</span>
          </div>
          <div className="info-row">
            <span className="info-label">服務時間</span>
            {/* <span className="info-dots"></span>  <-- 刪除此行 */}
            <span className="info-value">
              週一至週五 09:00-18:00
              <br />
              週六和週日 09:00-20:00
            </span>
          </div>
        </div>
        {/* 右側導覽列 */}
        <nav className="footer-nav">
          <ul>
            <li><a href="/home">首頁</a></li>
            <li><a href="/types">六大戶型</a></li>
            <li><a href="/quiz">戶型小測驗</a></li>
            <li><a href="/app">APP</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;