import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import MainPageSection from '../Components/MainPageSection';
import LeftRightContainer from '../Components/LeftRightContainer';
import data from './data.json';
import StaryBackground from '../Components/StaryBackground';
import MyButton from '../Components/MyButton';

function Home() { 

  let pageSections = [];
  let isAllignedLeft = false;

  for (var i = 0; i < data.length; i++) {
    
    pageSections.push(
      <MainPageSection
        title={data[i].title}
        duration = {data[i].duration}
        summary = {data[i].summary}
        skills = {data[i].skills}
        href = {data[i].href}

        src = {data[i].src}
        ios-src=""
        poster= {data[i].poster}
        alt= {data[i].alt}

        allignedLeft = {isAllignedLeft}
      />
    )

    isAllignedLeft = !isAllignedLeft;
  }

  return (
    <div className="Home" style={{position:"relative", width: "100%", height: "100%"}}>
      <StaryBackground/>  
      <Header>
          <div className="icon">
              <img src="https://i.ibb.co/4dPJ8hK/astronaut1.png" alt="astronaut1"/>
          </div>
          <div className="text">
              <h1>Hello, I'm Besmelh Alshaalan</h1>
              <h3>This is my space to showcase some of my favorite projects. I mainly do software programming, digital design, and occasionally marketing.</h3>
              <MyButton redirect href="/about-me" style={{marginTop: "20px"}}>More about me...</MyButton>
          </div>
        </Header>

        <Content noHomeButton>
          {pageSections}
        </Content>
    </div>
  );
}

export default Home;





