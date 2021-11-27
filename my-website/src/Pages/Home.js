import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import MainPageSection from '../Components/MainPageSection';

function Home() {
  return (
    <div className="Home">
     <Header>
        <h1>Hello, I'm Besmelh Alshaalan</h1>
        <h3>This is my space to showcase some of my favorite projects. I mainly do software programming, digital design, and occasionally marketing.</h3>
      </Header>

      <Content>
        <MainPageSection
          title='About Me'
          summary = "I'm currently a student at the University of Rochester, majoring in Computer Science and minoring in Digital Media Studies."
          image = 'app-dev.png'
          skills = 'Full-stack development, UI/UX design'
          allignedLeft = 'false'
        />     

        <MainPageSection
          title='Title'
          duration = '2020 - Present'
          summary = 'Lorem ipsum This is my space to showcase some of my favorite projects.'
          image = 'app-dev.png'
          skills = 'Full-stack development, UI/UX design'
          allignedLeft = 'true'
        />
      </Content>
    </div>
  );
}

export default Home;





