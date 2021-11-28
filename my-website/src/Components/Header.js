import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`

    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: justify;
    font-family: "Avenir", sans-serif;
    background-color: var(--color-primary);
    color: var(--color-secondary);

    & div {
        padding: 0 15%;
        max-width: 1200px; 
    }

    & h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }

    & h3 {
        font-weight: 400;
        font-size: 23px;
        margin:0;
    }
`;

function Header(props) {
    return (
      <HeaderContainer>
          <div>
            {props.children}
          </div>
      </HeaderContainer>
    );
  }
  
  export default Header;