import React from 'react';
import PlanetDisplay from './PlanetDisplay';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const soniclean_3d_model_img = "/images/soniclean/soniclean_open.png";

function PlanetDisplay_SoniClean(props) {
  const { hoverable } = props;
  return (
    <PlanetDisplay
      scene='https://prod.spline.design/WqcSCn2KQxGj2JDx/scene.splinecode'
      placeholder={soniclean_3d_model_img}
      href='soniclean'
      hoverable={hoverable}
    />
  );
}

export default PlanetDisplay_SoniClean;
