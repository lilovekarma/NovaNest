import React from 'react';
import './QuizResults.scss';
// 假設 AnimatedButton 在這個路徑 (‼️ 請確認)
import AnimatedButton from '../btn/AnimatedButton';

const QuizResults = ({ resultData }) => {
    // 如果沒有收到資料，就不要渲染任何東西，避免錯誤
    if (!resultData) {
        return null;
    }

    return (
        <section className="quiz-results">
            <div className="content">
                <h2>你最適合的戶型是</h2>
                {/* 動態顯示戶型名稱和坪數 */}
                <h3>{resultData.name}（{resultData.sqft}）</h3>
                <p className="desc-title">適合你這樣的生活：</p>
                <ul className="feature-list">
                    {/* 動態顯示主要標題和特色列表 */}
                    <li>{resultData.title}</li>
                    {resultData.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="QuizResults__button-container">
                    <AnimatedButton
                        className="btn-homebtn"
                        // 點擊事件可以帶上戶型 ID，方便後續操作
                        onClick={() => console.log(`查看 ${resultData.id} 詳情`)}
                    >
                        查看詳情
                    </AnimatedButton>
                </div>
            </div>
            <div className="image">
                {/* 動態顯示圖片和 alt 文字 */}
                <img src={resultData.image} alt={`${resultData.name} 示意圖`} />
            </div>
        </section>
    );
};

export default QuizResults;