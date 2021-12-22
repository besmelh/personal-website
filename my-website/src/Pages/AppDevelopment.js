import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import AppDevPageSection from '../Components/AppDevPageSection';


function AppDevelopment() {

const lightupDesc = "LightUp allows users to brainstorm new ideas by generating random words to inspire them. If they like a specific word it can be locked to prevent it from changing when generating new words. Users can also make notes of all their ideas they get so you don't forget them. {'\n'} Currently available in the App Store, and is localized in English & Arabic."
  return (
    <div className="AppDevelopment">
      <Header>
        <h2>App Development</h2>
        <h4>Below are some of the iOS apps I made with Swift.</h4>
      </Header>

      <Content>

        {/* ********* light up ********* */}
        <AppDevPageSection
          image = "lightup-ss.png"
          icon = "lightup-icon.png"
          title="Light Up"
          description={`LightUp allows users to brainstorm new ideas by generating random words to inspire them. If they like a specific word it can be locked to prevent it from changing when generating new words. Users can also make notes of all their ideas they get so you don't forget them.`}
          description2="Currently available in the App Store, and is localized in English & Arabic."          
          buttonText= "View on the App Store"
          buttonIcon="ant-design:apple-filled"
          buttonHref="https://apps.apple.com/us/app/light-up-idea-brainstorming/id1550799231"
          largeContainerLeft
        />


        {/* ********* starship adventure ********* */}
        <AppDevPageSection
          image = "starshipadventure-ss.png"
          videoUrl="https://www.youtube.com/watch?v=nWvXHZj4lm0"
          icon = "starshipadventure-icon.png"
          title="Starship Adventure"
          description="Starship Adventure is a game where the user tries to find the correct angle and velocity to fly the rocket from Earth and land safely on Mars. On each round Mars is placed at a different location." 
          tinytext="This app was made by my team and I for our 48-hour Hackathon submission for CSC214 - Fall 2020 - University of Rochester"
        />

        {/* ********* watch what ********* */}
        <AppDevPageSection
          image = "watchwhat-ss.png"
          videoUrl="https://www.youtube.com/watch?v=nWvXHZj4lm0"
          icon = "watchwhat-icon.png"
          title="Watch What?"
          description={`Can't decide on what to watch next? Open the "Watch What" app and swipe through the randomly generated T.V. shows, and double tap on the ones you like to save them to your favorites list!`}
          tinytext="This app was made as a project for CSC214 - Fall 2020 - University of Rochester"
          largeContainerLeft
        />

        {/* ********* trip rate ********* */}

        <AppDevPageSection
          image = "triprate-ss.png"
          videoUrl="https://www.youtube.com/watch?v=nWvXHZj4lm0"
          icon = "triprate-icon.png"
          title="TripRate"
          description={`The app allows the user to log their trips' information, including the trip's name, description, type, number of people accompanied, and the amount of fun they had. There's also a status tab to track information regarding all the trips.`}
          tinytext="This app was made as a project for CSC214 - Fall 2020 - University of Rochester"
        />

      </Content>

    </div>
  );
}

export default AppDevelopment;
