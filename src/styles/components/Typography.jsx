import React from 'react';
import BlurText from '../components/animations/BlurText'; // 請根據實際路徑調整

/**
 * 這個元件的功能：
 *  - 如果 useAnimation = false，就直接回傳純粹的文字標籤 (不套動態效果)
 *  - 否則把 children 內容交給 BlurText 處理，並套用預設樣式
 *
 * Props:
 *  - size: HTML 標籤，像 'h1', 'h2', 'p', 'span', 'button'...
 *  - variant: 可自行擴充做不同文字風格 (此範例未特別使用)
 *  - className: 外部傳入的 CSS class
 *  - children: 要顯示的文字
 *  - useAnimation: 是否要套上 BlurText 動畫
 *  - 其餘 ...blurProps 都會傳給 BlurText，例如 delay、threshold、stepDuration…
 */
const Typography = ({
  size = 'p',
  variant = 'body',
  className = '',
  children,
  useAnimation = true,
  ...blurProps
}) => {
  const Tag = size; // 例如 'h1'、'h2'、'p'、'span'、'button'

  // 如果不要套動畫，就讓 Tag 直接 render children
  if (!useAnimation) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      <BlurText
        text={String(children)}
        // 強制 direction 從上方→下方，底層已固定，不需再傳 direction
        animateBy={blurProps.animateBy ?? 'words'}
        delay={blurProps.delay ?? 100}
        threshold={blurProps.threshold ?? 0.1}
        rootMargin={blurProps.rootMargin ?? '0px'}
        stepDuration={blurProps.stepDuration ?? 0.3}
        easing={blurProps.easing}
        animationFrom={blurProps.animationFrom}
        animationTo={blurProps.animationTo}
        onAnimationComplete={blurProps.onAnimationComplete}
        className="inline-block"
      />
    </Tag>
  );
};

export default Typography;
