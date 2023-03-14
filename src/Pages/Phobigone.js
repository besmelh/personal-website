import React from 'react';
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

function Phobigone(props) {
  const transition = { duration: 0.5, type: 'spring' };

  const { imageDetails, ...other } = props;
  const src =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/apps-planet.glb?v=1642024423999';

  return (
    <div>
      <ScrollToTop>
        <Header stars>
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
          <Content noHomeButton>
            {/* ********* phobigone ********* */}
            <LeftRightContainer>
              <div className='container-xsmall'>
                <p>
                  Phobigone is a VR app, that allows users to confront their
                  fears in a safe virtual environment. Users get to choose from
                  3 scenarios that test one's fear of the dark, heights, and
                  tight spaces. In each scenario, the user must complete a task
                  to overcome the fear with which they are confronted with.
                </p>

                <p>
                  The main role I played in this group project was designing the
                  fear of heights scene. The main cityscape and bridges that the
                  user crosses were placed. As was as elements to make the
                  secene more liveley and immersive, such as the moving cars on
                  the road, flying birds in the sky, and walking pedestrians on
                  the sidewalk.
                </p>
                <MyButton href='https://sites.google.com/u.rochester.edu/phobigone-vr/home?authuser=0'>
                  {' '}
                  <Icon icon='gg:website' inline={true} />
                  Learn more
                </MyButton>
              </div>
              <div className='container-large' style={{ height: '500px' }}>
                <VideoPlayer url='https://www.youtube.com/watch?v=z7GhZehCUkI' />
              </div>
            </LeftRightContainer>

            {/* add screenshots of the heights scene */}
          </Content>
        </div>
      </ScrollToTop>
    </div>
  );
}

export default Phobigone;
