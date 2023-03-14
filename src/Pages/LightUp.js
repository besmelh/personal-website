import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_LightUp from '../Components/PlanetDisplay_LightUp';
import styled from 'styled-components';
import Divider from '../Components/Divider';
import LeftRightContainer from '../Components/LeftRightContainer';
import VideoPlayer from '../Components/VideoPlayer';

const ImageRow = styled.div`
  display: flex;
  justify-content: space-around;

  & img {
    width: 20%;
  }
`;

function LightUp(props) {
  const transition = { duration: 0.5, type: 'spring' };

  return (
    <div>
      <ScrollToTop>
        <Header stars>
          <div className='icon'>
            <PlanetDisplay_LightUp />
          </div>

          <div>
            <h2>LightUp</h2>
            <h4>
              An iOS app for brainstorming ideas; it displays random words and
              has the option to write ideas in "sticky notes".
            </h4>
          </div>
        </Header>
        <Divider />
        <div>
          <Content style={{ marginTop: '50px' }}>
            {/* ********* lightup ********* */}
            {/* <LeftRightContainer>
              <div className='container-small'>
                <p>
                  in my efforts to apply my mobile app development knowledge
                  outside of class, LightUp was born after I had no idea of what
                  app ideas to develop. Its main goal is to help the user
                  brainstorm ideas and keep a note of them.
                </p>
              </div>
              <div className='container-medium' style={{ height: '500px' }}>
                <VideoPlayer url='https://youtu.be/P9AHAqrAPxU' />
              </div>
            </LeftRightContainer>
            <Divider /> */}
            <p style={{ marginBottom: '50px' }}>
              in my efforts to apply my mobile app development knowledge outside
              of class, LightUp was born after I had no idea of what app ideas
              to develop. Its main goal is to help the user brainstorm ideas and
              keep a note of them.
            </p>
            <ImageRow>
              <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/lightup-sc-1.webp?v=1678761996650' />
              <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/lightup-sc-2.webp?v=1678761996304' />
              <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/lightup-sc-3.webp?v=1678761995965' />
              <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/lightup-sc-4.webp?v=1678761995427' />
            </ImageRow>
          </Content>
        </div>
      </ScrollToTop>
    </div>
  );
}

export default LightUp;
