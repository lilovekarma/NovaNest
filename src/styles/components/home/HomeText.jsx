import React from 'react';
import './HomeText.scss';
import HouseSvg from '../../../images/home/bighouse.svg'; // ← 依實際路徑修改
import AnimatedButton from '../btn/AnimatedButton';

const HomeText = () => {
  return (
    <section className="home-text">
      <div className="background-layer"></div>
      <div className="blob-layer">
        <div className="blob blob-a"></div>
        <div className="blob blob-b"></div>
      </div>

      <div className="home-text__content">
        <div className="text-block">
          <h1>還不知道哪個戶型最適合你？<br />來做個小測驗吧！</h1>
          <p>
            我們為你設計了一個快速小測驗，只要花 30 秒，幫你找到最符合生活需求的理想戶型。
            不需要比較、不用煩惱，直接配對最適合你的家。
          </p>
         <div className="homesixhouse__button-container">
                 <AnimatedButton
                   className="btn-homebtn"
                   onClick={() => console.log("btn-homebtn")}
                 >
                   開始測驗
         
                 </AnimatedButton>
                 </div>

        </div>
        <div className="image-block">
          <img src={HouseSvg} alt="房屋圖示" />
        </div>
      </div>
    </section>
  );
};

export default HomeText;

