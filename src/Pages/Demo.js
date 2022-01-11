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
        <AstronautModel />
        <AstronautModel />
        <AstronautModel />
        <AstronautModel />
    </div>
  );
}

export default Demo;
