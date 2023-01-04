import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import DevProjectSection from '../Components/DevProjectSection';

function AppDevelopment() {
  const src =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/apps-planet.glb?v=1642024423999';
  const poster =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/apps-planet.png?v=1642120092441';
  const alt = 'app dev planet 3d model';
  const modelDimension = '400px';

  return (
    <div className='AppDevelopment'>
      <Header stars>
        <div className='icon'>
          <model-viewer
            src={src}
            poster={poster}
            alt={alt}
            shadow-intensity='0'
            auto-rotate
            camera-controls
            style={{ height: modelDimension, width: modelDimension }}
            seamless-poster
          ></model-viewer>
        </div>

        <div>
          <h2>VR & Mobile Apps</h2>
          <h4>
            Below are some of the iOS apps I made with Swift, and VR projects
            made with Unity.
          </h4>
        </div>
      </Header>

      <Content>
        {/* ********* phobigone ********* */}
        <DevProjectSection
          image='https://i.ibb.co/3W0dFxz/phobigone.png'
          icon='https://i.ibb.co/vYbMzmk/phobigone-logo.png'
          title='Phobigone'
          description={`Phobigone is a VR app, that allows users to confront their fears in a safe virtual environment. Users get to choose from 3 scenarios that test one's fear of the dark, heights, and tight spaces. In each scenario, the user must complete a task to overcome the fear with which they are confronted with.`}
          videoUrl='https://youtu.be/z7GhZehCUkI'
          buttonText='Learn more'
          buttonIcon='gg:website'
          buttonHref='https://sites.google.com/u.rochester.edu/phobigone-vr/home?authuser=0'
          largeContainerLeft
        ></DevProjectSection>

        <Divider />

        {/* ********* light up ********* */}
        <DevProjectSection
          image='https://i.ibb.co/NC2fPY3/lightup-ss.webp'
          icon='https://i.ibb.co/T4w9c4T/lightup-icon.webp'
          title='Light Up'
          description={`LightUp allows users to brainstorm new ideas by generating random words to inspire them. If they like a specific word it can be locked to prevent it from changing when generating new words. Users can also make notes of all their ideas they get so you don't forget them.`}
          buttonText='Learn more'
          buttonIcon='gg:website'
          buttonHref='https://balshaal.wixsite.com/lightup'
        ></DevProjectSection>

        <Divider />

        {/* ********* starship adventure ********* */}
        <DevProjectSection
          image='https://i.ibb.co/KmZSDKk/starshipadventure-ss.png'
          videoUrl='https://youtu.be/ZpMdABTKWbU'
          icon='https://i.ibb.co/1KBGB8g/starshipadventure-icon.webp'
          title='Starship Adventure'
          description='Starship Adventure is a game where the user tries to find the correct angle and velocity to fly the rocket from Earth and land safely on Mars. On each round Mars is placed at a different location.'
          largeContainerLeft
        >
          <p className='tinytext'>
            This app was made by my team and I for our 48-hour Hackathon
            submission for CSC214 - Fall 2020 - University of Rochester
          </p>
        </DevProjectSection>

        <Divider />

        {/* ********* watch what ********* */}
        <DevProjectSection
          image='https://i.ibb.co/PQbr0jb/watchwhat-ss.webp'
          videoUrl='https://youtu.be/P9AHAqrAPxU'
          icon='https://i.ibb.co/LZkhjwm/watchwhat-icon.webp'
          title='Watch What?'
          description={`Can't decide on what to watch next? Open the "Watch What" app and swipe through the randomly generated T.V. shows, and double tap on the ones you like to save them to your favorites list!`}
        >
          <p className='tinytext'>
            This app was made as a project for CSC214 - Fall 2020 - University
            of Rochester
          </p>
        </DevProjectSection>

        <Divider />
        {/* ********* trip rate ********* */}

        <DevProjectSection
          image='https://i.ibb.co/wLwVM7Y/triprate-ss.webp'
          videoUrl='https://youtu.be/Hru0tVorDks'
          icon='https://i.ibb.co/GvCyZ6D/triprate-icon.webp'
          title='TripRate'
          description={`The app allows the user to log their trips' information, including the trip's name, description, type, number of people accompanied, and the amount of fun they had. There's also a status tab to track information regarding all the trips.`}
          largeContainerLeft
        >
          <p className='tinytext'>
            This app was made as a project for CSC214 - Fall 2020 - University
            of Rochester
          </p>
        </DevProjectSection>
      </Content>
    </div>
  );
}

export default AppDevelopment;
