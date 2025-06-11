import React from 'react';
import './SixHousesCover.scss';

// --- 💡 1. 引入兩張建築物圖片 ---
import buildingImage1 from '../../../images/home/homehouse.png';
import buildingImage2 from '../../../images/sixhouse/homehouse1.png';
const SixHousesCover = () => {
  return (
    <section className="six-houses-cover">
      {/* 上方的光暈和文字部分都維持不變 */}
      <div className="six-houses-cover__spotlight"></div>
      <div className="six-houses-cover__content">
        <h1 className="six-houses-cover__title">
          NovaNest 六大戶型
        </h1>
        <p className="six-houses-cover__subtitle">
          一個家，承載的不只是空間，而是每段關係與每種日常。
        </p>
        <p className="six-houses-cover__subtitle">
          用智慧設計，讓每一種生活，都有剛剛好的位置。
        </p>
      </div>

      {/* --- 💡 2. 將原本的 img 換成一個包含兩張圖片的 div 容器 --- */}
      <div className="six-houses-cover__building-container">
        <img
          src={buildingImage1}
          alt="NovaNest Building 1"
          className="six-houses-cover__building-img six-houses-cover__building-img--1"
        />
        <img
          src={buildingImage2}
          alt="NovaNest Building 2"
          className="six-houses-cover__building-img six-houses-cover__building-img--2"
        />
      </div>
    </section>
  );
};

export default SixHousesCover;