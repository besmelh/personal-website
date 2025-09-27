import React from 'react';
import PlanetDisplay from './PlanetDisplay';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function PlanetDisplay_SoniClean(props) {
  const { hoverable } = props;
  return (
    <PlanetDisplay
      scene='https://prod.spline.design/uKjBs28q2kCXzTmW/scene.splinecode'
      placeholder='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/balancebuddy-placeholder.png?v=1678730286600'
      href='soniclean'
      hoverable={hoverable}
    />
  );
}

export default PlanetDisplay_SoniClean;
