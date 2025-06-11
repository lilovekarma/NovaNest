import "./SixHouse.scss";
import Navbar from './styles/components/navbar/Navbar';
import SixHousesCover from './styles/components/SixHouse/SixHousesCover';

import SixHouse1 from './styles/components/SixHouse/SixHouse1';
import SixHouse2 from './styles/components/SixHouse/SixHouse2';
import Footer from './styles/components/home/footer/Footer';


/* 圖片 */
import SixHouseImg1 from '../src/images/sixhouse/Six-apartment-types01.jpg';
import SixHouseImg2 from '../src/images/sixhouse/Six-apartment-types02.jpg';
import SixHouseImg3 from '../src/images/sixhouse/Six-apartment-types03.jpg';
import SixHouseImg4 from '../src/images/sixhouse/Six-apartment-types04.jpg';
import SixHouseImg5 from '../src/images/sixhouse/Six-apartment-types05.jpg';
import SixHouseImg6 from '../src/images/sixhouse/Six-apartment-types06.jpg';
function SixHouse() {
  return (
    <>
      <Navbar/>

      <div className="sixhousepage1">
        <SixHousesCover />
      </div>

      <div className="sixhousepage2">
        <SixHouse1 imageUrl={SixHouseImg1}
          title="微光系列"
          subtitle="15坪｜1房1廳1衛1廚"
          features="
以城市微光為靈感，打造精巧又充滿溫度的私密空間。
適合生活步調簡約、重視個人風格與靜謐感的使用者。
從獨處的靜謐夜晚，到共享的慵懶週末，每一刻都恰如其分地安放情感與日常。"
          tags={['單身', '情侶']}
          seriesNum="01" />
      </div>

      <div className="sixhousepage3">
        <SixHouse2 imageUrl={SixHouseImg2}
          title="起居系列"
          subtitle="20坪｜2房1廳1衛1廚"
          features="
專為剛起步的家庭或好友共居設計，兼具靈活性與收納機能。
主臥與次臥的獨立配置，讓每位居住者都能擁有適度的空間感。
日常起居在有限坪數中展現最大舒適，是理想的「第一個家」。"
          tags={['小家庭', '租屋族']}
          seriesNum="02" />
      </div>

      <div className="sixhousepage2">
        <SixHouse1 imageUrl={SixHouseImg3}
          title="暖巢系列"
          subtitle="28坪｜3房2廳1.5衛1廚"
          features="
重視家庭互動與成員間的關係連結，是溫馨家庭的最佳舞台。
1.5衛設計有效減少家庭成員早晨的擁擠感，增進生活流暢度。
孩子嬉戲、夫妻對話、三餐共聚，家的溫度從這裡開始蔓延。"
          tags={['核心家庭', '親子']}
          seriesNum="03" />
      </div>

      <div className="sixhousepage3">
        <SixHouse2 imageUrl={SixHouseImg4}
          title="安恬系列"
          subtitle="32坪｜3房2廳2衛1廚"
          features="
在三代共居與彈性空間之間找到完美平衡，設有兩個客廳供自由規劃。
可作為閱讀、照護或休憩空間，滿足每位家庭成員的生活習慣。
雙衛設計讓生活更加自在，也避免早晚尖峰使用的排隊壓力。"
          tags={['長者同住', '機能住宅']}
          seriesNum="04" />
      </div>

      <div className="sixhousepage2">
        <SixHouse1 imageUrl={SixHouseImg5}
          title="恆逸系列"
          subtitle="38坪｜4房2廳2衛1廚"
          features="
恆逸，象徵長久與安定，為三代同堂或多子女家庭提供寬敞的安心居所。
四間臥室滿足每位成員的獨立性，雙廳配置加強空間互動與彈性用途。
讓長輩的安穩、中年的穩重、孩子的活潑，在同一屋簷下和諧共存。"
          tags={['三代同堂', '多子女']}
          seriesNum="05" />
      </div>

      <div className="sixhousepage3">
        <SixHouse2 imageUrl={SixHouseImg6}
          title="睿境系列"
          subtitle="45坪以上｜5房2廳3衛1廚"
          features="
「睿」象徵智慧與格局，「境」代表生活境界，為高端居住而生。
五房三衛的奢適配置，為大家族提供獨立而不疏離的空間分布。
生活不僅是安頓身心，更是風格與尊榮的展現，每一處皆講究、皆從容。"
          tags={['高資產', '大家族']}
          seriesNum="06" />
      </div>
      <Footer />
    </>
  )
}

export default SixHouse;
