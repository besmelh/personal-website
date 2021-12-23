import React from "react";
import styled from 'styled-components';
import MyButton from "./MyButton";

const StyledContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    padding:2%;

    & .VideoPlayer{
        height: 90%;
        width: 90%;
    }

`;


function FramedDiv(props) {
    const {children, ...other } = props;

    return(
        <StyledContainer {...other}>
            {children}
        </StyledContainer>
    );
}

export default FramedDiv;