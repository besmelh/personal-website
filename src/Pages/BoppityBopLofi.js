import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_BoppityBopLofi from '../Components/PlanetDisplay_BoppityBopLofi';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';
import LeftRightContainer from '../Components/LeftRightContainer';
import VideoPlayer from '../Components/VideoPlayer';
import FramedDiv from '../Components/FramedDiv';
import ButtonsSet from '../Components/ButtonsSet';
import Divider from '../Components/Divider';

function BoppityBopLofi(props) {
  const transition = { duration: 0.5, type: 'spring' };

  return (
    <div>
      <ScrollToTop>
        <Header stars topGradient>
          <div className='icon'>
            <PlanetDisplay_BoppityBopLofi />
          </div>
          <div>
            <h2>Boppity-Bop Lofi</h2>
            <h4>
              Audio visualizer website, with a relaxing window view (buildings,
              trees, clouds) that animates to Lo-fi music.
            </h4>
            <ButtonsSet style={{ margin: '4% 0' }}>
              <MyButton>
                <Icon icon='akar-icons:link-chain' inline={true} />
                Visit Site
              </MyButton>
              <MyButton href='https://boppity-bop-lofi.netlify.app/'>
                <Icon icon='akar-icons:github-fill' inline={true} />
                Source Code
              </MyButton>
            </ButtonsSet>
          </div>
        </Header>

        <div>
          <Content homeButton>
            {/* ********* lofi ********* */}
            <div style={{ margin: '3% auto' }}>
              <h1>About Boppity-Bop Lofi</h1>
              <p>
                After the many hours Lo-fi music helped me stay focused while
                studying, I decided to build Boppity-Bop Lofi. Where users can
                immerse themselves and relax as they watch the scenery sway to
                calm lofi music based on the beats they play.
              </p>
              <p>
                After building the models in Blender, they were imported into a
                React Three Fiber Project. The models were then manipulated to
                scale up or down based on the played music.
              </p>
            </div>

            {/* <Divider style={{ margin: '40px auto' }} /> */}

            <h1>Demo Video</h1>
            <FramedDiv>
              <VideoPlayer height='600px' url='https://youtu.be/6fRc1MhxjDg' />
            </FramedDiv>
            {/* <LeftRightContainer>
              <div className='container-xsmall'>
                <p>
                  After the many hours Lo-fi music helped me stay focused while
                  studying, I decided to build Boppity-Bop Lofi. Where users can
                  immerse themselves and relax as they watch the scenery sway to
                  calm lofi music based on the beats they play.
                </p>
                <p>
                  After building the models in Blender, they were imported into
                  a React Three Fiber Project. The models were then manipulated
                  to scale up or down based on the played music.
                </p>
                <>
                  <MyButton>
                    <Icon icon='akar-icons:link-chain' inline={true} />
                    Visit Site
                  </MyButton>
                  <MyButton
                    style={{ marginTop: '0' }}
                    href='https://boppity-bop-lofi.netlify.app/'
                  >
                    <Icon icon='akar-icons:github-fill' inline={true} />
                    Source Code
                  </MyButton>
                </>
              </div>
              <div className='container-large' style={{ height: '500px' }}>
                <VideoPlayer url='https://youtu.be/6fRc1MhxjDg' />
              </div>
            </LeftRightContainer> */}

            {/* talks about next steps and fixes: upload mp3, quicker, spotify integration, new scenes */}
          </Content>
        </div>
      </ScrollToTop>
    </div>
  );
}

export default BoppityBopLofi;
