import React from 'react';
import AstronautModel from '../Components/AstronautModel2';
import './Demo.css';
import StaryBackground from '../Components/StaryBackground';

function Demo() {

  return (
    <div class="background-container">
      <StaryBackground/>
        <AstronautModel />
    </div>
  );
}

export default Demo;
