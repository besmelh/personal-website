import React from "react";
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  color:white;
`;

function Content(props) {
    return (
      <StyledContentContainer>
        {props.children}
      </StyledContentContainer>
    );
  }
  
  export default Content;