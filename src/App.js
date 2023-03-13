import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import TutatainBakery from './Pages/TutatainBakery';
import Animation from './Pages/Animation';
import Demo from './Pages/Demo';
import Phobigone from './Pages/Phobigone';
import BalanceBuddy from './Pages/BalanceBuddy';
import ScrollToTop from './Components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import '@google/model-viewer';

function App() {
  const location = useLocation();
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <div className='App'>
      {/* <BrowserRouter> */}
      {/* <ScrollToTop> */}
      <AnimatePresence
        mode='wait'
        // initial={false}
      >
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
          <Route
            path='phobigone'
            element={<Phobigone imageDetails={imageDetails} />}
          />
          <Route path='balancebuddy' element={<BalanceBuddy />} />
          <Route path='web-development' element={<WebDevelopment />} />
          <Route path='vr-mobile-apps' element={<AppDevelopment />} />
          <Route path='animation' element={<Animation />} />
          <Route path='tutatain-bakery' element={<TutatainBakery />} />
          <Route path='demo' element={<Demo />} />
        </Routes>
      </AnimatePresence>
      {/* </ScrollToTop> */}
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
