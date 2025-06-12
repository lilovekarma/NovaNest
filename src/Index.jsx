import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import SixHouse from "./SixHouse";
import HouseTypeTest from "./HouseTypeTest";
import AppExhibit from "./AppExhibit";




function Index() {
  return (
    // 【新增這裡】告訴 Router，你網站的基礎路徑是 "/NovaNest"
    <Router basename="/NovaNest">
      <Routes>
        {/* 現在這個 path="/" 會對應到 "/NovaNest/" 這個網址 */}
        <Route path="/" element={<HomePage />} />
         {/* 2.【在這裡新增】規則二：戶型 */}
        <Route path="/SixHouse" element={ <SixHouse/>} />
         {/* 3.【在這裡新增】規則三：測驗 */}
         <Route path="/HouseTypeTest" element={ <HouseTypeTest/>} />
         {/* 3.【在這裡新增】規則四：測驗 */}
         <Route path="/AppExhibit" element={ <AppExhibit/>} />

       
      </Routes>
    </Router>
  );
}

export default Index;