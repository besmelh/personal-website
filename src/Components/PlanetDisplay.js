import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
// import Spline from '@splinetool/react-spline';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const scale = '1';
const width = '400';
const height = '400';
const width_clickable = width / 1.2;
const height_clickable = height / 1.5;

const OuterDiv = styled.div`
  position: relative;
  /* background-color: red; */
  width: ${width}px;
  height: ${height}px;

  canvas {
    scale: ${scale};
    height: ${height}px;
    /* background-color: green; */
  }

  .splineDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height}px;
  }
`;

const InnerDiv = styled.div`
  position: absolute;
  width: ${width}px;
  height: ${height}px;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingOuterDiv = styled.div`
  position: relative;
  text-align: center;
  background-color: grey;
  height: ${height}px;

  p,
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ClickableZone = styled.div`
  width: ${width_clickable}px;
  height: ${height_clickable}px;
  /* background-color: darkGrey; */
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

      {/* {isModelLoading && (
        <InnerDiv>
          <FadeIn>
            <LoadingOuterDiv>
              <img src={image} />
              <p>Loading...</p>
            </LoadingOuterDiv>
          </FadeIn>
        </InnerDiv>
      )} */}

      <InnerDiv>
        <FadeIn>
          <LoadingOuterDiv>
            <img src={image} />
            <p>Loading...</p>
          </LoadingOuterDiv>
        </FadeIn>
      </InnerDiv>

      {/* <InnerDiv>
        <ClickableZone />
      </InnerDiv> */}
    </OuterDiv>
  );
}

export default PlanetDisplay;
