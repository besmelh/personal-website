import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import DevProjectSection from '../Components/DevProjectSection';


function WebDevelopment() {

const lightupDesc = "LightUp allows users to brainstorm new ideas by generating random words to inspire them. If they like a specific word it can be locked to prevent it from changing when generating new words. Users can also make notes of all their ideas they get so you don't forget them. {'\n'} Currently available in the App Store, and is localized in English & Arabic."
  return (
    <div className="AppDevelopment">
      <Header>
        <h2>Web Development</h2>
        <h4>Below are some of the Full-stack and Front-end website development projects I worked on using React and/or Vanilla JS/HTML/CSS.</h4>
      </Header>

      <Content>

      
        {/* ********* millie ********* */}
        <DevProjectSection
          image = "https://i.ibb.co/qYQ1HqQ/millie-ss.png"
          icon = "https://i.ibb.co/vXNcrVp/millie-icon.png"
          title="Millie's School Recommender"
          description={`During my time as a Tech & Product Intern at Millie Group in Summer 2021, I worked on Millie’s internal school recommender tool which will be used to view and manage Millie’s existing info in their database of schools in a user-friendly UI.`}
          buttonText= "View on Github"
          buttonIcon="akar-icons:github-fill"
          buttonHref="https://github.com/besmelh/millie-school-recommender-2021"
          largeContainerLeft
        >
          <p>My work included:</p>
          <ol>
            <li>Conducting <strong>user research</strong> to finalize the portal’s functionality and features.</li>
            <li>Designed the <strong>UI/UX</strong> of the portal through a Figma prototype.</li>
            <li>Developed a <strong>full-stack</strong> website using React, Material UI, and Express. And managed some databases through AWS and PostgreSQL.</li>
          </ol>
        </DevProjectSection>

        <Divider/>

        {/* ********* dandyhacks ********* */}
        <DevProjectSection
          image = "https://i.ibb.co/ZcDcWTT/dh-ss.png"
          icon = "https://i.ibb.co/bJcXk5D/dh-2021-icon.png"
          title="Dandyhacks 2021"
          description="Developed and maintained DandyHacks’ website using HTML/CSS/JS in preparation for the Hackathon event, alongside my other teammates." 
          buttonText= "Go to Website"
          buttonIcon="akar-icons:link-chain"
          buttonHref="https://dandyhacks.net/"
          buttonText2= "View on Github"
          buttonIcon2="akar-icons:github-fill"
          buttonHref2="https://github.com/dandyhacks/website"
        />

      </Content>

    </div>
  );
}

export default WebDevelopment;
