import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const ButtonsList = styled.div`
  display: flex;

  & button {
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
`;

function AboutMe() {
  return (
    <div>
      <Header stars>
        <h2 style={{ marginRight: '20px' }}>About Me</h2>
      </Header>

      <Content>
        <LeftRightContainer>
          <div className='container-small'>
            <FramedDiv>
              <img
                src='https://i.ibb.co/DLJd5zT/home-me.jpg'
                alt='personal headshot'
              ></img>
            </FramedDiv>
          </div>

          <div className='container-medium'>
            <p>
              Hello, I'm Besmelh (Bas-mal-ah) Alshaalan! I’m a senior at the
              University of Rochester, pursuing a B.S. in Computer Science, and
              a minor in Digital Media Studies. I am especially interested in
              areas that allow me to utilize my creativity through computer
              programming and visuals like Web and App Development. And I'm
              currently learning more about Computer Graphics.
            </p>

            <ButtonsList>
              <MyButton href='https://github.com/besmelh/resume/blob/master/BesmelhAlshaalan_Resume.pdf'>
                <Icon icon='fe:document' />
                Resume
              </MyButton>

              <MyButton href='https://www.linkedin.com/in/besmelh-alshaalan/'>
                <Icon icon='entypo-social:linkedin-with-circle' />
                LinkedIn
              </MyButton>

              <MyButton href='mailto:besmelh.alshaalan@gmail.com'>
                <Icon icon='clarity:email-solid' />
                E-mail
              </MyButton>
            </ButtonsList>
          </div>
        </LeftRightContainer>
      </Content>
    </div>
  );
}

export default AboutMe;
