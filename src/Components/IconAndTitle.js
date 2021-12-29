import styled from 'styled-components';

function IconAndTitle(props) {

    const StyledIconAndTitle= styled.div`
        display: flex;
        width: 100%;

        & img, svg{
            width: ${props.width};
            height: 100%;
            align-self: center;
            margin-right: 5%;
        }
    `;
    return (
      <StyledIconAndTitle>
          {props.children}
      </StyledIconAndTitle>
    );
  }
  
  export default IconAndTitle;