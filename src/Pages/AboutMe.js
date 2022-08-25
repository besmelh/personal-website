import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const ButtonsList = styled.div`
  & button {
    margin-right: 15px;
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
              Hello, I'm Besmelh (Bas-mal-ah) Alshaalan! I'm from Saudi Arabia,
              and currently a junior at the University of Rochester. I'm
              majoring in Computer Science and minoring in Digital Media
              Studies. I have experience in Software Development, graphic
              designing, as well as digital marketing. And in my free time, I
              sometimes bake, play the ukulele, or watch cartoons!
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

              <MyButton href='mailto:balshaal@u.rochester.edu'>
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
