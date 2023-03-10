import Header from '../Components/Header';
import Content from '../Components/Content';
import MainPageSection from '../Components/MainPageSection';
import data from './data.json';
import StaryBackground from '../Components/StaryBackground';
import MyButton from '../Components/MyButton';
import SplineObject from '../Components/SplineObject';
import { Canvas } from '@react-three/fiber';
import Spline from '@splinetool/react-spline';

function Home() {
  let pageSections = [];
  let isAllignedLeft = false;

  for (var i = 0; i < data.length; i++) {
    pageSections.push(
      <MainPageSection
        title={data[i].title}
        duration={data[i].duration}
        summary={data[i].summary}
        skills={data[i].skills}
        href={data[i].href}
        src={data[i].src}
        ios-src=''
        poster={data[i].poster}
        alt={data[i].alt}
        allignedLeft={isAllignedLeft}
      />
    );

    isAllignedLeft = !isAllignedLeft;
  }

  return (
    <div
      className='Home'
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <StaryBackground />
      <Header>
        <div className='icon'>
          <img
            src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/astronaut2.png?v=1643078319594'
            alt='astronaut-besmelh'
          />
        </div>
        <div className='homeText'>
          <h1>Hello, I'm Besmelh Alshaalan</h1>
          <h3>
            This is my space to showcase some of my favorite projects. Where I
            integrate Software Development with arts and visuals.
          </h3>

          <MyButton redirect href='/about-me' style={{ marginTop: '20px' }}>
            More about me...
          </MyButton>
        </div>
      </Header>

      <Content noHomeButton>
        {/* ********* phobigone ********* */}
        <MainPageSection
          title='Phobigone'
          summary="VR app to reduce people's fears."
          skills='Unity, Software Development, UI/UX design, Blender'
          href='vr-mobile-apps'
          src='https://prod.spline.design/EaVEPovGuLXxV1Bk/scene.splinecode'
          allignedLeft={true}
        />

        {/* ********* balancebuddy ********* */}
        <MainPageSection
          title='BalanceBuddy'
          summary="VR app to reduce people's fears."
          skills='Unity, Software Development, UI/UX design, Blender'
          href='web-development'
          src='https://prod.spline.design/Q7TUOjInZ3KxPOXL/scene.splinecode'
          allignedLeft={false}
        />
      </Content>
    </div>
  );
}

export default Home;
