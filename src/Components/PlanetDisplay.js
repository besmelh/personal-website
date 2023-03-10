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

function PlanetDisplay(props) {
  const { src, href, style, className, ...other } = props;

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(href || '/');
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <StyledImageDisplay
        style={style}
        onClick={handleRoute}
        className={className}
      >
        <Spline scene={src} />
      </StyledImageDisplay>
    </Suspense>
  );
}

export default PlanetDisplay;
