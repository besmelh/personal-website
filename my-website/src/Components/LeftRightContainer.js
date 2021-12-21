import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
`;

const Container1 = styled.div`
    width: 300px;
`;

const Container2 = styled.div`
    width: 300px;

    & img{
        width: 100%;
    }
`;

function LeftRightContainer(props) {
    return (
      <StyledContainer>

          <Container1>
                <h2>Light Up</h2>
                <p>LightUp allows users to brainstorm new ideas by generating random words to inspire them. If they like a specific word it can be locked to prevent it from changing when generating new words. Users can also make notes of all their ideas they get so you don't forget them. Currently available in the App Store, and is localized in English & Arabic.</p>
                <button>Button</button>
          </Container1>

          <Container2>
              <img src={require(`../Images/lightup-ss.png`).default}/>
          </Container2>

      </StyledContainer>
    );
  }
  
  export default LeftRightContainer;