import React, { useState } from 'react';
import './HoseText.scss';

// 載入子組件
import QuizResults from './QuizResults'; // ‼️ 請確認此路徑是否正確

// 載入每題對應圖片
import q1Img from '../../../images/text/textbaclground1.jpg';
import q2Img from '../../../images/text/textbaclground2.jpg';
import q3Img from '../../../images/text/textbaclground3.jpg';
import q4Img from '../../../images/text/textbaclground4.jpg';
import q5Img from '../../../images/text/textbaclground5.jpg';

// 載入所有戶型推薦結果的圖片 (‼️ 請確認檔名與路徑)
import resultA1 from '../../../images/sixhouse/Six-apartment-types01.jpg';
import resultA2 from '../../../images/sixhouse/Six-apartment-types02.jpg';
import resultB1 from '../../../images/sixhouse/Six-apartment-types03.jpg';
import resultB2 from '../../../images/sixhouse/Six-apartment-types04.jpg';
import resultC1 from '../../../images/sixhouse/Six-apartment-types05.jpg';
import resultC2 from '../../../images/sixhouse/Six-apartment-types06.jpg';


// 建立戶型資料庫
const houseTypes = [
  {
    id: 'A1',
    name: 'A1 微光系列',
    sqft: '15 坪',
    image: resultA1,
    title: '一人世界，或兩人共享的自在小宅',
    features: ['喜歡靜謐、個人風格強烈的生活空間', '渴望有個專屬角落安放情緒與日常'],
    tags: ['一人', '兩人', '約 15 坪以下', '臥室寧靜舒適', '安靜不打擾、空間夠就好']
  },
  {
    id: 'A2',
    name: 'A2 起居系列',
    sqft: '20 坪',
    image: resultA2,
    title: '剛起步的小家庭或好友共居',
    features: ['希望空間靈活、功能齊全又不失溫度', '尋找理想的「第一個家」'],
    tags: ['兩人', '三～四人（小家庭）', '16–22 坪', '客廳活動自在', '書房／工作空間']
  },
  {
    id: 'B1',
    name: 'B1 暖巢系列',
    sqft: '28 坪',
    image: resultB1,
    title: '三～四人小家庭',
    features: ['喜歡家庭互動的客廳空間', '重視流暢動線與簡單易用的智慧設備'],
    tags: ['三～四人（小家庭）', '23–28 坪', '客廳活動自在', '不太會用，但希望簡單上手', '喜歡有客廳招待朋友／家庭互動']
  },
  {
    id: 'B2',
    name: 'B2 安恬系列',
    sqft: '32 坪',
    image: resultB2,
    title: '四人以上家庭，含長輩或孩童',
    features: ['需要有彈性與分區的生活場域', '重視照護與休憩的平衡空間'],
    tags: ['四人以上（含長輩）', '30 坪以上', '需要長輩居家安全警示', '有長輩或孩子，需要共用與獨立空間平衡']
  },
  {
    id: 'C1',
    name: 'C1 恆逸系列',
    sqft: '38 坪',
    image: resultC1,
    title: '三代同堂、多子女家庭',
    features: ['每位成員都需保有獨立與共聚的空間', '渴望穩定、寬敞又有溫度的長久住所'],
    tags: ['四人以上（含長輩）', '30 坪以上', '想有自動偵測與安全監控', '需要長輩居家安全警示', '有長輩或孩子，需要共用與獨立空間平衡']
  },
  {
    id: 'C2',
    name: 'C2 睿境系列',
    sqft: '45 坪以上',
    image: resultC2,
    title: '六人以上、重視隱私與尊榮的大家庭',
    features: ['每人擁有獨立空間又不失家庭互動', '追求風格、格局與智慧設備的極致生活境界'],
    tags: ['四人以上（含長輩）', '30 坪以上', '想有自動偵測與安全監控', '重視採光與動線設計']
  }
];


// 問卷資料
const questions = [
  { id: 1, text: '請問目前你的家庭人數？', options: ['一人', '兩人', '三～四人（小家庭）', '四人以上（含長輩）'] },
  { id: 2, text: '你平常在家最重視哪種空間？', options: ['臥室寧靜舒適', '客廳活動自在', '廚房料理方便', '書房／工作空間'] },
  { id: 3, text: '你對智慧家居的期待是？', options: ['能遠端控制冷氣與燈光就好', '想有自動偵測與安全監控', '需要長輩居家安全警示', '不太會用，但希望簡單上手'] },
  { id: 4, text: '你比較喜歡哪種生活型態？', options: ['安靜不打擾、空間夠就好', '喜歡有客廳招待朋友／家庭互動', '有長輩或孩子，需要共用與獨立空間平衡', '重視採光與動線設計'] },
  { id: 5, text: '你希望的總坪數大約是？', options: ['約 15 坪以下', '16–22 坪', '23–28 坪', '30 坪以上'] }
];

// 對應每題左側背景圖
const images = [q1Img, q2Img, q3Img, q4Img, q5Img];

// 推薦邏輯 (完整版)
function getRecommendation(answers) {
  const scores = houseTypes.map(type => ({ ...type, score: 0 }));

  answers.forEach(answer => {
    if (!answer) return;
    scores.forEach(houseType => {
      if (houseType.tags.includes(answer)) {
        houseType.score++;
      }
    });
  });

  scores.sort((a, b) => b.score - a.score);
  console.log("All scores:", scores);
  
  // 回傳分數最高的 1 組，若要回傳 2 組可改為 .slice(0, 2)
  return scores.slice(0, 1);
}

export default function HoseText() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const currentQ = questions[step];

  const selectOption = opt => {
    const newAns = [...answers];
    newAns[step] = opt;
    setAnswers(newAns);
  };

  const next = () => {
    if (!answers[step]) return;
    if (step < questions.length) {
       setStep(step + 1);
    }
  };

  const prev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setAnswers(Array(questions.length).fill(null));
    setStep(0);
  };

  // ✅ 全部答完，顯示推薦結果
  if (step === questions.length) {
    const recommendations = getRecommendation(answers);
    return (
      <section className="hose-text hose-text--results">
        <div className="hose-text__results-wrapper">
          {recommendations.map(rec => (
            <QuizResults key={rec.id} resultData={rec} />
          ))}
          <div className="hose-text__restart-container">
            <button className="hose-text__next" onClick={restart}>
              重新開始
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 問答進行中畫面
  return (
    <section className="hose-text">
      <div
        className="hose-text__left"
        style={{ backgroundImage: `url(${images[step]})` }}
      />
      <div className="hose-text__right">
        <div className="hose-text__content">
          <h2 className="hose-text__title">Q{currentQ.id}. {currentQ.text}</h2>
          <ul className="hose-text__options">
            {currentQ.options.map(opt => (
              <li key={opt}>
                <button
                  className={answers[step] === opt ? 'hose-text__btn--selected' : ''}
                  onClick={() => selectOption(opt)}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hose-text__nav-buttons">
          {step > 0 && (
            <button className="hose-text__back" onClick={prev}>
              上一題
            </button>
          )}
          <button
            className="hose-text__next"
            onClick={next}
            disabled={!answers[step]}
          >
            {step < questions.length - 1 ? '下一題' : '查看推薦'}
          </button>
        </div>
      </div>
    </section>
  );
}