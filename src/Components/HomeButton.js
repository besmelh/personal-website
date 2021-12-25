import styled from 'styled-components';
import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';



const StyledButton = styled(ButtonUnstyled)`

    && {
        color: var(--color-secondary-dark);
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 100%;
        padding: 10px;
        font-weight:100;
        font-size: 50px;

        position: sticky;
        bottom: 5%;
        left: 5%;
        width: 90px;
        height: 90px;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 0.5);
        z-index: 1000;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        & svg {
            color: var(--color-secondary-dark);
        }
    }

    &&:hover {
        background-color: var(--color-primary-extraLight);
        cursor: pointer;       
        box-shadow: 0 0 10px 0 var(--color-primary-alpha20);
    }
`;


function HomeButton(props) {

    const {href, children, ...other } = props;
    const navigate = useNavigate();
    return (
      <StyledButton 
        onClick={() => {navigate('/')}} 
        {...other}>

        <Icon icon="bx:bx-home" />

      </StyledButton>
    );
  }
  
  export default HomeButton;