import React, { useState, useEffect } from 'react';
import './OpeningAnimation.scss';
import iconG4 from '../../../images/animated/logoicon.svg';
// import bgPhoto  from '../../../images/animated/openinganimation2.jpg'; // 1. 移除不再需要的 bgPhoto import
import logoText from '../../../images/animated/logotext.svg';
import DispersionBackground from '../animations/DispersionBackground'; // 2. 匯入您的 DispersionBackground 組件 (請確認路徑是否正確)


// 接收一個 onAnimationEnd 的 prop，並給它一個空函式的預設值以防沒傳入
const OpeningAnimation = ({ onAnimationEnd = () => {} }) => {
  // 四個階段的狀態控制：Icon → Text → Mask → Full
  const [showIcon, setShowIcon] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMask, setShowMask] = useState(false);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    // 1. 0.2s 後展示 Icon
    const t1 = setTimeout(() => setShowIcon(true), 200);

    // 2. 再 0.2s 後展示 Text
    const t2 = setTimeout(() => setShowText(true), 400);

    // 3. 再 0.4s 後展示 Mask
    const t3 = setTimeout(() => setShowMask(true), 800);

    // 4. 計算觸發全螢幕放大的時間點
    const pauseDuration = 500; // 遮罩展開後停留的時間 (ms)
    const fullAnimationStartTime = 800 + 600 + pauseDuration; // 1900ms
    const t4 = setTimeout(() => setShowFull(true), fullAnimationStartTime);

    // 5. 計算動畫真正結束的時間點並呼叫 callback
    // t4 在 1900ms 觸發，最後的放大+淡出動畫持續 1s (1000ms)
    // 所以總時長是 1900 + 1000 = 2900ms
    const totalDuration = fullAnimationStartTime + 1000;
    const endTimer = setTimeout(() => {
      onAnimationEnd(); // 呼叫從 props 傳進來的函式
    }, totalDuration);

    // 組件卸載時清除所有計時器，防止 memory leak
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]); // 將 onAnimationEnd 加入依賴陣列

  return (
    // 加上 show-full class 來觸發第四階段放大＋淡出
    <div className={`opening-container ${showFull ? 'show-full' : ''}`}>
      <div className="logo-group">
        {/* 1. Icon 階段 */}
        <div className={`icon-wrapper ${showIcon ? 'show-icon' : ''}`}>
          <img src={iconG4} alt="Icon G4" width="42" height="40" />
        </div>

        {/* 2. Mask（裁切框）階段 */}
        <div className={`photo-mask-wrapper ${showMask ? 'show-mask' : ''}`}>
          <DispersionBackground />
        </div>

        {/* 3. 文字 階段 */}
        <div className={`text-wrapper ${showText ? 'show-text' : ''}`}>
          <img src={logoText} alt="Logo Text" width="163" height="27" />
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
