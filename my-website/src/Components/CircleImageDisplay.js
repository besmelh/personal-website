import React from "react";
import styled from 'styled-components';


const StyledImageDisplay = styled.div`
`;

function CircleImageDisplay(props) {
    return (
      <StyledContentContainer>
        {props.children}
      </StyledContentContainer>
    );
  }
    
  export default CircleImageDisplay;