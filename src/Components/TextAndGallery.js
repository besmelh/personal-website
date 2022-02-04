import React from 'react';
import Gallery from './Gallery';
import MyButton from './MyButton';
import styled from 'styled-components';

// const StyledTextAndGallery = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     align-content: center;
//     justify-content: center;
//     margin: 10% 0;



// `

const StyledTextAndGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 10% 0;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:60%;
    margin-bottom: 30px;

    & h2 {
        margin-bottom: 0;
    }

    & p{
        text-align: center;
    }

    @media (max-width: 730px) {
      width:100%;
    }
  }
`

const StyledButton = styled(MyButton)`
    margin-top: 30px;
`



function TextAndGallery(props) {

    const {title, description, buttonText, buttonHref, images, ...other } = props;

    return (
      <StyledTextAndGallery {...other}>
        <TextDiv>
          <h2>{title}</h2>
          <p>{description}</p>
        </TextDiv>

        <Gallery images={images}/>
          
        {buttonText && <StyledButton href={buttonHref}>{buttonText}</StyledButton>} 
      </StyledTextAndGallery>

    );
  }
  
  export default TextAndGallery;