import React from 'react';
import AstronautModel from '../Components/AstronautModel2';
import './Demo.css';
import StaryBackground from '../Components/StaryBackground';
import useWindowDimensions from '../Hooks/useWindowDimensions';

function Demo() {

  return (
    <div class="background-container" style={{position:"relative", width: "100%", height: "100%"}}>
        <StaryBackground/>
        <AstronautModel />
        <model-viewer
          src="models/web-dev-planet.glb"
          ios-src=""
          poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
          alt="A 3D model of an astronaut"
          shadow-intensity="1"
          auto-rotate
          ar
          style={{height: "500px", width: "500px"}}
        ></model-viewer>
    </div>
  );
}

export default Demo;
