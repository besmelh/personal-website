import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import TextAndGallery from '../Components/TextAndGallery';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import Divider from '../Components/Divider';
import VideoPlayer from '../Components/VideoPlayer';

function Footsteps() {

    const posters_gallery = [
        {
            itemId: 'footsteps-poster-2',
            mediaUrl: 'https://i.ibb.co/RPYtqRK/footsteps-poster-2.webp',
            metaData: {
                    type: 'Everyday is Earth day',
                    title: 'sample-title',
                    height: 200,
                    width: 150,
                }
        },
        {
            itemId: 'footsteps-poster-1',
            mediaUrl: 'https://i.ibb.co/26FjZP8/footsteps-poster-1.webp',
            metaData: {
                    type: 'image',
                    title: 'Footsteps',
                    height: 200,
                    width: 250,
                }
        },
        {
            itemId: 'footsteps-poster-3',
            mediaUrl: 'https://i.ibb.co/vwN7pyp/footsteps-poster-3.webp',
            metaData: {
                    type: 'image',
                    title: 'Endless Straws',
                    height: 200,
                    width: 150,
                }
        },
    ]

  return (
    <div>
      <Header>
        <h2>Footsteps</h2>
        <h4>In this project I present the importance of living eco-friendly lives through multiple forms of media. What are we doing as humans to harm our environment, the effects that are happening because of that, and what we could do to solve them.</h4>
      </Header>

      <Content>

            <TextAndGallery
            title="Posters"
            images={posters_gallery}
            />

            <Divider/>

            <LeftRightContainer>
                <div className="container-small">
                    <h2>Short Film</h2>
                    <p>The name of the film "Footsteps" refers to the sound of footsteps heard with every action made in the video. This represents how every single thing has an impact and leaves a footprint behind.</p>
                </div>

                <div className="container-medium">
                    <FramedDiv style={{height: "200px"}}>
                        <VideoPlayer style={{display: "contents"}} url="https://www.youtube.com/watch?v=OhjRllj1TM8" />
                    </FramedDiv>
                </div>


            </LeftRightContainer>



      </Content>

    </div>
  );
}

export default Footsteps;
