// AppFirst2.jsx
import React, { useState } from 'react';
import './AppFirst2.scss';

// 將圖片當模組 import 進來
import bg0 from '../../../images/app/light.gif';
import bg1 from '../../../images/app/monitor.gif';
import bg2 from '../../../images/app/energy.gif';
import bg3 from '../../../images/app/home.gif';

import phoneFrame from '../../../images/home/iphone14.svg';

const items = [
   {
    title: '你的生活模式，我們早就準備好',
    desc: '從離家、防護，到睡眠與節能，NovaNest 為你的每一種日常，預設最貼心的智慧情境。',
    bg: bg3,
  },
  {
    title: '智慧燈控：一鍵掌控，燈光自如',
    desc: '隨時開關家中燈具，無論是回家前開燈，或是外出後遠端關閉，都能輕鬆完成。',
    bg: bg0,
  },
  {
    title: '智慧監控：即時守護，全方位安心',
    desc: '遠端查看監視畫面，隨時掌握家中狀況。',
    bg: bg1,
  },
  {
    title: '智慧能源：節能數據，一手掌握',
    desc: '每日、每週、每月用電趨勢一目了然。',
    bg: bg2,
  },
  
];

export default function AppFirst2() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="app-first2">
      <div className="text-list">
        {items.map((item, i) => (
          <div
            key={i}
            className={`text-item ${selected === i ? 'active' : 'inactive'}`}
            onClick={() => setSelected(i)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="phone-wrapper">
        {/* 直接用 inline style 設定背景圖 */}
        <div
          className="phone-bg"
          style={{
            backgroundImage: `url(${items[selected].bg})`,
          }}
        />
        <div className="phone">
          <img src={phoneFrame} alt="phone" />
        </div>
      </div>
    </section>
  );
}
