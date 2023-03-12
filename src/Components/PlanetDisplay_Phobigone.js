import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
// import Spline from '@splinetool/react-spline';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

// const StyledImageDisplay = styled.div`
//   transition: transform 0.3s;
//   display: flex;
//   justify-content: center;
//   transform: scale(0.9);

//   &:hover {
//     transform: scale(1.1);
//     cursor: pointer;
//   }
// `;

function PlanetDisplay_Phobigone(props) {
  const [isModelLoading, setModelLoading] = useState(true);

  return (
    <div>
      <Spline
        onLoad={() => setTimeout(() => setModelLoading(false), 2000)}
        scene='https://prod.spline.design/EaVEPovGuLXxV1Bk/scene.splinecode'
      />

      {isModelLoading && (
        <FadeIn>
          <p>Loading...</p>
        </FadeIn>
      )}
    </div>
  );
}

export default PlanetDisplay_Phobigone;
