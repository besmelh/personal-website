import React from "react";
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  color:white;
  max-width: 1200px;
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: column
`;

function Content(props) {
  return (
    <StyledContentContainer>
      {props.children}
    </StyledContentContainer>
  );
}
  
export default Content;