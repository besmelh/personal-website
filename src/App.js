import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import Animation from './Pages/Animation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import "@google/model-viewer";


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
          </Routes>
        </BrowserRouter>
        <Footer/>
     </div>
  );
}

export default App;
