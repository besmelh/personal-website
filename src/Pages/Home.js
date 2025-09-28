import Header from '../Components/Header';
import Content from '../Components/Content';
import MainPageSection from '../Components/MainPageSection';
import data from './data.json';
import StaryBackground from '../Components/StaryBackground';
import MyButton from '../Components/MyButton';
import SplineObject from '../Components/SplineObject';
import { Canvas } from '@react-three/fiber';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_Phobigone from '../Components/PlanetDisplay_Phobigone';
import PlanetDisplay_BalanceBuddy from '../Components/PlanetDisplay_BalanceBuddy';
import PlanetDisplay_BoppityBopLofi from '../Components/PlanetDisplay_BoppityBopLofi';
import PlanetDisplay_LightUp from '../Components/PlanetDisplay_LightUp';
import PlanetDisplay_SoniClean from '../Components/PlanetDisplay_SoniClean';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

function Home() {
  const transition = { duration: 0.5, type: 'spring' };

const ButtonsList = styled.div`
  display: flex;
  margin-top: 20px; /* adds padding/space above the button list */

  & button {
    margin-right: 15px;
    display: flex;
    align-items: center;
  }

  /* mobile view: stack vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & button {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

  return (
    <motion.div
      className='Home'
      style={{ position: 'relative', width: '100%', height: '100%' }}
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      // transition={{ duration: 1 }}
    >
      <ScrollToTop>
        <div>
          <StaryBackground />

          <Header main={true} topGradient stars>
            <div className='icon' style={{ width: '35%' }}>
              <img
                src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/astronaut2.png?v=1643078319594'
                alt='astronaut-besmelh'
              />
            </div>
            <div className='homeText'>
              <h1>Hello, I'm Besmelh Alshaalan</h1>
              <h3>
                This is my space to showcase some of my favorite projects. Where
                I integrate Software Development with arts and visuals.
              </h3>

              <ButtonsList>
                <MyButton href='https://www.linkedin.com/in/besmelh-alshaalan/'>
                  <Icon icon='entypo-social:linkedin-with-circle' />
                  LinkedIn
                </MyButton>

                <MyButton href='https://github.com/besmelh/'>
                  <Icon icon='octicon:mark-github-16' />
                  Github
                </MyButton>
  
                <MyButton href='mailto:besmelh.alshaalan@gmail.com'>
                  <Icon icon='clarity:email-solid' />
                  E-mail
                </MyButton>
              </ButtonsList>
            </div>
          </Header>
        </div>

        <Content noHomeButton>
          {/* ********* phobigone ********* */}
          <MainPageSection
            title='Phobigone'
            summary='VR game application to help users overcome their phobias (fear of the dark, heights, small spaces).'
            href='phobigone'
            allignedLeft={false}
          >
            <PlanetDisplay_Phobigone hoverable />
          </MainPageSection>

            {/* ********* soniclean ********* */}
            <MainPageSection
            title='SoniClean'
            summary="Concept design of a shoe cleaning device that's fast, convenient, and safe."
            href='soniclean'
            allignedLeft={true}
          >
            <PlanetDisplay_SoniClean hoverable />
          </MainPageSection>

          <MainPageSection
            title='BalanceBuddy'
            summary='Website to balance between students’ schoolwork & internship search process through daily tasks & progress dashboard.'
            href='balancebuddy'
            allignedLeft={false}
          >
            <PlanetDisplay_BalanceBuddy hoverable />
          </MainPageSection>

          {/* ********* lofi ********* */}
          <MainPageSection
            title='Boppity-Bop Lofi'
            summary='Audio visualizer website, with a relaxing window view (buildings, trees, clouds) that animates to Lo-fi music.'
            href='boppity-bop-lofi'
            allignedLeft={true}
          >
            <PlanetDisplay_BoppityBopLofi hoverable />
          </MainPageSection>

          {/* ********* lightup ********* */}
          <MainPageSection
            title='LightUp'
            summary='An iOS app for brainstorming ideas; it displays random words and has the option to write ideas in "sticky notes".'
            href='lightup'
            allignedLeft={false}
          >
            <PlanetDisplay_LightUp hoverable />
          </MainPageSection>
        </Content>
      </ScrollToTop>
    </motion.div>
  );
}

export default Home;
