import React from "react";
import styled from 'styled-components';
import MyButton from "./MyButton";

const StyledContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    margin: 10% 0;

    & img{
        width: 100%;
    }

    & .container-small {
        width: 35%;
    }

    & .container-medium{
        width: 50%;
        position: relative;
    }

    & .tinytext{
        font-size:10px;
    }

    & button {
        margin: 15px 0;
    }


    & .VideoPlayer {
        position: absolute;
        top: 0;
        left: 0;
    }

`;


function LeftRightContainer(props) {
    const {children, ...other } = props;

    return(

        <StyledContainer {...other}>
            {children}
        </StyledContainer>
    );
}

export default LeftRightContainer;