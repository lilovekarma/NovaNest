// 檔案名稱: HomePage.jsx

import React, { useState, useEffect } from 'react';
/* 這裡所有的 import 都維持原樣 */
import OpeningAnimation from './styles/components/openinganimation/OpeningAnimation';
import Navbar from './styles/components/navbar/Navbar';
import Dispersion from './styles/components/home/Dispersion';
import FullScreenGrid from './styles/components/home/FullScreenGrid';
import HomeSixHouse from './styles/components/home/HomeSixHouse';
import HomeText from './styles/components/home/HomeText';
import ContactForm from './styles/components/home/ContactForm/ContactForm';
import HomeApp from './styles/components/home/HomeApp';
import Footer from './styles/components/home/footer/Footer';

// 引入您剛剛修改的 SCSS 檔案
import "../src/HomePage.scss";

// 【重要】將 function 名稱改為 HomePage
function HomePage() {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <>
      {!animationEnded && (
        <OpeningAnimation onAnimationEnd={() => setAnimationEnded(true)} />
      )}

      {animationEnded && (
        <>
          <Navbar />
          <div className="homepage1">
            <Dispersion />
          </div>
          <div className="homepage2">
            <div className="ball shadow"></div>
            <h2 className="sixtwordtitle">六大數字</h2>
            <FullScreenGrid />
          </div>
          <div className="homepage3">
            <HomeSixHouse />
          </div>
          <div className="homepage4">
            <HomeText />
          </div>

          <div className="homepage6">
            <HomeApp />
          </div>
          <div className="homepage5">
            <ContactForm />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

// 【重要】將輸出也改為 HomePage
export default HomePage;