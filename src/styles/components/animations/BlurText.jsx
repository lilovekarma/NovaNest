// src/animations/BlurText.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

/**
 * 參數：
 * @param {Object} from 
 * @param {Array<Object>} steps 
 * @returns {Object} keyframes 
 * 
 * 將 from 與每一步的 styles 合併成完整的 keyframes 結構
 */
const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  // direction 參數在此改寫為無效，因為已強制從上方進場
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  // 根據 animateBy 決定要以「字詞」還是「字元」做拆分
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // 用 IntersectionObserver 判斷何時進入畫面，觸發動畫
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // ==== 強制「從上方 (y: -50) → y: 0」的初始樣式 ====
  const defaultFrom = useMemo(
    () => ({
      filter: 'blur(10px)',
      opacity: 0,
      y: -50,
    }),
    []
  );

  // ==== 強制「輕微模糊 (y: 5) → 清晰 (y: 0)」的中後段樣式 ====
  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: 5,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
      },
    ],
    []
  );

  // 如果外部傳了 animationFrom 或 animationTo，就用那個；否則套用我們的 default
  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  // 計算總共要多少個 keyframes（包含起點）
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {elements.map((segment, index) => {
        // 根據 fromSnapshot + toSnapshots 生成 keyframes
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        // 每個 <motion.span> 的延遲依序加上 index * delay
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {/* 空白要換成 &nbsp; 才不會被折行成零長度 */}
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </span>
  );
};

export default BlurText;
