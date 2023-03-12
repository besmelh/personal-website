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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
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
        </motion.div>

        <Content noHomeButton>
          {/* <motion.div
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={transition}
        >
          <Spline scene='https://prod.spline.design/96OBBqAkJjYL-Bz1/scene.splinecode' />
        </motion.div> */}

          {/* ********* phobigone ********* */}
          <MainPageSection
            title='Phobigone'
            summary="VR app to reduce people's fears."
            skills='Unity, Software Development, UI/UX design, Blender'
            href='phobigone'
            allignedLeft={true}
          >
            <PlanetDisplay_Phobigone />
          </MainPageSection>

          {/* ********* balancebuddy ********* */}
          <MainPageSection
            title='BalanceBuddy'
            summary="VR app to reduce people's fears."
            skills='Unity, Software Development, UI/UX design, Blender'
            href='web-development'
            src='https://prod.spline.design/Q7TUOjInZ3KxPOXL/scene.splinecode'
            allignedLeft={false}
          >
            <PlanetDisplay_Phobigone />
          </MainPageSection>
        </Content>
      </ScrollToTop>
    </motion.div>
  );
}

export default Home;
