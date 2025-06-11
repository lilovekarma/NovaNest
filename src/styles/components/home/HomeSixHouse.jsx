// HomeSixHouse.jsx
import React from 'react';
import './HomeSixHouse.scss';
import maskShape from '../../../images/home/bighouse.svg';
import AnimatedButton from '../btn/AnimatedButton';

const HomeSixHouse = () => (
  <section className="section-HomeSixHouse">
    {/* 只需這個 .square，其他都在 CSS 控制 */}
    <div
      className="square"
      style={{
        maskImage: `url(${maskShape})`,
        WebkitMaskImage: `url(${maskShape})`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskType: 'luminance',       // 修正屬性名稱
        WebkitMaskType: 'luminance',
      }}
    />

    <div className="content">
      <h2>NovaNest 六大戶型</h2>
      <p>
        從學步生活到三代同堂，NovaNest 以彈性格局與溫暖現代科技，
        打造安全、便利、人性化的智慧居所。每一戶型，都為了讓「家」
        更貼近你所嚮往的生活。
      </p>
      <div className="homesixhouse__button-container">
        <AnimatedButton
          className="btn-homebtn"
          onClick={() => console.log("btn-homebtn")}
        >
          查看詳情

        </AnimatedButton>
      </div>
    </div>
  </section>
);

export default HomeSixHouse;