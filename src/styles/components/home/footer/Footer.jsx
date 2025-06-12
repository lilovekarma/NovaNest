import React from 'react';
import { Link } from 'react-router-dom'; // 1. 【修改】從 react-router-dom 引入 Link 元件
import './Footer.scss'; // 引入 SCSS 樣式檔
import logo from '../../../../images/home/logo.svg'; // 假設您的 logo 圖片放在同一個資料夾

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer__line" />
      <div className="footer-content">
        {/* 左側 Logo */}
        <div className="footer-logo">
          {/* 2. 【修改】讓 Logo 也能點擊回到首頁 */}
          <Link to="/">
            <img src={logo} alt="NovaNest Logo" />
          </Link>
        </div>

        {/* 中間聯絡資訊 */}
        <div className="footer-info">
          <div className="info-row">
            <span className="info-label">地址</span>
            <span className="info-value">台北市信義區未來路88號</span>
          </div>
          <div className="info-row">
            <span className="info-label">電話</span>
            <span className="info-value">02-1234-5678</span>
          </div>
          <div className="info-row">
            <span className="info-label">服務時間</span>
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
            {/* 3. 【修改】將 <a> 標籤全部換成 <Link> 元件，並確保路徑與 Index.jsx 中的設定一致 */}
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/SixHouse">六大戶型</Link></li>
            <li><Link to="/HouseTypeTest">戶型小測驗</Link></li>
            <li><Link to="/AppExhibit">APP</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;