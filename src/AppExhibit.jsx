import './AppExhibit.scss'
import Navbar from './styles/components/navbar/Navbar';
import AppFirst from './styles/components/app/AppFirst';
import AppFirst2 from './styles/components/app/AppFirst2';



import Footer from './styles/components/home/footer/Footer';




import "./HouseTypeTest.scss";
function AppExhibit() {
    return (
        <>
            <Navbar />
            <div className="AppExhibit1">
                <AppFirst/>
            </div>
             <div className="AppExhibit2">
                <AppFirst2/>
            </div>
            <Footer/>
    
        </>
    )
}
export default AppExhibit;