import "@google/model-viewer/dist/model-viewer";
import React from "react";



function AstronautModel2() {
  
  const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
        
  return (
    <model-viewer
    src="models/Astronaut.glb"
    ios-src=""
    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
    style={{height: "500px", width: "500px"}}
  ></model-viewer>
  );
}

export default AstronautModel2;
