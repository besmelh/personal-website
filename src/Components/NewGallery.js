import React from "react";
import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: flex; 
    
    & img{
        width: 50%;
    }
`;


function NewGallery(props) { 

    const {children} = props;

    return (
        <GalleryContainer>
            {children}
        </GalleryContainer>
    );
  }
  
  export default NewGallery;