import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
// import Spline from '@splinetool/react-spline';
import PlanetDisplay from './PlanetDisplay';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function PlanetDisplay_Phobigone(props) {
  const { hoverable } = props;
  return (
    <PlanetDisplay
      scene='https://prod.spline.design/EaVEPovGuLXxV1Bk/scene.splinecode'
      placeholder='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-placeholder.png?v=1678729607472'
      href='phobigone'
      hoverable={hoverable}
    />
  );
}

export default PlanetDisplay_Phobigone;
