import React, { useState, useEffect } from "react";
import "./HomeApp.scss";
import app1 from "../../../images/home/app-3.png";
import app2 from "../../../images/home/app-5.png";
import app3 from "../../../images/home/app-1.png";
import app4 from "../../../images/home/app-2.png";
import app5 from "../../../images/home/app-4.png";
import iphone14 from "../../../images/home/iphone14.svg";
import AnimatedButton from "../../components/btn/AnimatedButton";

const HomeApp = () => {
  const images = [app1, app2, app3, app4, app5];

  const positions = [
    { left: 0, top: 100 },
    { left: 273, top: 50 },
    { left: 546, top: 0 },
    { left: 819, top: 50 },
    { left: 1092, top: 100 },
  ];

  const [indexOrder, setIndexOrder] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexOrder((prev) => {
        const next = [...prev];
        next.push(next.shift()); // 將第一個移到最後
        return next;
      });
    }, 3000); // 每 3 秒輪播一次

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="homeApp">
      <div className="homeApp__title">
        <h2>NovaNest APP</h2>
      </div>

      <div className="homeapp__button-container">
        <AnimatedButton className="btn-homeapp">
          詳看詳情

        </AnimatedButton>
      </div>

      <div className="homeApp__carousel-wrapper">
        {indexOrder.map((imgIdx, posIdx) => (
          <img
            key={imgIdx}
            src={images[imgIdx]}
            alt={`畫面${imgIdx + 1}`}
            className="carousel-img"
            style={{
              left: `${positions[posIdx].left}px`,
              top: `${positions[posIdx].top}px`,
            }}
          />
        ))}
      </div>

      <div className="homeApp__frame">
        <img src={iphone14} alt="手機遮罩" />
      </div>
    </section>
  );
};

export default HomeApp;
