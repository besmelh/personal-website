import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function TwoElementDiv(props) {
  const { children, height, leftPercent, rightPercent, ...other } = props;
  const e1 = children[0];
  const e2 = children[1];

  return (
    <StyledContainer style={{ height: height }} {...other}>
      <div style={{ width: leftPercent, height: '100%' }}>{e1}</div>
      <div style={{ width: rightPercent, height: '100%' }}>{e2}</div>
    </StyledContainer>
  );
}

export default TwoElementDiv;
