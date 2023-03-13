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

function Home() {
  const transition = { duration: 0.5, type: 'spring' };

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

          <Header topGradient stars>
            <div className='icon'>
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

              <MyButton redirect href='/about-me' style={{ marginTop: '20px' }}>
                More about me...
              </MyButton>
            </div>
          </Header>
        </div>

        <Content noHomeButton>
          {/* ********* phobigone ********* */}
          <MainPageSection
            title='Phobigone'
            summary='VR game application to help users overcome their phobias (fear of the dark, heights, small spaces).'
            href='phobigone'
            allignedLeft={true}
          >
            <PlanetDisplay_Phobigone hoverable />
          </MainPageSection>

          {/* ********* lofi ********* */}
          <MainPageSection
            title='Boppity-Bop Lofi'
            summary='Audio visualizer website, with a relaxing window view (buildings, trees, clouds) that animates to Lo-fi music.'
            href='boppity-bop-lofi'
            allignedLeft={false}
          >
            <PlanetDisplay_BoppityBopLofi hoverable />
          </MainPageSection>

          {/* ********* balancebuddy ********* */}
          <MainPageSection
            title='BalanceBuddy'
            summary='Website to balance between students’ schoolwork & internship search process through daily tasks & progress dashboard.'
            href='balancebuddy'
            allignedLeft={true}
          >
            <PlanetDisplay_BalanceBuddy hoverable />
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
