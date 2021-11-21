import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';


function Home() {
  return (
    <div className="Home">
     <Header>
        <h1>Hello</h1>
        <h3>Hello2</h3>
      </Header>

      <Content>
        <h1>hello</h1>
      </Content>
    </div>
  );
}

export default Home;
