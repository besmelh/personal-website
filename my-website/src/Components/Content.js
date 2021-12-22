import React from "react";
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  max-width: 1200px;
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: column
`;

function Content(props) {

  const {children, ...other } = props;

  return (
    <StyledContentContainer {...other}>
      {children}
    </StyledContentContainer>
  );
}
  
export default Content;