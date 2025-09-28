import React from 'react';
import { useNavigate } from 'react-router-dom';

const soniclean_3d_model_img = "/images/soniclean/soniclean_open.png";

function PlanetDisplay_SoniClean() {
  const navigate = useNavigate();

  return (
    <div className="icon">
      <img
        src={soniclean_3d_model_img}
        alt="SoniClean 3D Model"
        style={{
          width: "400px",
          transition: "transform 0.2s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => navigate("/soniclean")}
      />
    </div>
  );
}

export default PlanetDisplay_SoniClean;
