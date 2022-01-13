import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import VideoPlayer from '../Components/VideoPlayer';

function Animation() {

  const src = "https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/animation-planet.glb?v=1642069461551"
  const poster = "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
  const alt = "animation planet 3d model"
  const modelDimension = "400px"

  return (
    <div>
      <Header className="icon">
         <div className="icon">          
              <model-viewer
              src={src}
              poster={poster}
              alt={alt}
              shadow-intensity="0"
              auto-rotate
              camera-controls
              ar
              style={{height: modelDimension, width: modelDimension}}
              ></model-viewer>
          </div>
          <div className="inPageText">
              <h1>Animations</h1>
              <h3>Some short animated videos I've worked on.</h3>
          </div>
         </Header>

      <Content>

        <LeftRightContainer>
            <div className="container-small">
                <h2>A Dream</h2>
                <p>A boy has a futuristic nightmare based on his actions. What will he do to change that nightmare when he wakes up?</p>
            </div>

            <div className="container-medium">
                <FramedDiv style={{height: "200px"}}>
                    <VideoPlayer style={{display: "contents"}} url="https://www.youtube.com/watch?v=X0R6MV_F49o&t=34s" />
                </FramedDiv>
            </div>
        </LeftRightContainer>

      </Content>

    </div>
  );
}

export default Animation;
