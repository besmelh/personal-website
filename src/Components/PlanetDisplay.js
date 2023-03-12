import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
// import Spline from '@splinetool/react-spline';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const OuterDiv = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  height: 400px;

  canvas {
    scale: 0.8;
    height: 400px;
  }

  .splineDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
`;

const InnerDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingOuterDiv = styled.div`
  position: relative;
  text-align: center;
  background-color: green;
  height: 400px;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function PlanetDisplay(props) {
  const { image, scene } = props;
  const [isModelLoading, setModelLoading] = useState(true);

  return (
    <OuterDiv>
      <InnerDiv>
        <FadeIn>
          <Spline
            onLoad={() => setTimeout(() => setModelLoading(false), 2000)}
            scene={scene}
            className='splineDiv'
          />
        </FadeIn>
      </InnerDiv>

      {/* <InnerDiv>
        <FadeIn>
          <LoadingOuterDiv>
            <img src={image} />
            <p>Loading...</p>
          </LoadingOuterDiv>
        </FadeIn>
      </InnerDiv> */}

      {/* {isModelLoading && (
        <FadeIn>
          <img src={image} />
          <p>Loading...</p>
        </FadeIn>
      )} */}
    </OuterDiv>
  );
}

export default PlanetDisplay;
