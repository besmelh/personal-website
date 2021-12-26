import React from "react";
import styled from 'styled-components';

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
        flex-direction: column;
    }

    & .container-medium{
        width: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
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