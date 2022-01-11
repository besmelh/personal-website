import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import MainPageSection from '../Components/MainPageSection';
import LeftRightContainer from '../Components/LeftRightContainer';
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
     <Header>
        <div className="icon">
            <img src="https://i.ibb.co/4dPJ8hK/astronaut1.png" alt="astronaut1"/>
        </div>
        <div className="text">
            <h1>Hello, I'm Besmelh Alshaalan</h1>
            <h3>This is my space to showcase some of my favorite projects. I mainly do software programming, digital design, and occasionally marketing.</h3>
        </div>
      </Header>

      <Content noHomeButton>
        {pageSections}
      </Content>
    </div>
  );
}

export default Home;





