// src/components/SixHouse1.jsx
import React from 'react';
import './SixHouse1.scss';
import BlurText from '../animations/BlurText'; // <- 改成你的實際路徑

export default function SixHouse1({
    imageUrl,
    title,
    subtitle,
    features,
    tags = [],
    seriesNum,
}) {
    return (
        <section className="series-section">
            <div className="series-panel">
                {/* 左側大圖 */}
                <div
                    className="series-panel__image"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                />
                <div className="series-panel__divider" />

                <div className="series-panel__content">
                    {/* 標題 */}
                    <h2 className="series-panel__title">
                        <BlurText
                            text={title}
                            className="series-panel__title-text"
                            delay={100}
                            animateBy="words"
                        />

                        <div className="series-panel__spacer" />

                        <BlurText
                            text={seriesNum}
                            className="series-panel__num"
                            delay={120}
                            animateBy="chars"
                        />
                    </h2>

                    {/* 次標 */}
                    <p className="series-panel__subtitle">
                        <BlurText
                            text={subtitle}
                            className="series-panel__subtitle"
                            delay={150}
                            animateBy="words"
                        />
                    </p>

                    {/* 特色敘述 */}
                    <div className="series-panel__features">
                        <BlurText
                            text={String(features || "").trim()}
                            className="series-panel__features"
                            delay={50}
                            animateBy="words"
                        />
                    </div>

                    {/* Pill */}
                    <div className="series-panel__tag-pill">
                        <BlurText
                            text={`• 適合族群：${tags.join('、')}`}
                            /* 不要再給它 className="series-panel__tag-pill" */
                            delay={200}
                            animateBy="words"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
{/* <SixHouse1

        imageUrl={SixHouseImg}
        title="微光系列"
        subtitle="15坪｜1房1廳1衛1廚"
        features="
        以城市微光為靈感，打造精巧又充滿溫度的私密空間。
        適合生活步調簡約、重視個人風格與靜謐感的使用者。
        從獨處的靜謐夜晚，到共享的愜懶週末，每一刻都恍如其分地安放情感與日常。
      "
        tags={['單身', '情侶']}
        seriesNum="01" /> */}