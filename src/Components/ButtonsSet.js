import React from 'react';
import styled from 'styled-components';

const StyledSet = styled.div`
  display: flex;

  & button {
    margin-right: 15px;
  }
`;

function ButtonsSet(props) {
  const { children, ...other } = props;

  return <StyledSet {...other}>{children}</StyledSet>;
}

export default ButtonsSet;
