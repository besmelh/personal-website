import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import VideoPlayer from '../Components/VideoPlayer';
import Divider from '../Components/Divider';

function Animation() {

  const src = "https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/animation-planet.glb?v=1642069461551"
  const poster = "https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/animation-planet.png?v=1642120108239"
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
              style={{height: modelDimension, width: modelDimension}}
              seamless-poster
              ></model-viewer>
          </div>
          <div>
              <h2>Animations</h2>
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


        <Divider/>


        <LeftRightContainer>
            <div className="container-small">
                <h2>Reading Can Change Behavior</h2>
                <p>A cat and a mouse are constantly in dispute. What changes when they start to read books?</p>
            </div>

            <div className="container-medium">
                <FramedDiv style={{height: "200px"}}>
                    <VideoPlayer style={{display: "contents"}} url="https://www.youtube.com/watch?v=8Ti39xi9QpQ" />
                </FramedDiv>
            </div>
        </LeftRightContainer>

        <LeftRightContainer>
            <div className="container-medium">
                <FramedDiv>
                  <img src="https://i.ibb.co/Ns4qWvm/iread-bookmark.webp"/>
                </FramedDiv>
            </div>

            <div className="container-small">
                <p>Fun Fact: the film was based on a bookmark I designed in Kindergarten for a school competition.</p>
            </div>
        </LeftRightContainer>

</Content>

    </div>
  );
}

export default Animation;
