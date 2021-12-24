import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import VideoPlayer from '../Components/VideoPlayer';

function IRead() {

  return (
    <div>
      <Header>
        <h2>iRead Reading Competition</h2>
        <h4>iRead was a national competition held in 2014, where participants showcase their projects related to reading. My submission was a short hand drawn animated film, which was also my first experience in animation.</h4>
      </Header>

      <Content>

        <LeftRightContainer>
            <div className="container-small">
                <h2>Reading Can Change Behavior</h2>
                <p>A cat and a mouse are constantly in dispute. What changes when they start to read books?</p>
            </div>

            <div className="container-medium">
                <FramedDiv style={{height: "200px"}}>
                    <VideoPlayer style={{display: "contents"}} url="https://www.youtube.com/watch?v=OhjRllj1TM8" />
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

export default IRead;
