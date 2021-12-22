import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Gallery from '../Components/Gallery';


function TutatainBakery() {

  return (
    <div>
      <Header>
        <h2>Tutatain Bakery</h2>
        <h4>Tutatain is a bakery founded by my mother and me in the Summer of 2020. My mother took care of the baking, and I took care of the branding and marketing. We're still a small business, but we hope to expand in the future.</h4>
      </Header>

      <Content>
            <Gallery/>
      </Content>

    </div>
  );
}

export default TutatainBakery;
