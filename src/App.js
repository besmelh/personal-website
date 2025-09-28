import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import "@google/model-viewer";

import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import AppDevelopment from "./Pages/AppDevelopment";
import WebDevelopment from "./Pages/WebDevelopment";
import TutatainBakery from "./Pages/TutatainBakery";
import Animation from "./Pages/Animation";
import Demo from "./Pages/Demo";
import Phobigone from "./Pages/Phobigone";
import BalanceBuddy from "./Pages/BalanceBuddy";
import BoppityBopLofi from "./Pages/BoppityBopLofi";
import LightUp from "./Pages/LightUp";
import SoniClean from "./Pages/SoniClean";
import SoniClean2 from "./Pages/SoniClean2";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <ScrollToTop> */}
      <AnimatePresence
        mode="wait"
        // initial={false}
      >
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          {/* projects */}
          <Route path="phobigone" element={<Phobigone />} />
          <Route path="balancebuddy" element={<BalanceBuddy />} />
          <Route path="soniclean" element={<SoniClean />} />
          <Route path="soniclean2" element={<SoniClean2 />} />
          <Route path="boppity-bop-lofi" element={<BoppityBopLofi />} />
          <Route path="lightup" element={<LightUp />} />

          {/* original pages */}
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="vr-mobile-apps" element={<AppDevelopment />} />
          <Route path="animation" element={<Animation />} />
          <Route path="tutatain-bakery" element={<TutatainBakery />} />
          <Route path="demo" element={<Demo />} />
        </Routes>
      </AnimatePresence>
      {/* </ScrollToTop> */}
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
