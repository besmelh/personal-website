import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  border: none;
  border-top: 2px solid var(--color-primary-alpha20);
  border-radius: 5px;
  width: 50%;
`;

function Divider(props) {
  const { ...other } = props;

  return <StyledDivider {...other} />;
}

export default Divider;
