import React from 'react';
import PlanetDisplay from './PlanetDisplay';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function PlanetDisplay_BoppityBopLofi(props) {
  const { hoverable } = props;
  return (
    <PlanetDisplay
      scene='https://prod.spline.design/dYMHXiEmkVHH4VEG/scene.splinecode'
      placeholder='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/boppity-bop-lofi-placeholder.png?v=1678731000208'
      href='boppity-bop-lofi'
      hoverable={hoverable}
    />
  );
}

export default PlanetDisplay_BoppityBopLofi;
