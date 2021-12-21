import React from "react";
import styled from 'styled-components';
import MyButton from "./MyButton";

const StyledContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    margin: 10% 0;


    & h2 {
        font-weight: 200;
        font-size: 30px;
    }

    & p {
        font-size: 15px;
        line-height: 1.2;
        text-align: justify;
    }

    & img{
            width: 100%;
        }

    & .container-small {
        width: 35%;
    }

    & .container-medium{
        width: 50%;
    }

    & .tinytext{
        font-size:10px;
    }

    & button {
        margin: 15px 0;
    }

`;


function LeftRightContainer(props) {
    return ( 
        <StyledContainer >

        { props.children }

        </StyledContainer>
    );
}

export default LeftRightContainer;