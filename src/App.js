import {Suspense, lazy} from 'react';
import './App.css';
import Home from './Pages/Home';
// import AboutMe from './Pages/AboutMe';
// import AppDevelopment from './Pages/AppDevelopment';
// import WebDevelopment from './Pages/WebDevelopment';
// import TutatainBakery from './Pages/TutatainBakery';
// import Animation from './Pages/Animation';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
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

            <Suspense fallback={<div>Loading...</div>}>
              <Route path="about-me" element={<AboutMe/>}/>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
              <Route path="app-development" element={<AppDevelopment/>}/>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
              <Route path="web-development" element={<WebDevelopment/>}/>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
              <Route path="animation" element={<Animation/>}/>
            </Suspense>
            
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="tutatain-bakery" element={<TutatainBakery/>}/>
            </Suspense>

          </Routes>
        </BrowserRouter>
        <Footer/>
     </div>
  );
}

export default App;
