import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import NewGallery from '../Components/NewGallery';

const ButtonsList = styled.div`
  & button{
    margin-right: 15px;
  }
`

function AboutMe() {

  const demoimg = "https://previews.123rf.com/images/yuliarudenko/yuliarudenko1906/yuliarudenko190600078/124795732-cute-happy-smiling-funny-potato-vector-flat-cartoon-character-illustration-icon-design-isolated-on-w.jpg"
  return (
    <div>


      <Header stars>
          <h2 style={{marginRight: "20px"}}>About Me</h2>
          <h4>A little more information about me.</h4>
      </Header>

      <Content>

      <NewGallery>
        <img src={demoimg}/>
        <img src={demoimg}/>
        <img src={demoimg}/>
      </NewGallery>

      <div style={{marginBottom:"500px"}}>
      </div>
      
        <LeftRightContainer>
            <div className="container-small">
              <FramedDiv>
                <img src = "https://i.ibb.co/DLJd5zT/home-me.jpg"></img>
              </FramedDiv>
            </div>

            <div className="container-medium">
                <p>Hello, I'm Besmelh (Bas-mal-ah) Alshaalan! I'm from Saudi Arabia, and currently a junior at the University of Rochester. I'm majoring in Computer Science and minoring in Digital Media Studies. I have experience in Software Development, graphic designing, as well as digital marketing. And in my free time, I sometimes bake, play the ukulele, or watch cartoons!</p>
                
                <ButtonsList>
                  <MyButton href="https://drive.google.com/file/d/1d2gmDO29PjthNws-rth2ulxlUtvvQhFP/view?usp=sharing">
                    <Icon icon="fe:document" />
                    Resume
                  </MyButton>

                  <MyButton href="https://www.linkedin.com/in/besmelh-alshaalan/">
                    <Icon icon="entypo-social:linkedin-with-circle"/>
                    LinkedIn
                  </MyButton>

                  <MyButton href="mailto:balshaal@u.rochester.edu">
                    <Icon icon="clarity:email-solid"/>
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
