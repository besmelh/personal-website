import './App.css';
import Home from './Pages/Home';
import SubPage from './Pages/SubPage';
import AppDevelopment from './Pages/AppDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import MaskPouch from './Pages/MaskPouch';
import Footsteps from './Pages/Footsteps';
import MarketingOnCampus from './Pages/MarketingOnCampus';
import {BrowserRouter, Routes, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="subpage" element={<SubPage/>}/>
            <Route path="app-development" element={<AppDevelopment/>}/>
            <Route path="tutatain-bakery" element={<TutatainBakery/>}/>
            <Route path="mask-pouch" element={<MaskPouch/>}/>
            <Route path="footsteps" element={<Footsteps/>}/>
            <Route path="marketing-on-campus" element={<MarketingOnCampus/>}/>
          </Routes>
        </BrowserRouter>

        <Footer/>
     </div>
  );
}

export default App;
