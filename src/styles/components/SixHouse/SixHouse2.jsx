import React from 'react';
import './SixHouse2.scss';
import BlurText from '../animations/BlurText'; // 請依你實際路徑調整

export default function SixHouse2({
    imageUrl,
    title,
    subtitle,
    features,
    tags = [],
    seriesNum,
}) {
    return (
        <section className="series2-section">
            <div className="series2-panel">
                {/* 左側文字區 */}
                <div className="series2-panel__content">
                    <h2 className="series2-panel__title">
                        {/* 標題 */}
                        <BlurText
                            text={title}
                            className="series2-panel__title-text"
                            delay={100}
                            animateBy="words"
                        />

                        {/* 撐開中間 */}
                        <div className="series2-panel__spacer" />

                        {/* 編號 */}
                        <BlurText
                            text={seriesNum}
                            className="series2-panel__num"
                            delay={120}
                            animateBy="chars"
                        />
                    </h2>

                    {/* 次標 */}
                    <p className="series2-panel__subtitle">
                        <BlurText
                            text={subtitle}
                            className="series2-panel__subtitle"
                            delay={150}
                            animateBy="words"
                        />
                    </p>

                    {/* 系列特色 */}
                    <div className="series2-panel__features">
                        <BlurText
                            text={String(features || "").trim()}
                            className="series2-panel__features"
                            delay={50}
                            animateBy="words"
                        />
                    </div>

                    {/* Pill */}
                    <div className="series2-panel__tag-pill">
                        <BlurText
                            text={`• 適合族群：${tags.join('、')}`}
                            /* 不要再給它 className="series-panel__tag-pill" */
                            delay={200}
                            animateBy="words"
                        />

                    </div>
                </div>

                {/* 中間分隔線 */}
                <div className="series2-panel__divider" />

                {/* 右側圖片 */}
                <div
                    className="series2-panel__image"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                />
            </div>
        </section>
    );
}
