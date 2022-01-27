import React from "react";
import styled from 'styled-components';
import StaryBackground from '../Components/StaryBackground';

const HeaderContainer = styled.div`

    padding: 10%;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-family: "PralineMCL", sans-serif;
    color: var(--color-secondary-dark);
    color:white;

    & h1 {
        font-size: 38px;
        margin-bottom: 10px;
        letter-spacing: 0.05em;
        text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    }

    & h2 {
        font-size: 40px;
        margin-bottom: 10px;
        font-weight:800;
        text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    }

    & h3 {
        font-weight: 400;
        font-size: 18px;
        margin:0;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    & h4 {
        font-weight: 200;
        font-size: 18px;
        margin:0;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    & br {
        display: hide;
    }

    & .icon {
        width:40%;
        padding-right: 5%;

        & img{
            width:100%;
            animation: float 6s ease-in-out infinite;
        }
    }

    & .homeText{
        width: 60%;
        margin-top: 15%;
    }


`;

const GradientBG = styled.div`
    position: absolute;
    width: 100%;
    height: 460px;
    left: 0;
    top: 0;
    z-index: -100;

    background: linear-gradient(180deg, rgba(232, 225, 254, 0.6) 0%, rgba(232, 225, 254, 0) 100%);
`;

function Header(props) { 
    return (
      <HeaderContainer style={props.style}>
         <GradientBG/>
        { props.stars && <StaryBackground/> } 
        {props.children}
      </HeaderContainer>
    );
  }
  
  export default Header;