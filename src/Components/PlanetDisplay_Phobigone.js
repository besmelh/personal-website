import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
// import Spline from '@splinetool/react-spline';
import PlanetDisplay from './PlanetDisplay';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function PlanetDisplay_Phobigone(props) {
  return (
    <PlanetDisplay
      image='https://www.transparentpng.com/thumb/cute/TZMwWi-cute-clipart-transparent.png'
      scene='https://prod.spline.design/EaVEPovGuLXxV1Bk/scene.splinecode'
    />
    // <div style={{ backgroundColor: 'pink' }}>
    //   <Spline scene='https://prod.spline.design/EaVEPovGuLXxV1Bk/scene.splinecode' />
    // </div>
  );
}

export default PlanetDisplay_Phobigone;
