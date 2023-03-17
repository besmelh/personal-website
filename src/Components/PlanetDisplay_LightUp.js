import React from 'react';
import PlanetDisplay from './PlanetDisplay';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function PlanetDisplay_LightUp(props) {
  const { hoverable } = props;
  return (
    <PlanetDisplay
      scene='https://prod.spline.design/5j9tYLYoloBdlK50/scene.splinecode'
      placeholder='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/lightup-placeholder.png?v=1678731891825'
      href='lightup'
      hoverable={hoverable}
    />
  );
}

export default PlanetDisplay_LightUp;
