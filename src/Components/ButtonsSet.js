import React from 'react';
import styled from 'styled-components';

const StyledSet = styled.div`
  display: flex;
  gap: 5%;
  width: 100%;
`;

function ButtonsSet(props) {
  const { children, ...other } = props;

  return <StyledSet {...other}>{children}</StyledSet>;
}

export default ButtonsSet;
