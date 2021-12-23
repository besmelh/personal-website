import './App.css';
import Home from './Pages/Home';
import SubPage from './Pages/SubPage';
import AppDevelopment from './Pages/AppDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import MaskPouch from './Pages/MaskPouch';
import Footsteps from './Pages/Footsteps';
import {BrowserRouter, Routes, Switch, Route} from 'react-router-dom';

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
          </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;
