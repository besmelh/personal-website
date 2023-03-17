import React from 'react';
import styled from 'styled-components';

import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import DevProjectSection from '../Components/DevProjectSection';
import { motion } from 'framer-motion';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay from '../Components/PlanetDisplay';
import PlanetDisplay_Phobigone from '../Components/PlanetDisplay_Phobigone';
import VideoPlayer from '../Components/VideoPlayer';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';
import HomeButton from '../Components/HomeButton';

const ImageRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3%;
  text-align: center;

  & img {
    width: 100%;
  }

  & p {
    margin-bottom: 0;
  }
`;

const ImageCol = styled.div`
  /* width: 30%; */
`;

function Phobigone(props) {
  const transition = { duration: 0.5, type: 'spring' };

  const { imageDetails, ...other } = props;
  const src =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/apps-planet.glb?v=1642024423999';

  return (
    <div>
      <ScrollToTop>
        <Header stars topGradient>
          <div className='icon'>
            <PlanetDisplay_Phobigone />
          </div>

          <div>
            <h2>Phobigone</h2>
            <h4>
              VR game application to help users overcome their phobias (fear of
              the dark, heights, small spaces). Developed in Unity for Oculus.
            </h4>
          </div>
        </Header>

        <div initial={{ opacity: 1 }}>
          <Content homeButton>
            {/* ********* phobigone ********* */}
            <div>
              <h1>About Phobigone</h1>
              <p>
                Phobigone is a VR app, that allows users to confront their fears
                in a safe virtual environment. Users get to choose from 3
                scenarios that test one's fear of the dark, heights, and tight
                spaces. In each scenario, the user must complete a task to
                overcome the fear with which they are confronted with.
              </p>
              <p style={{ marginBottom: '50px' }}>
                The main role I played in this group project was designing the
                fear of heights scene. The main cityscape and bridges that the
                user crosses were placed. As was as elements to make the secene
                more liveley and immersive, such as the moving cars on the road,
                flying birds in the sky, and walking pedestrians on the
                sidewalk.
              </p>
              <ImageRow>
                <ImageCol>
                  <FramedDiv>
                    <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-dark.png?v=1678982363456' />
                  </FramedDiv>
                  <h3>Fear of the Dark</h3>
                  <p>
                    Find a light switch in a dark room using a flashlight with
                    limited battery.
                  </p>
                </ImageCol>
                <ImageCol>
                  <FramedDiv>
                    <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-heights.png?v=1678982362408' />
                  </FramedDiv>
                  <h3>Fear of the Heights</h3>
                  <p>
                    Cross over to a platform from the roof of a building using a
                    wooden bridge.
                  </p>
                </ImageCol>
                <ImageCol>
                  <FramedDiv>
                    <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-tight.png?v=1678982361714' />
                  </FramedDiv>
                  <h3>Fear of Tight Spaces</h3>
                  <p>
                    Continually press a button in the middle of a room to shrink
                    the space.
                  </p>
                </ImageCol>
              </ImageRow>
            </div>
            <Divider style={{ margin: '80px auto' }} />
            <div>
              <h1>Demo Video</h1>
              <FramedDiv>
                <VideoPlayer
                  height='600px'
                  url='https://www.youtube.com/watch?v=z7GhZehCUkI'
                />
              </FramedDiv>
            </div>

            {/* add screenshots of the heights scene */}
          </Content>
        </div>
      </ScrollToTop>
    </div>
  );
}

export default Phobigone;
