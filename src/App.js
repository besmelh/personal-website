import {lazy} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import "@google/model-viewer";


function App() {
  const AboutMe = lazy(() => import('./Pages/AboutMe'));
  const AppDevelopment = lazy(() => import('./Pages/AppDevelopment'));
  const WebDevelopment = lazy(() => import('./Pages/WebDevelopment'));
  const TutatainBakery = lazy(() => import('./Pages/TutatainBakery'));
  const Animation = lazy(() => import('./Pages/Animation'));

  return (
    <div className="App">    
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
