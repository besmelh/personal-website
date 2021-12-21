import styled from 'styled-components';
import * as React from 'react';
import ReactDOM from 'react-dom';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';


const StyledButton= styled(ButtonUnstyled)`

    &&{
        color: var(--color-primary);
        background-color: Transparent;
        border: 1px solid var(--color-primary);
        border-radius: 100px;
        padding: 10px 18px;
        font-weight:100;
        font-size: 15px;

        & svg {
            margin-right: 5px;
            color: var(--color-primary);
        }
    }

`;


function MyButton(props) {
    return (
      <StyledButton>
          {props.children}
      </StyledButton>
    );
  }
  
  export default MyButton;