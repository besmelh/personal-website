import React, { Suspense, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Spline from '@splinetool/react-spline';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const StyledImageDisplay = styled.div`
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  transform: scale(0.9);

  &:hover {
    /* transform: scale(1.1); */
    cursor: pointer;
  }
`;

function PlanetDisplay_Phobigone(props) {
  const { src, style, className, ...other } = props;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Spline scene='https://prod.spline.design/EaVEPovGuLXxV1Bk/scene.splinecode' />
    </Suspense>
  );
}

export default PlanetDisplay_Phobigone;
