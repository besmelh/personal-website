import './App.css';
import Home from './Pages/Home';
import SubPage from './Pages/SubPage';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import MaskPouch from './Pages/MaskPouch';
import Footsteps from './Pages/Footsteps';
import MarketingOnCampus from './Pages/MarketingOnCampus';
import ADream from './Pages/ADream';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import IRead from './Pages/IRead';

function App() {
  return (
    <div className="App">     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="subpage" element={<SubPage/>}/>
            <Route path="app-development" element={<AppDevelopment/>}/>
            <Route path="web-development" element={<WebDevelopment/>}/>
            <Route path="tutatain-bakery" element={<TutatainBakery/>}/>
            <Route path="mask-pouch" element={<MaskPouch/>}/>
            <Route path="footsteps" element={<Footsteps/>}/>
            <Route path="marketing-on-campus" element={<MarketingOnCampus/>}/>
            <Route path="a-dream" element={<ADream/>}/>
            <Route path="iread" element={<IRead/>}/>
          </Routes>
        </BrowserRouter>

        <Footer/>
     </div>
  );
}

export default App;