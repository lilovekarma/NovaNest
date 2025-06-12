import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizResults.scss';
import AnimatedButton from '../btn/AnimatedButton'; // ‼️ 請確認路徑

const QuizResults = ({ resultData }) => {
    const navigate = useNavigate();

    // 保護機制：如果父元件沒有傳來 resultData，或者傳來的資料中缺少 id，
    // 就在主控台顯示錯誤，並提示使用者。
    if (!resultData || !resultData.id) {
        console.error("QuizResults 缺少 resultData 或 resultData.id。請檢查 HouseTypeTest 元件的資料定義與傳遞。");
        return <div>測驗結果載入錯誤，請重試。</div>;
    }

    // 按鈕點擊時執行的函式
    const handleViewDetails = () => {
        // 這個函式的工作很簡單：
        // 1. 從 props 取得 resultData.id (這是由 HouseTypeTest 元件決定的)。
        // 2. 將它組裝成一個帶有 hash 的網址，例如 "/SixHouse#house-01"。
        // 3. 使用 navigate 跳轉。
        navigate(`/SixHouse#${resultData.id}`);
    };

    return (
        <section className="quiz-results">
            <div className="content">
                <h2>你最適合的戶型是</h2>
                <h3>{resultData.name}（{resultData.sqft}）</h3>
                <p className="desc-title">適合你這樣的生活：</p>
                <ul className="feature-list">
                    <li>{resultData.title}</li>
                    {resultData.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="QuizResults__button-container">
                    <AnimatedButton
                        className="btn-homebtn"
                        onClick={handleViewDetails}
                    >
                        查看詳情
                    </AnimatedButton>
                </div>
            </div>
            <div className="image">
                <img src={resultData.image} alt={`${resultData.name} 示意圖`} />
            </div>
        </section>
    );
};

export default QuizResults;