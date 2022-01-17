import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import Animation from './Pages/Animation';
import MaskPouch from './Pages/MaskPouch';
import Footsteps from './Pages/Footsteps';
import MarketingOnCampus from './Pages/MarketingOnCampus';
import ADream from './Pages/ADream';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import IRead from './Pages/IRead';
import Demo from './Pages/Demo';
import StaryBackground from './Components/StaryBackground';

function App() {
  return (
    <div className="App">    
        {/* <StaryBackground/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about-me" element={<AboutMe/>}/>
            <Route path="app-development" element={<AppDevelopment/>}/>
            <Route path="web-development" element={<WebDevelopment/>}/>
            <Route path="animation" element={<Animation/>}/>
            <Route path="tutatain-bakery" element={<TutatainBakery/>}/>
            <Route path="demo" element={<Demo/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
     </div>
  );
}

export default App;
