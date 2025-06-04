import React, { useState, useEffect } from 'react';
import './OpeningAnimation.scss';
import iconG4   from '../../../images/animated/logoicon.svg';
import bgPhoto  from '../../../images/animated/openinganimation2.jpg';
import logoText from '../../../images/animated/logotext.svg';

const OpeningAnimation = () => {
  // 四個階段：Icon → Text → Mask → Full
  const [showIcon, setShowIcon] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMask, setShowMask] = useState(false);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    // 1. 0.2s 後展示 Icon
    const t1 = setTimeout(() => setShowIcon(true), 200);

    // 2. 再 0.4s（Icon 動畫 0.2s + 等候 0.2s）後展示 Text
    const t2 = setTimeout(() => setShowText(true), 200 + 200);

    // 3. 再 0.8s（Text 動畫 0.2s + 等候 0.6s）後展示 Mask，
    //    Mask 的寬度由 0 → 80，動畫時長 0.6s
    const t3 = setTimeout(() => setShowMask(true), 200 + 200 + 400);

    // 4. 計算遮罩展開完成的時間：
    //    t3 時間點 = 200 + 200 + 400 = 800ms，
    //    展開動畫持續 600ms，到 800 + 600 = 1400ms 完成
    //    這裡想要「停留 pauseDuration」後再放大，
    //    例如 pauseDuration = 500ms → 在 1400 + 500 = 1900ms 開始放大
    const pauseDuration = 500; // 停留時間 (ms)，可自訂

    const t4 = setTimeout(() => setShowFull(true), 1400 + pauseDuration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    // 給 opening-container 加上 show-full class 來觸發第四階段放大＋淡出
    <div className={`opening-container ${showFull ? 'show-full' : ''}`}>
      <div className="logo-group">
        {/* 1. Icon 階段：height 0 → 40px */}
        <div className={`icon-wrapper ${showIcon ? 'show-icon' : ''}`}>
          <img src={iconG4} alt="Icon G4" width="42" height="40" />
        </div>

        {/* 2. Mask（裁切框）階段：width 0 → 80px */}
        <div className={`photo-mask-wrapper ${showMask ? 'show-mask' : ''}`}>
          <img
            className="photo-img"
            src={bgPhoto}
            alt="裁切后的背景"
            width="1392"
            height="700"
          />
        </div>

        {/* 3. 文字 階段：height 0 → 27px */}
        <div className={`text-wrapper ${showText ? 'show-text' : ''}`}>
          <img src={logoText} alt="Logo Text" width="163" height="27" />
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
