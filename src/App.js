import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import Animation from './Pages/Animation';
import Demo from './Pages/Demo';
import ScrollToTop from './Components/ScrollToTop';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import "@google/model-viewer";


function App() {
  // const AboutMe = lazy(() => import('./Pages/AboutMe'));
  // const AppDevelopment = lazy(() => import('./Pages/AppDevelopment'));
  // const WebDevelopment = lazy(() => import('./Pages/WebDevelopment'));
  // const TutatainBakery = lazy(() => import('./Pages/TutatainBakery'));
  // const Animation = lazy(() => import('./Pages/Animation'));

  return (
    <div className="App">    
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="about-me" element={<AboutMe/>}/>
              <Route path="vr-mobile-apps" element={<AppDevelopment/>}/>
              <Route path="web-development" element={<WebDevelopment/>}/>
              <Route path="animation" element={<Animation/>}/>
              <Route path="tutatain-bakery" element={<TutatainBakery/>}/>
              <Route path="demo" element={<Demo/>}/>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
        <Footer/>
     </div>
  );
}

export default App;
