// AppFirst.jsx
import { useState, useEffect } from "react";
import "./AppFirst.scss";
import appiphone from "../../../images/app/app1-iphone.png"; 
import appiphone1 from "../../../images/app/app-iphone.png"; 


export default function AppFirst() {
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    // 元件掛載後觸發一次移動
    setMoved(true);
  }, []);

  return (
    <section className="section-wrapper">
      <div className={`gradient-circle`} />
      <img
        src={appiphone}
        className={`phone-left ${moved ? "down" : ""}`}
        alt="left phone"
      />
      <img
        src={appiphone1}
        className={`phone-right ${moved ? "up" : ""}`}
        alt="right phone"
      />
    </section>
  );
}
