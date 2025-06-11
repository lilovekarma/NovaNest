import React, { useState, useEffect } from 'react';
/* 開場 */
import OpeningAnimation from './styles/components/openinganimation/OpeningAnimation';
import Navbar from './styles/components/navbar/Navbar';
/* 首圖 */
import Dispersion from './styles/components/home/Dispersion';
/* 六大數字 */
import FullScreenGrid from './styles/components/home/FullScreenGrid';
/* 六總房型 */
import HomeSixHouse from './styles/components/home/HomeSixHouse';
/* 六總房型 */
import HomeText from './styles/components/home/HomeText';
/* 測驗 */
import ContactForm from './styles/components/home/ContactForm/ContactForm';
/* app */
import HomeApp from './styles/components/home/HomeApp';
import Footer from './styles/components/home/footer/Footer';


import "../src/Index.scss";

function Index() {
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
            <h2 className="sixtwordtitle">六大數字</h2>
            <div className="sixline" />
            <FullScreenGrid />
          </div>
          <div className="homepage3">
            <HomeSixHouse />
          </div>
          <div className="homepage4">
            <HomeText />
          </div>
          <div className="homepage5">
            <ContactForm />
          </div>
          <div className="homepage6">
            <HomeApp />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Index;
