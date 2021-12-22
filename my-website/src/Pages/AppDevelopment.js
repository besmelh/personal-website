import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import LeftRightContainer from '../Components/LeftRightContainer';
import MyButton from '../Components/MyButton';
import IconAndTitle from '../Components/IconAndTitle';
import VideoPlayer from '../Components/VideoPlayer';
import { Icon } from '@iconify/react';


function AppDevelopment() {

  
  return (
    <div className="AppDevelopment">
      <Header>
        <h2>App Development</h2>
        <h4>Below are some of the iOS apps I made with Swift.</h4>
      </Header>

      <Content>

        {/* ********* light up ********* */}
        <LeftRightContainer>
        <div className="container-small">
          <IconAndTitle width="50px">
            <img src={require(`../Images/lightup-icon.png`).default}/>
            <h2>Light Up</h2>
          </IconAndTitle>

          <p>LightUp allows users to brainstorm new ideas by generating random words to inspire them. If they like a specific word it can be locked to prevent it from changing when generating new words. Users can also make notes of all their ideas they get so you don't forget them. <br/><br/> Currently available in the App Store, and is localized in English & Arabic.</p>
          
          <MyButton  onClick={()=> window.open("https://www.google.com/", "_blank")}>
            <Icon icon="ant-design:apple-filled" inline={true} />
            View on App Store
          </MyButton>
        </div>

        <div className="container-medium">
          <img src={require(`../Images/lightup-ss.png`).default}/>
        </div>
        </LeftRightContainer>


        {/* ********* starship adventure ********* */}
        <LeftRightContainer>
        <div className="container-medium">
          <img src={require(`../Images/starshipadventure-ss.png`).default}/>
          <VideoPlayer url ="https://www.youtube.com/watch?v=nWvXHZj4lm0" style ={{display:"none"}}/>
        </div>

        <div className="container-small">
          <IconAndTitle width="50px">
            <img src={require(`../Images/starshipadventure-icon.png`).default}/>
            <h2>Starship Adventure</h2>
          </IconAndTitle>

          <p>Starship Adventure is a game where the user tries to find the correct angle and velocity to fly the rocket from Earth and land safely on Mars. On each round Mars is placed at a different location.</p>          
          <p className="tinytext">This app was made by my team and I for our 48-hour Hackathon submission for CSC214 - Fall 2020 - University of Rochester</p>

          <MyButton>
          <Icon icon="bi:play-circle" inline={true} />
            In Action
          </MyButton>
        </div>
        </LeftRightContainer>

        {/* ********* watch what ********* */}
        <LeftRightContainer>
        <div className="container-small">
          <IconAndTitle width="50px">
            <img src={require(`../Images/watchwhat-icon.png`).default}/>
            <h2>Watch What?</h2>
          </IconAndTitle>

          <p>Can't decide on what to watch next? Open the "Watch What" app and swipe through the randomly generated T.V. shows, and double tap on the ones you like to save them to your favorites list!</p>
          <p className="tinytext">This app was made as a project for CSC214 - Fall 2020 - University of Rochester</p>

          <MyButton>
          <Icon icon="bi:play-circle" inline={true} />
            In Action
          </MyButton>
        </div>

        <div className="container-medium">
          <img src={require(`../Images/watchwhat-ss.png`).default}/>
        </div>
        </LeftRightContainer>


        {/* ********* trip rate ********* */}
        <LeftRightContainer>
        <div className="container-medium">
          <img src={require(`../Images/triprate-ss.png`).default}/>
        </div>

        <div className="container-small">
          <IconAndTitle width="50px">
            <img src={require(`../Images/triprate-icon.png`).default}/>
            <h2>TripRate</h2>
          </IconAndTitle>

          <p>The app allows the user to log their trips' information, including the trip's name, description, type, number of people accompanied, and the amount of fun they had. There's also a status tab to track information regarding all the trips.</p>          
          <p className="tinytext">This app was made as a project for CSC214 - Fall 2020 - University of Rochester</p>

          <MyButton>
          <Icon icon="bi:play-circle" inline={true} />
            In Action
          </MyButton>
        </div>
        </LeftRightContainer>


      </Content>

    </div>
  );
}

export default AppDevelopment;
