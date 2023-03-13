import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_LightUp from '../Components/PlanetDisplay_LightUp';

function LightUp(props) {
  const transition = { duration: 0.5, type: 'spring' };

  return (
    <div>
      <ScrollToTop>
        <Header stars>
          <div className='icon'>
            <PlanetDisplay_LightUp />
          </div>

          <div>
            <h2>LightUp</h2>
            <h4>
              Below are some of the iOS apps I made with Swift, and VR projects
              made with Unity.
            </h4>
          </div>
        </Header>

        <div>
          <Content>
            {/* ********* lightup ********* */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
            </p>
          </Content>
        </div>
      </ScrollToTop>
    </div>
  );
}

export default LightUp;
