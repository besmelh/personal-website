import styled from 'styled-components';
import React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { useNavigate } from "react-router-dom";



const StyledButton = styled(ButtonUnstyled)`

    && {
        color: white;
        background: linear-gradient(180deg, rgba(204, 188, 255, 0.4) 0%, rgba(58, 58, 58, 0.17) 100%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
        border-radius: 100px;
        padding: 10px 28px;
        font-weight:100;
        font-size: 15px;

        & svg {
            margin-right: 5px;
            color: var(--color-primary);
        }
    }

    &&:hover {
        background-color: var(--color-secondary-dark);
        cursor: pointer;
    }
`;


function MyButton(props) {

    const {href, children, redirect, ...other } = props;
    const navigate = useNavigate();

    return (
      <StyledButton 
        // onClick={() => { redirect ? rightContainer : null window.open(href);}} 
        onClick={() => { redirect ?  navigate(href) : window.open(href)}} 
        {...other}>

        {children}
        
      </StyledButton>
    );
  }
  
  export default MyButton;