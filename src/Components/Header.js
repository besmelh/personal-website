import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`

    //height: 350px;
    padding: 10% 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    font-family: "Avenir", sans-serif;
    background-color: var(--color-primary);
    color: var(--color-secondary-dark);

    & div {
        padding: 0 15%;
        max-width: 1200px; 
    }

    & h1 {
        font-size: 44px;
        margin-bottom: 10px;
        letter-spacing: 0.05em;
    }

    & h2 {
        font-size: 40px;
        margin-bottom: 10px;
        font-weight:800;
    }

    & h3 {
        font-weight: 400;
        font-size: 23px;
        margin:0;
    }

    & h4 {
        font-weight: 200;
        font-size: 18px;
        margin:0;
    }

    & br {
        display: hide;
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