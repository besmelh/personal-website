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
  width: ${width}px;
  height: ${height}px;
  transition: all 0.2s ease-in-out;

  canvas {
    scale: ${scale};
    height: ${height}px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingOuterDiv = styled.div`
  position: relative;
  text-align: center;
  /* background-color: grey; */
  display: flex;
  align-items: center;
  width: ${width_clickable}px;
  height: ${height_clickable}px;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
  }
`;

const ClickableZone = styled.a`
  width: ${width_clickable}px;
  height: ${height_clickable}px;
`;

function PlanetDisplay(props) {
  const { image, scene, placeholder, href, hoverable } = props;

  const [isModelLoading, setModelLoading] = useState(true);
  const [hover, setHover] = useState();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <OuterDiv
      style={{
        scale: hover ? '1.1' : '1',
        cursor: hover ? 'pointer' : 'default',
      }}
    >
      <InnerDiv>
        <FadeIn>
          <Spline
            onLoad={() => setTimeout(() => setModelLoading(false), 2000)}
            scene={scene}
            className='splineDiv'
          />
        </FadeIn>
      </InnerDiv>

      {isModelLoading && (
        <InnerDiv>
          <FadeIn>
            <LoadingOuterDiv>
              <img src={placeholder} />
              <p>Loading...</p>
            </LoadingOuterDiv>
          </FadeIn>
        </InnerDiv>
      )}

      {hoverable && (
        <InnerDiv>
          <ClickableZone
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={href}
          />
        </InnerDiv>
      )}
    </OuterDiv>
  );
}

export default PlanetDisplay;
