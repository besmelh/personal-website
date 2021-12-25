import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import VideoPlayer from '../Components/VideoPlayer';

function ADream() {

  return (
    <div>
      <Header>
        <h2>A Dream</h2>
        <h4>In High School, the topic of my senior project was "Making Saudi Arabia a more eco-friendly society". As a product for my project, I made an animated video titled "A Dream", two informational sessions for elementary students, along with a research paper.</h4>
      </Header>

      <Content>

        <LeftRightContainer>
            <div className="container-small">
                <h2>A Dream</h2>
                <p>A boy has a futuristic nightmare based on his actions. What will he do to change that nightmare when he wakes up?</p>
            </div>

            <div className="container-medium">
                <FramedDiv style={{height: "250px", width: "444px"}}>
                    <VideoPlayer style={{display: "contents"}} url="https://www.youtube.com/watch?v=X0R6MV_F49o&t=34s" />
                </FramedDiv>
            </div>
        </LeftRightContainer>

      </Content>

    </div>
  );
}

export default ADream;
