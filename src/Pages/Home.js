import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import MainPageSection from '../Components/MainPageSection';
import data from './data.json';

function Home() { 

  let pageSections = [];
  let isAllignedLeft = false;

  for (var i = 0; i < data.length; i++) {
    
    pageSections.push(
      <MainPageSection
        title={data[i].title}
        duration = {data[i].duration}
        summary = {data[i].summary}
        image = {data[i].image}
        skills = {data[i].skills}
        href = {data[i].href}
        allignedLeft = {isAllignedLeft}
      />
    )

    isAllignedLeft = !isAllignedLeft;
  }

  return (
    <div className="Home">
     <Header style={{backgroundColor: "transparent"}}>
        <model-viewer
          src="models/Astronaut.glb"
          ios-src=""
          poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
          alt="A 3D model of an astronaut"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
          style={{height: "500px", width: "500px"}}
        ></model-viewer>
        <h1>Hello, I'm Besmelh Alshaalan</h1>
        <h3>This is my space to showcase some of my favorite projects. I mainly do software programming, digital design, and occasionally marketing.</h3>
      </Header>

      <Content noHomeButton>
        {pageSections}
      </Content>
    </div>
  );
}

export default Home;





