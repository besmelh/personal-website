
import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import MyButton from '../Components/MyButton';
import IconAndTitle from '../Components/IconAndTitle';
import { Icon } from '@iconify/react';
import ReactPlayer from "react-player";


function AppDevelopment() {
  return (
    <div className="AppDevelopment">
      <Header>
        <h2>App Development</h2>
        <h4>Below are some of the iOS apps I made with Swift.</h4>
      </Header>


      <Content>

        <LeftRightContainer>
        <div className="container-medium">
          <img src={require(`../Images/starshipadventure-ss.png`).default}/>
        </div>

        <div className="container-small">
          <IconAndTitle width="50px">
            <img src={require(`../Images/starshipadventure-icon.png`).default}/>
            <h2>Starship Adventure</h2>
          </IconAndTitle>

          <p>Starship Adventure is a game where the user tries to find the correct angle and velocity to fly the rocket from Earth and land safely on Mars. On each round Mars is placed at a different location.</p>          
          <p className="tinytext">This app was made by my team and I for our 48-hour Hackathon submission for CSC214 - Fall 2020 - University of Rochester</p>

        </div>
        </LeftRightContainer>

        <MyButton>
          helloo
        </MyButton>

      </Content>




    </div>
  );
}

export default AppDevelopment;
